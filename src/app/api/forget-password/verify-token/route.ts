import { NextResponse } from "next/server";
import { prisma } from "@/app/libs/prismaDB";

export const POST = async (request: any) => {
  const body = await request.json();
  const { token } = body;

  if (!token) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: {
      passwordResetToken: token,
      passwordResetTokenExp: {
        gte: new Date(),
      },
    },
  } as any);

  if (!user) {
    return new NextResponse("Invalid Token or Token Expired", { status: 400 });
  }

  return NextResponse.json(user);
};
