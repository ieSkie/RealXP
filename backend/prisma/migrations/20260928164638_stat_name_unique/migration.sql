/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Stat` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Stat_name_key" ON "Stat"("name");
