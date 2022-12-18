"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeDealineHandler = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const validator_1 = require("../../../../utils/validator");
const Task_1 = require("../../../domain/entities/task/Task");
const MessageError_1 = require("../../../shared/exceptions/message/MessageError");
const SystemError_1 = require("../../../shared/exceptions/SystemError");
const CommandHandler_1 = require("../../../shared/usecase/CommandHandler");
const MakeDealineOutput_1 = require("./MakeDealineOutput");
const SendDealineHandler_1 = require("./SendDealineHandler");
let MakeDealineHandler = class MakeDealineHandler extends CommandHandler_1.CommandHandler {
    constructor(_taskRepository) {
        super();
        this._taskRepository = _taskRepository;
    }
    async handle(userid, param) {
        await (0, validator_1.validateDataInput)(param);
        const task = await this._taskRepository.getById(param.taskId);
        if (!task) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.DATA_NOT_FOUND);
        }
        const data = { ...task, dealine: param.dealine, userid };
        SendDealineHandler_1.SendDealineHandler.handler(data);
        const dataTask = new Task_1.Task();
        dataTask.deadline = param.dealine;
        const isUpdated = await this._taskRepository.update(task.id, dataTask);
        const result = new MakeDealineOutput_1.MakeDealineOutput();
        result.setData(isUpdated);
        return result;
    }
};
MakeDealineHandler = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, typedi_1.Inject)("task.repository")),
    tslib_1.__metadata("design:paramtypes", [Object])
], MakeDealineHandler);
exports.MakeDealineHandler = MakeDealineHandler;
