/*
  Warnings:

  - Added the required column `featuredImageUrl` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `synopsis` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "featuredImageUrl" TEXT NOT NULL,
ADD COLUMN     "synopsis" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "profileImage" TEXT;
