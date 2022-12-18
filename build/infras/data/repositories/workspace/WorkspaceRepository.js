"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceRepository = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const WorkSpaceDb_1 = require("../../entities/workspace/WorkSpaceDb");
const BoardSchema_1 = require("../../schemas/board/BoardSchema");
const DataSchema_1 = require("../../schemas/datas/DataSchema");
const TaskSchema_1 = require("../../schemas/task/TaskSchema");
const WorkSpaceSchema_1 = require("../../schemas/workspace/WorkSpaceSchema");
const BaseRepository_1 = require("../base/BaseRepository");
let WorkspaceRepository = class WorkspaceRepository extends BaseRepository_1.BaseRepository {
    constructor() {
        super(WorkSpaceDb_1.WorkSpaceDb, WorkSpaceSchema_1.WORKSPACE_SCHEMA);
    }
    async findAndCount(param) {
        let query = this.repository.createQueryBuilder(WorkSpaceSchema_1.WORKSPACE_SCHEMA.TABLE_NAME);
        if (param.keyword) {
            const keyword = `%${param.keyword}%`;
            query = query.andWhere(`${WorkSpaceSchema_1.WORKSPACE_SCHEMA.TABLE_NAME}.${WorkSpaceSchema_1.WORKSPACE_SCHEMA.COLUMNS.NAME} ILIKE :keyword`, { keyword });
        }
        query = query.skip(param.skip).take(param.limit);
        const [list, count] = await query.getManyAndCount();
        return [list.map((item) => item.toEntity()), count];
    }
    async findByUser(userId) {
        const query = this.repository
            .createQueryBuilder(WorkSpaceSchema_1.WORKSPACE_SCHEMA.TABLE_NAME)
            .where(`${WorkSpaceSchema_1.WORKSPACE_SCHEMA.TABLE_NAME}.${WorkSpaceSchema_1.WORKSPACE_SCHEMA.COLUMNS.USER_ID} = :userId `, { userId });
        const result = await query.getMany();
        return result.map((e) => e.toEntity());
    }
    async checkNameExist(name) {
        let query = this.repository
            .createQueryBuilder(WorkSpaceSchema_1.WORKSPACE_SCHEMA.TABLE_NAME)
            .where(`lower(${WorkSpaceSchema_1.WORKSPACE_SCHEMA.TABLE_NAME}.${WorkSpaceSchema_1.WORKSPACE_SCHEMA.COLUMNS.NAME}) = lower(:name)`, { name });
        const result = await query.getOne();
        return !!result;
    }
    async getAll() {
        let query = this.repository
            .createQueryBuilder(WorkSpaceSchema_1.WORKSPACE_SCHEMA.TABLE_NAME)
            .leftJoinAndSelect(`${WorkSpaceSchema_1.WORKSPACE_SCHEMA.TABLE_NAME}.${WorkSpaceSchema_1.WORKSPACE_SCHEMA.RELATED_MANY.BOARD}`, `${BoardSchema_1.BOARD_SCHEMA.TABLE_NAME}`)
            .leftJoinAndSelect(`${BoardSchema_1.BOARD_SCHEMA.TABLE_NAME}.${BoardSchema_1.BOARD_SCHEMA.RELATED_MANY.DATA}`, `${DataSchema_1.DATA_SCHEMA.TABLE_NAME}`)
            .leftJoinAndSelect(`${DataSchema_1.DATA_SCHEMA.TABLE_NAME}.${DataSchema_1.DATA_SCHEMA.RELATED_MANY.TASK}`, `${TaskSchema_1.TASK_SCHEMA.TABLE_NAME}`);
        const result = await query.getMany();
        return result.map((e) => e.toEntity());
    }
    async getByUserAndId(idUser, idWorkspace) {
        let query = this.repository
            .createQueryBuilder(WorkSpaceSchema_1.WORKSPACE_SCHEMA.TABLE_NAME)
            .where(`${WorkSpaceSchema_1.WORKSPACE_SCHEMA.TABLE_NAME}.${WorkSpaceSchema_1.WORKSPACE_SCHEMA.COLUMNS.USER_ID} = :idUser `, { idUser })
            .andWhere(`${WorkSpaceSchema_1.WORKSPACE_SCHEMA.TABLE_NAME}.${WorkSpaceSchema_1.WORKSPACE_SCHEMA.COLUMNS.ID} = :idWorkspace`, { idWorkspace });
        const result = await query.getOne();
        return result ? result.toEntity() : null;
    }
};
WorkspaceRepository = tslib_1.__decorate([
    (0, typedi_1.Service)("workspace.repository"),
    tslib_1.__metadata("design:paramtypes", [])
], WorkspaceRepository);
exports.WorkspaceRepository = WorkspaceRepository;
