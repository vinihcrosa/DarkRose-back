import { MigrationInterface, QueryRunner } from "typeorm";

export default class CreateStore1605731129644 implements MigrationInterface {
    name = 'CreateStore1605731129644'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "password" TO "user_password"`);
        await queryRunner.query(`CREATE TABLE "stores" ("store_id" SERIAL NOT NULL, "store_name" character varying NOT NULL, "user_id" integer NOT NULL, "store_settings" json NOT NULL, CONSTRAINT "PK_123fd77ff9cffa555180ca737ff" PRIMARY KEY ("store_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "stores"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "user_password" TO "password"`);
    }

}
