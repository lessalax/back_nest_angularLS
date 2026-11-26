import { MigrationInterface, QueryRunner } from "typeorm";

export class RelacionPersonaUser1795725367495 implements MigrationInterface {
    name = 'RelacionPersonaUser1795725367495'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "mail" TO "email"`);
        await queryRunner.query(`ALTER TABLE "persona" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "persona" ADD CONSTRAINT "UQ_551ede1f9ac73b4e8f18495c6da" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "persona" ADD CONSTRAINT "FK_551ede1f9ac73b4e8f18495c6da" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "persona" DROP CONSTRAINT "FK_551ede1f9ac73b4e8f18495c6da"`);
        await queryRunner.query(`ALTER TABLE "persona" DROP CONSTRAINT "UQ_551ede1f9ac73b4e8f18495c6da"`);
        await queryRunner.query(`ALTER TABLE "persona" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "email" TO "mail"`);
    }

}
