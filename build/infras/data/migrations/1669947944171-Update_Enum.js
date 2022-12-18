"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEnum1669947944171 = void 0;
class UpdateEnum1669947944171 {
    constructor() {
        this.name = 'UpdateEnum1669947944171';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TYPE "public"."client_status_enum" RENAME TO "client_status_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."client_status_enum" AS ENUM('actived', 'Inactive', 'Archived')`);
        await queryRunner.query(`ALTER TABLE "client" ALTER COLUMN "status" TYPE "public"."client_status_enum" USING "status"::"text"::"public"."client_status_enum"`);
        await queryRunner.query(`DROP TYPE "public"."client_status_enum_old"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`CREATE TYPE "public"."client_status_enum_old" AS ENUM('actived', 'Inactive')`);
        await queryRunner.query(`ALTER TABLE "client" ALTER COLUMN "status" TYPE "public"."client_status_enum_old" USING "status"::"text"::"public"."client_status_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."client_status_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."client_status_enum_old" RENAME TO "client_status_enum"`);
    }
}
exports.UpdateEnum1669947944171 = UpdateEnum1669947944171;
