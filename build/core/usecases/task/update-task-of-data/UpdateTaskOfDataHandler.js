"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaskOfDataHandler = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const validator_1 = require("../../../../utils/validator");
const Task_1 = require("../../../domain/entities/task/Task");
const MessageError_1 = require("../../../shared/exceptions/message/MessageError");
const SystemError_1 = require("../../../shared/exceptions/SystemError");
const CommandHandler_1 = require("../../../shared/usecase/CommandHandler");
const UpdateTaskOfDataOutput_1 = require("./UpdateTaskOfDataOutput");
let UpdateTaskOfDataHandler = class UpdateTaskOfDataHandler extends CommandHandler_1.CommandHandler {
    constructor(_dataRepository, _taskRepository) {
        super();
        this._dataRepository = _dataRepository;
        this._taskRepository = _taskRepository;
    }
    async handle(param) {
        await (0, validator_1.validateDataInput)(param);
        const datas = await this._dataRepository.getById(param.dataId);
        if (!datas) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.DATA_NOT_FOUND);
        }
        for (const item of param.tasks) {
            const data = new Task_1.Task();
            data.title = item.title;
            data.content = item.content;
            data.position = item.position;
            data.dataId = datas.id;
            await this._taskRepository.update(item.id, data);
        }
        const result = new UpdateTaskOfDataOutput_1.UpdateTaskOfDataOutput();
        result.setData(true);
        return result;
    }
};
UpdateTaskOfDataHandler = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, typedi_1.Inject)("data.repository")),
    tslib_1.__param(1, (0, typedi_1.Inject)("task.repository")),
    tslib_1.__metadata("design:paramtypes", [Object, Object])
], UpdateTaskOfDataHandler);
exports.UpdateTaskOfDataHandler = UpdateTaskOfDataHandler;
