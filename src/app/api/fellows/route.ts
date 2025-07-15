// src/app/api/fellows/route.ts
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

// GET /api/fellows - Récupère tous les fellows actifs
export async function GET() {
    try {
        const fellows = await prisma.fellow.findMany({
            where: {
                isActive: true
            },
            orderBy: {
                createdAt: 'asc'
            },
            select: {
                id: true,
                fullName: true,
                country: true,
                linkedin: true,
                photo: true,
                createdAt: true
            }
        });

        return NextResponse.json(fellows);
    } catch (error) {
        console.error('Error fetching fellows:', error);
        return NextResponse.json(
            { error: 'Failed to fetch fellows' }, 
            { status: 500 }
        );
    }
}
