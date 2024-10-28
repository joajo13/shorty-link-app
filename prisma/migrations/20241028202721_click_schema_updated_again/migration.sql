/*
  Warnings:

  - Made the column `countryCode` on table `Click` required. This step will fail if there are existing NULL values in that column.
  - Made the column `latitude` on table `Click` required. This step will fail if there are existing NULL values in that column.
  - Made the column `longitude` on table `Click` required. This step will fail if there are existing NULL values in that column.
  - Made the column `regionCode` on table `Click` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Click" ALTER COLUMN "countryCode" SET NOT NULL,
ALTER COLUMN "latitude" SET NOT NULL,
ALTER COLUMN "longitude" SET NOT NULL,
ALTER COLUMN "regionCode" SET NOT NULL;
