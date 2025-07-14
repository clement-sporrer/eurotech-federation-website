import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// Route pour créer une candidature depuis le formulaire
export async function POST(req: NextRequest) {
  const body = await req.json();

  if (!body.answers || typeof body.answers !== 'object') {
    return NextResponse.json({ error: 'Invalid answers format' }, { status: 400 });
  }

  const application = await prisma.application.create({
    data: {
      answers: body.answers,
    },
  });

  return NextResponse.json(application, { status: 201 });
}