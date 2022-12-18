"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindTaskHandler = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const ITaskRepository_1 = require("../../../gateways/repositories/task/ITaskRepository");
const QueryHandler_1 = require("../../../shared/usecase/QueryHandler");
const FindTaskOutput_1 = require("./FindTaskOutput");
let FindTaskHandler = class FindTaskHandler extends QueryHandler_1.QueryHandler {
    constructor(_taskRepository) {
        super();
        this._taskRepository = _taskRepository;
    }
    async handle(param) {
        const filter = new ITaskRepository_1.FindTaskFilter();
        filter.setPagination(param.skip, param.limit);
        filter.keyword = param.keyword;
        filter.dataId = param.dataId;
        const [tasks, count] = await this._taskRepository.findAndCount(filter);
        const result = new FindTaskOutput_1.FindTaskOutput();
        result.setData(tasks);
        result.setPagination(count, param.skip, param.limit);
        return result;
    }
};
FindTaskHandler = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, typedi_1.Inject)("task.repository")),
    tslib_1.__metadata("design:paramtypes", [Object])
], FindTaskHandler);
exports.FindTaskHandler = FindTaskHandler;
