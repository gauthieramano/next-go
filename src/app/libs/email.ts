import { Resend } from "resend";

type Args = {
  to: string;
  subject: string;
  html: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);
const EMAIL_FROM = process.env.EMAIL_FROM!;

export const sendEmail = async (emailPayload: Args) => {
  const { error } = await resend.emails.send({
    from: EMAIL_FROM,
    ...emailPayload,
  });

  if (error) {
    const { message, name, ...rest } = error;
    const label = ["Resend", name, ...Object.values(rest)].join("/");

    throw new Error(`[${label}] ${message}`);
  }
};
