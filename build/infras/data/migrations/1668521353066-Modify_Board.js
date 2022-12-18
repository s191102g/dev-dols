"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyBoard1668521353066 = void 0;
class ModifyBoard1668521353066 {
    constructor() {
        this.name = 'ModifyBoard1668521353066';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "board" ALTER COLUMN "icon" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "board" ALTER COLUMN "position" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "board" ALTER COLUMN "favourite_position" DROP NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "board" ALTER COLUMN "favourite_position" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "board" ALTER COLUMN "position" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "board" ALTER COLUMN "icon" SET NOT NULL`);
    }
}
exports.ModifyBoard1668521353066 = ModifyBoard1668521353066;
