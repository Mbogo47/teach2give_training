-- CreateTable
CREATE TABLE "products_table" (
    "id" TEXT NOT NULL,
    "product_title" TEXT NOT NULL,
    "task_description" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_table_pkey" PRIMARY KEY ("id")
);
