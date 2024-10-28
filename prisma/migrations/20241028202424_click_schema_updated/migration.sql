-- AlterTable
ALTER TABLE "Click" ADD COLUMN     "countryCode" TEXT DEFAULT 'Unknown',
ADD COLUMN     "latitude" DOUBLE PRECISION DEFAULT 0,
ADD COLUMN     "longitude" DOUBLE PRECISION DEFAULT 0,
ADD COLUMN     "regionCode" TEXT DEFAULT 'Unknown';
