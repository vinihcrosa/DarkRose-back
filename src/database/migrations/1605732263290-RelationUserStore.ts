import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationUserStore1605732263290 implements MigrationInterface {
    name = 'RelationUserStore1605732263290'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stores" RENAME COLUMN "user_id" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "stores" ALTER COLUMN "userId" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "stores"."userId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "stores" ADD CONSTRAINT "FK_f36d697e265ed99b80cae6984c9" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stores" DROP CONSTRAINT "FK_f36d697e265ed99b80cae6984c9"`);
        await queryRunner.query(`COMMENT ON COLUMN "stores"."userId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "stores" ALTER COLUMN "userId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stores" RENAME COLUMN "userId" TO "user_id"`);
    }

}
