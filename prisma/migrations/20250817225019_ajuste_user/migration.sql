/*
  Warnings:

  - Added the required column `NM_USUARIO` to the `USUARIO` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."USUARIO" ADD COLUMN     "NM_USUARIO" TEXT NOT NULL,
ALTER COLUMN "NR_SALDO" SET DEFAULT 0;
