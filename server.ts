import express from "express";
import path from "path";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { createServer as createViteServer } from "vite";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// API route to book appointments and send emails
app.post("/api/book", async (req, res) => {
  try {
    const { patientName, phone, email, doctor, service, date, timeSlot, notes } = req.body;

    // Server-side validation
    if (!patientName || !phone || !doctor || !service || !date || !timeSlot) {
      return res.status(400).json({ error: "Missing required appointment fields" });
    }

    const appointmentId = "apt-" + Math.random().toString(36).substring(2, 9);
    const createdAt = new Date().toISOString();

    const appointment = {
      id: appointmentId,
      patientName,
      phone,
      email: email || "",
      doctor,
      service,
      date,
      timeSlot,
      notes: notes || "",
      status: "confirmed",
      createdAt,
    };

    // EmailJS Configuration (from user credentials with env overrides support)
    const emailjsServiceId = process.env.EMAILJS_SERVICE_ID || "service_gbcczaf";
    const emailjsTemplateId = process.env.EMAILJS_TEMPLATE_ID || "template_9g0e1la";
    const emailjsPublicKey = process.env.EMAILJS_PUBLIC_KEY || "tA9iSzqyQkNGd7RYZ";
    const isEmailJSConfigured = !!(emailjsServiceId && emailjsTemplateId && emailjsPublicKey);

    // Configuration check for SMTP
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const clinicEmail = process.env.CLINIC_RECEIVER_EMAIL || "chaitanmetaads@gmail.com";

    const isSmtpConfigured = !!(smtpHost && smtpUser && smtpPass);

    let emailSentResult = { patient: false, clinic: false, simulated: !isSmtpConfigured && !isEmailJSConfigured };

    // 1. Try sending via EmailJS API (primary handler)
    if (isEmailJSConfigured) {
      console.log(`[EmailJS] Attempting to dispatch email notification via EmailJS with Service ID: ${emailjsServiceId}`);
      try {
        const emailjsResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: emailjsServiceId,
            template_id: emailjsTemplateId,
            user_id: emailjsPublicKey,
            template_params: {
              // Map all possible parameter names so they automatically match any placeholders in the user's template
              patientName,
              patient_name: patientName,
              from_name: patientName,
              name: patientName,
              
              phone,
              patient_phone: phone,
              mobile: phone,
              contact: phone,
              
              email: email || "Not provided",
              patient_email: email || "Not provided",
              from_email: email || "Not provided",
              
              doctor,
              doctor_name: doctor,
              practitioner: doctor,
              
              service,
              service_name: service,
              treatment: service,
              
              date,
              appointment_date: date,
              booking_date: date,
              
              timeSlot,
              time: timeSlot,
              slot: timeSlot,
              
              notes: notes || "None",
              notes_detail: notes || "None",
              message: notes || "None",
              symptoms: notes || "None",
              
              appointmentId,
              id: appointmentId,
              ticket_id: appointmentId,
              
              createdAt,
              created_at: createdAt
            }
          })
        });

        if (emailjsResponse.ok) {
          console.log("[EmailJS] Notification successfully sent!");
          emailSentResult.clinic = true;
          if (email && email.trim() !== "") {
            emailSentResult.patient = true;
          }
          emailSentResult.simulated = false;
        } else {
          const errText = await emailjsResponse.text();
          console.error(`[EmailJS] Failed to send email. Status: ${emailjsResponse.status}, Response: ${errText}`);
        }
      } catch (err) {
        console.error("[EmailJS] Exception occurred during fetch dispatch:", err);
      }
    }

    // 2. Try sending via SMTP (fallback handler) if EmailJS wasn't used or failed, and SMTP is configured
    if (isSmtpConfigured && !emailSentResult.clinic) {
      console.log(`[SMTP] Attempting to send confirmation emails using SMTP host: ${smtpHost}`);
      
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      // HTML Template for Patient
      const patientHtml = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff;">
          <div style="text-align: center; border-bottom: 2px solid #3b82f6; padding-bottom: 20px; margin-bottom: 20px;">
            <h2 style="color: #1e3a8a; margin: 0; font-size: 24px;">Samarth Multispeciality Clinic</h2>
            <p style="color: #64748b; margin: 5px 0 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Appointment Ticket Confirmed</p>
          </div>
          
          <p style="color: #334155; font-size: 15px; line-height: 1.6;">Dear <strong>${patientName}</strong>,</p>
          <p style="color: #334155; font-size: 15px; line-height: 1.6;">Your health consultation slot has been successfully booked. Please find your reservation details below:</p>
          
          <div style="background-color: #f8fafc; border-left: 4px solid #10b981; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600; width: 35%;">Ticket ID:</td>
                <td style="padding: 6px 0; color: #1e293b; font-weight: bold;">${appointmentId}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Practitioner:</td>
                <td style="padding: 6px 0; color: #1e293b; font-weight: bold;">${doctor}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Clinical Service:</td>
                <td style="padding: 6px 0; color: #1e293b;">${service}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Preferred Date:</td>
                <td style="padding: 6px 0; color: #1e293b; font-weight: bold;">${date}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Time Slot:</td>
                <td style="padding: 6px 0; color: #1e293b; font-weight: bold;">${timeSlot}</td>
              </tr>
              ${notes ? `
              <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600; vertical-align: top;">Symptom Details:</td>
                <td style="padding: 6px 0; color: #475569; font-style: italic;">${notes}</td>
              </tr>` : ""}
            </table>
          </div>
          
          <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 12px; margin-top: 20px; font-size: 13px; color: #1e40af;">
            <strong>Patient Guidelines:</strong> Please arrive 10 minutes prior to your selected slot. For rapid assistance or slot modification, call the clinic coordinator desk directly at <strong>+91 9172605860</strong>.
          </div>
          
          <div style="margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 15px; text-align: center; font-size: 12px; color: #94a3b8;">
            <p style="margin: 0;">Samarth Multispeciality Clinic & Surgery Daycare. Alandi Moshi Road, Pune.</p>
            <p style="margin: 5px 0 0 0;">This email is automatically sent as confirmation of your clinical schedule.</p>
          </div>
        </div>
      `;

      // HTML Template for Clinic Admin
      const clinicHtml = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #cbd5e1; border-radius: 16px; background-color: #fafbfd;">
          <div style="text-align: center; border-bottom: 2px solid #10b981; padding-bottom: 20px; margin-bottom: 20px;">
            <h2 style="color: #065f46; margin: 0; font-size: 24px;">New Online Registration Notification</h2>
            <p style="color: #64748b; margin: 5px 0 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Samarth Multispeciality Clinic Dashboard</p>
          </div>
          
          <p style="color: #334155; font-size: 15px; line-height: 1.6;">An appointment reservation has been securely logged online:</p>
          
          <div style="background-color: #ffffff; border: 1px solid #e2e8f0; padding: 18px; border-radius: 12px; margin: 20px 0;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600; width: 35%;">Patient Name:</td>
                <td style="padding: 6px 0; color: #1e293b; font-weight: bold;">${patientName}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Contact Phone:</td>
                <td style="padding: 6px 0; color: #1e293b; font-weight: bold;">
                  <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Contact Email:</td>
                <td style="padding: 6px 0; color: #1e293b;">${email ? `<a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>` : "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Assigned Doctor:</td>
                <td style="padding: 6px 0; color: #10b981; font-weight: bold;">${doctor}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Selected Service:</td>
                <td style="padding: 6px 0; color: #1e293b;">${service}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Requested Date:</td>
                <td style="padding: 6px 0; color: #1e293b; font-weight: bold;">${date}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Time Session:</td>
                <td style="padding: 6px 0; color: #1e293b; font-weight: bold;">${timeSlot}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600; vertical-align: top;">Symptom Notes:</td>
                <td style="padding: 6px 0; color: #334155; white-space: pre-wrap;">${notes || "None"}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Logged On:</td>
                <td style="padding: 6px 0; color: #64748b; font-size: 12px;">${createdAt}</td>
              </tr>
            </table>
          </div>
          
          <div style="margin-top: 30px; border-top: 1px solid #cbd5e1; padding-top: 15px; text-align: center; font-size: 11px; color: #94a3b8;">
            <p style="margin: 0;">Samarth Multispeciality Clinic Management Software</p>
          </div>
        </div>
      `;

      // 1. Send confirmation to clinic
      try {
        await transporter.sendMail({
          from: `"Samarth Multispeciality Clinic Online Desk" <${smtpUser}>`,
          to: clinicEmail,
          subject: `🔔 New Appointment Request: ${patientName} (${date})`,
          html: clinicHtml,
        });
        emailSentResult.clinic = true;
        console.log(`[SMTP] Clinic notification sent successfully to ${clinicEmail}`);
      } catch (err) {
        console.error("[SMTP] Failed to send email to clinic admin:", err);
      }

      // 2. Send confirmation to patient if email is provided
      if (email && email.trim() !== "") {
        try {
          await transporter.sendMail({
            from: `"Samarth Multispeciality Clinic" <${smtpUser}>`,
            to: email,
            subject: `✅ Appointment Confirmed: Ticket ${appointmentId}`,
            html: patientHtml,
          });
          emailSentResult.patient = true;
          console.log(`[SMTP] Patient notification sent successfully to ${email}`);
        } catch (err) {
          console.error(`[SMTP] Failed to send confirmation email to patient (${email}):`, err);
        }
      }
    } else if (!isEmailJSConfigured) {
      console.warn("[SMTP] Email credentials (SMTP_HOST, SMTP_USER, SMTP_PASS) not configured. Emails are simulated.");
    }

    return res.status(200).json({
      success: true,
      message: "Appointment successfully booked!",
      appointment,
      emailSent: emailSentResult,
    });

  } catch (error) {
    console.error("[API] Error processing booking:", error);
    return res.status(500).json({ error: "Internal server error occurred while reserving appointment" });
  }
});

// Configure Vite integration for development mode, or serve production assets
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Server] running on http://localhost:${PORT} under ${process.env.NODE_ENV || "development"} mode`);
  });
}

startServer();
