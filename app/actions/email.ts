"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  const senderEmail = process.env.RESEND_SENDER_EMAIL;
  const targetEmail = process.env.PERSONAL_EMAIL;

  if (!senderEmail || !targetEmail) {
    return {
      success: false,
      error: "Configuração de e-mail ausente.",
    };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: `Portfolio <${senderEmail}>`,
      to: [targetEmail],
      subject: `Novo contato: ${subject}`,
      replyTo: email,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: "Falha ao processar o envio.",
    };
  }
}
