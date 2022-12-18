"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepository = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const TaskDb_1 = require("../../entities/task/TaskDb");
const TaskSchema_1 = require("../../schemas/task/TaskSchema");
const BaseRepository_1 = require("../base/BaseRepository");
let TaskRepository = class TaskRepository extends BaseRepository_1.BaseRepository {
    constructor() {
        super(TaskDb_1.TaskDb, TaskSchema_1.TASK_SCHEMA);
    }
    async findAndCount(param) {
        let query = this.repository.createQueryBuilder(TaskSchema_1.TASK_SCHEMA.TABLE_NAME);
        const dataId = param.dataId;
        query.where(`${TaskSchema_1.TASK_SCHEMA.TABLE_NAME}.${TaskSchema_1.TASK_SCHEMA.COLUMNS.DATA_ID} = :dataId `, { dataId });
        if (param.keyword) {
            const keyword = `%${param.keyword}%`;
            query = query.andWhere(`${TaskSchema_1.TASK_SCHEMA.TABLE_NAME}.${TaskSchema_1.TASK_SCHEMA.COLUMNS.TITLE} ILIKE :keyword`, { keyword });
        }
        query = query.skip(param.skip).take(param.limit);
        const [list, count] = await query.getManyAndCount();
        return [list.map((item) => item.toEntity()), count];
    }
};
TaskRepository = tslib_1.__decorate([
    (0, typedi_1.Service)("task.repository"),
    tslib_1.__metadata("design:paramtypes", [])
], TaskRepository);
exports.TaskRepository = TaskRepository;
