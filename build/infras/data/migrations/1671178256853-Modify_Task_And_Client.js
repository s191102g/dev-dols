"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyTaskAndClient1671178256853 = void 0;
class ModifyTaskAndClient1671178256853 {
    constructor() {
        this.name = 'ModifyTaskAndClient1671178256853';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "task" ADD "dead_line" character varying`);
        await queryRunner.query(`CREATE TYPE "public"."client_pay_enum" AS ENUM('ispay', 'notpay')`);
        await queryRunner.query(`ALTER TABLE "client" ADD "pay" "public"."client_pay_enum"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "pay"`);
        await queryRunner.query(`DROP TYPE "public"."client_pay_enum"`);
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "dead_line"`);
    }
}
exports.ModifyTaskAndClient1671178256853 = ModifyTaskAndClient1671178256853;
