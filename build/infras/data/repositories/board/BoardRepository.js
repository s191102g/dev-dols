"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardRepository = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const BoardDb_1 = require("../../entities/board/BoardDb");
const BoardSchema_1 = require("../../schemas/board/BoardSchema");
const DataSchema_1 = require("../../schemas/datas/DataSchema");
const TaskSchema_1 = require("../../schemas/task/TaskSchema");
const BaseRepository_1 = require("../base/BaseRepository");
let BoardRepository = class BoardRepository extends BaseRepository_1.BaseRepository {
    constructor() {
        super(BoardDb_1.BoardDb, BoardSchema_1.BOARD_SCHEMA);
    }
    async getByWorkspaceId(workSpaceId) {
        const query = this.repository
            .createQueryBuilder(BoardSchema_1.BOARD_SCHEMA.TABLE_NAME)
            .where(`${BoardSchema_1.BOARD_SCHEMA.TABLE_NAME}.${BoardSchema_1.BOARD_SCHEMA.COLUMNS.WORKSPACE_ID} =:workSpaceId`, { workSpaceId });
        const result = await query.getMany();
        return result ? result.map((e) => e.toEntity()) : null;
    }
    async getById(id) {
        const result = await this.repository
            .createQueryBuilder(BoardSchema_1.BOARD_SCHEMA.TABLE_NAME)
            .leftJoinAndSelect(`${BoardSchema_1.BOARD_SCHEMA.TABLE_NAME}.${BoardSchema_1.BOARD_SCHEMA.RELATED_MANY.DATA}`, `${DataSchema_1.DATA_SCHEMA.TABLE_NAME}`)
            .leftJoinAndSelect(`${DataSchema_1.DATA_SCHEMA.TABLE_NAME}.${DataSchema_1.DATA_SCHEMA.RELATED_MANY.TASK}`, `${TaskSchema_1.TASK_SCHEMA.TABLE_NAME}`)
            .whereInIds(id)
            .getOne();
        return result ? result.toEntity() : null;
    }
};
BoardRepository = tslib_1.__decorate([
    (0, typedi_1.Service)("board.repository"),
    tslib_1.__metadata("design:paramtypes", [])
], BoardRepository);
exports.BoardRepository = BoardRepository;
