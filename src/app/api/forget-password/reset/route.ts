import crypto from "crypto";
import { NextResponse } from "next/server";
import { sendEmail } from "@/app/libs/email";
import { prisma } from "@/app/libs/prismaDB";
import { ENV } from "@/utils/env";

export async function POST(request: any) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json("Missing Fields", { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return NextResponse.json("Email does not exists", { status: 400 });
  }

  const token = crypto.randomBytes(20).toString("hex");

  const expirationDate = new Date();

  expirationDate.setHours(expirationDate.getHours() + 1);

  await prisma.user.update({
    where: {
      email,
    },
    data: {
      passwordResetToken: token,
      passwordResetTokenExp: expirationDate,
    },
  });

  const url = `${ENV.SITE_URL}/auth/reset-password/${token}`;
  const html = /* html */ `
    <div>
      <h1>You requested a password reset</h1>
      <p>Click the link below to reset your password</p>
      <a href="${url}" target="_blank">Reset Password</a>
    </div>
  `;

  try {
    await sendEmail({
      to: email,
      subject: "Reset your password",
      html,
    });

    return NextResponse.json("An email has been sent to your email", {
      status: 200,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json("An error has occurred. Please try again!", {
      status: 500,
    });
  }
}
