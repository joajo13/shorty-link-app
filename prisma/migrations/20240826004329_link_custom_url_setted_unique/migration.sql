/*
  Warnings:

  - A unique constraint covering the columns `[customUrl]` on the table `Link` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Link_customUrl_key" ON "Link"("customUrl");
