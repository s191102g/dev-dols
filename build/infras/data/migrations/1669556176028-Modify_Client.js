"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyClient1669556176028 = void 0;
class ModifyClient1669556176028 {
    constructor() {
        this.name = 'ModifyClient1669556176028';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE "public"."client_type_use_enum" AS ENUM('normal', 'withgg')`);
        await queryRunner.query(`ALTER TABLE "client" ADD "type_use" "public"."client_type_use_enum"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "type_use"`);
        await queryRunner.query(`DROP TYPE "public"."client_type_use_enum"`);
    }
}
exports.ModifyClient1669556176028 = ModifyClient1669556176028;
