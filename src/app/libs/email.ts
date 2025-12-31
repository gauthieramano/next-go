import { ENV } from "@/utils/env";
import { Resend } from "resend";

type Args = {
  to: string;
  subject: string;
  html: string;
};

const resend = new Resend(ENV.RESEND_API_KEY);

export const sendEmail = async (emailPayload: Args) => {
  const { error } = await resend.emails.send({
    from: ENV.EMAIL_FROM,
    ...emailPayload,
  });

  if (error) {
    const { message, name, ...rest } = error;
    const label = ["Resend", name, ...Object.values(rest)].join("/");

    throw new Error(`[${label}] ${message}`);
  }
};
