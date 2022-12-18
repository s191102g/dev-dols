"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyRelationshipBoardData1669538814258 = void 0;
class ModifyRelationshipBoardData1669538814258 {
    constructor() {
        this.name = 'ModifyRelationshipBoardData1669538814258';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "data" DROP CONSTRAINT "FK_0f6b9046ec4321abd99a6de8796"`);
        await queryRunner.query(`ALTER TABLE "data" DROP CONSTRAINT "REL_0f6b9046ec4321abd99a6de879"`);
        await queryRunner.query(`ALTER TABLE "data" ADD CONSTRAINT "FK_0f6b9046ec4321abd99a6de8796" FOREIGN KEY ("board_id") REFERENCES "board"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "data" DROP CONSTRAINT "FK_0f6b9046ec4321abd99a6de8796"`);
        await queryRunner.query(`ALTER TABLE "data" ADD CONSTRAINT "REL_0f6b9046ec4321abd99a6de879" UNIQUE ("board_id")`);
        await queryRunner.query(`ALTER TABLE "data" ADD CONSTRAINT "FK_0f6b9046ec4321abd99a6de8796" FOREIGN KEY ("board_id") REFERENCES "board"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.ModifyRelationshipBoardData1669538814258 = ModifyRelationshipBoardData1669538814258;
