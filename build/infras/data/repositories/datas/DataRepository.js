"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataRepository = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const DataDb_1 = require("../../entities/datas/DataDb");
const DataSchema_1 = require("../../schemas/datas/DataSchema");
const TaskSchema_1 = require("../../schemas/task/TaskSchema");
const BaseRepository_1 = require("../base/BaseRepository");
let DataRepository = class DataRepository extends BaseRepository_1.BaseRepository {
    constructor() {
        super(DataDb_1.DataDb, DataSchema_1.DATA_SCHEMA);
    }
    async getById(id) {
        const result = await this.repository
            .createQueryBuilder(DataSchema_1.DATA_SCHEMA.TABLE_NAME)
            .leftJoinAndSelect(`${DataSchema_1.DATA_SCHEMA.TABLE_NAME}.${DataSchema_1.DATA_SCHEMA.RELATED_MANY.TASK}`, `${TaskSchema_1.TASK_SCHEMA.TABLE_NAME}`)
            .whereInIds(id)
            .getOne();
        return result ? result.toEntity() : null;
    }
};
DataRepository = tslib_1.__decorate([
    (0, typedi_1.Service)("data.repository"),
    tslib_1.__metadata("design:paramtypes", [])
], DataRepository);
exports.DataRepository = DataRepository;
