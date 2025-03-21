import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { name, email } = await req.json();
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return NextResponse.json(newUser);
  } catch (error: any) {
    console.error("Error creating user:", error);
    return NextResponse.json({ success: false, message: error.message });
  }
}
