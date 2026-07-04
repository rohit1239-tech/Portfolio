import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #e4e4e7; border-radius: 12px;">
          <h2 style="color: #3b82f6; margin-bottom: 8px;">New Message from Portfolio</h2>
          <hr style="border-color: #e4e4e7; margin-bottom: 20px;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <div style="background: #f4f4f5; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${message}</div>
          <hr style="border-color: #e4e4e7; margin-top: 20px;" />
          <p style="font-size: 12px; color: #71717a;">Sent via rohit-yengantiwar.vercel.app</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
