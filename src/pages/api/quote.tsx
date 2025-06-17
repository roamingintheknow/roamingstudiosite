import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  console.log('quote mailer api...',req.body)
  const { name, email, message, services, location } = req.body;

  // Basic validation
  if (!name || !email || !message || !location || !Array.isArray(services)) {
    return res.status(400).json({ error: "Invalid form submission" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_EMAIL_PASS,
      },
    });

    // Email to you
    await transporter.sendMail({
      from: `"Quote Request" <${process.env.CONTACT_EMAIL}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `📸 New Quote Request from ${name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Services:</strong> ${services.join(", ")}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-line;">${message}</p>
        <hr />
        <small>This was submitted from the quote form on your site.</small>
      `,
    });

    // Confirmation email to user
    await transporter.sendMail({
      from: `"Roaming In The Know" <${process.env.CONTACT_EMAIL}>`,
      to: email,
      subject: "Thanks for your quote request!",
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 40px 0;">
          <div style="background-color: #ffffff; max-width: 600px; margin: auto; padding: 30px; border: 1px solid #dddddd; border-radius: 6px; color: #333; font-size: 16px; line-height: 1.6;">
            <p>Hey ${name},</p>
            <p>Thanks for reaching out! We’ve received your quote request and will get back to you soon.</p>
            <p><strong>Requested Services:</strong> ${services.join(", ")}</p>
            <p><strong>Location:</strong> ${location}</p>
            <p>Your message:</p>
            <blockquote style="border-left: 4px solid #ccc; margin: 20px 0; padding-left: 16px; color: #555; font-style: italic;">
              ${message}
            </blockquote>
            <p>Talk soon,<br/>Alia & Shawn</p>
            <hr />
            <p style="font-size: 14px; text-align: center;">@roamingintheknow | www.roamingintheknow.com</p>
          </div>
        </div>
      `,
    });

    res.status(200).json({ message: "Quote request sent" });
  } catch (error) {
    console.error("❌ Quote API error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
