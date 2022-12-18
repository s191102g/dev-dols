"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyTask1670324094427 = void 0;
class ModifyTask1670324094427 {
    constructor() {
        this.name = 'ModifyTask1670324094427';
    }
    async up(queryRunner) {
        await queryRunner.query(`DROP INDEX "public"."IDX_36e1b9c231020a6bd064c5d124"`);
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "title" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "content" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "position" DROP NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_36e1b9c231020a6bd064c5d124" ON "task" ("title") WHERE deleted_at IS NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX "public"."IDX_36e1b9c231020a6bd064c5d124"`);
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "position" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "content" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "title" SET NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_36e1b9c231020a6bd064c5d124" ON "task" ("title") WHERE (deleted_at IS NULL)`);
    }
}
exports.ModifyTask1670324094427 = ModifyTask1670324094427;
