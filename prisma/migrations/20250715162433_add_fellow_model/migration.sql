-- CreateTable
CREATE TABLE "Fellow" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fullName" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,
    "photo" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Fellow_pkey" PRIMARY KEY ("id")
);
