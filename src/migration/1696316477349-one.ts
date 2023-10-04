import { MigrationInterface, QueryRunner } from "typeorm";

export class One1696316477349 implements MigrationInterface {
    name = 'One1696316477349'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "discountPerc" character varying`);
        await queryRunner.query(`ALTER TABLE "product" ADD "dummy" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "dummy"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "discountPerc"`);
    }

}
