"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaskHandler = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const validator_1 = require("../../../../utils/validator");
const Task_1 = require("../../../domain/entities/task/Task");
const MessageError_1 = require("../../../shared/exceptions/message/MessageError");
const SystemError_1 = require("../../../shared/exceptions/SystemError");
const CommandHandler_1 = require("../../../shared/usecase/CommandHandler");
const UpdateTaskOutput_1 = require("./UpdateTaskOutput");
let UpdateTaskHandler = class UpdateTaskHandler extends CommandHandler_1.CommandHandler {
    constructor(_dataRepository, _taskRepository) {
        super();
        this._dataRepository = _dataRepository;
        this._taskRepository = _taskRepository;
    }
    async handle(id, param) {
        await (0, validator_1.validateDataInput)(param);
        const datas = await this._dataRepository.getById(param.dataId);
        if (!datas) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.DATA_NOT_FOUND);
        }
        const task = await this._taskRepository.getById(id);
        if (!task) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.DATA_NOT_FOUND);
        }
        const data = new Task_1.Task();
        if (param.title)
            data.title = param.title;
        if (param.content)
            data.content = param.content;
        if (param.position)
            data.position = param.position;
        data.dataId = datas.id;
        const idUpdated = await this._taskRepository.update(id, data);
        const result = new UpdateTaskOutput_1.UpdateTaskOutput();
        result.setData(idUpdated);
        return result;
    }
};
UpdateTaskHandler = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, typedi_1.Inject)("data.repository")),
    tslib_1.__param(1, (0, typedi_1.Inject)("task.repository")),
    tslib_1.__metadata("design:paramtypes", [Object, Object])
], UpdateTaskHandler);
exports.UpdateTaskHandler = UpdateTaskHandler;
