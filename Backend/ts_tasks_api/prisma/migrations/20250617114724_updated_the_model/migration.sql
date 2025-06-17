/*
  Warnings:

  - You are about to drop the `products_table` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "products_table";

-- CreateTable
CREATE TABLE "tasks_table" (
    "id" TEXT NOT NULL,
    "tasks_title" TEXT NOT NULL,
    "task_description" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tasks_table_pkey" PRIMARY KEY ("id")
);
