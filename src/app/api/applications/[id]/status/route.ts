// src/app/api/applications/[id]/status/route.ts
import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

const VALID_STATUSES = ['PENDING', 'ACCEPTED', 'REJECTED'];

// Route utilisé par le google sheet pour mettre à jour le statut d'une candidature
export async function POST(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const apiKey = req.headers.get('x-api-key');
    if (apiKey !== process.env.APPLICATION_API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { status } = await req.json();

    if (!VALID_STATUSES.includes(status)) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }

    const { id } = await params;
    
    if (!id) {
        return NextResponse.json({ error: 'Application ID is required' }, { status: 400 });
    }

    const application = await prisma.application.findUnique({
        where: { id },
    });

    if (!application) {
        return NextResponse.json({ error: 'Application not found' }, { status: 404 });
    }

    const updated = await prisma.application.update({
        where: { id },
        data: { status },
    });

    return NextResponse.json(updated);
}