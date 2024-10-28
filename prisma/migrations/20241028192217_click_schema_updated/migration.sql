-- AlterTable
ALTER TABLE "Click" ADD COLUMN     "city" TEXT NOT NULL DEFAULT 'Unknown',
ADD COLUMN     "country" TEXT NOT NULL DEFAULT 'Unknown',
ADD COLUMN     "region" TEXT NOT NULL DEFAULT 'Unknown';
