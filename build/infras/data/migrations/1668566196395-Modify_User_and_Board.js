"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyUserAndBoard1668566196395 = void 0;
class ModifyUserAndBoard1668566196395 {
    constructor() {
        this.name = 'ModifyUserAndBoard1668566196395';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "board" ALTER COLUMN "description" DROP NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "board" ALTER COLUMN "description" SET NOT NULL`);
    }
}
exports.ModifyUserAndBoard1668566196395 = ModifyUserAndBoard1668566196395;
