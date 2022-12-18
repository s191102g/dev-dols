"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTaskHandler = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const MessageError_1 = require("../../../shared/exceptions/message/MessageError");
const SystemError_1 = require("../../../shared/exceptions/SystemError");
const CommandHandler_1 = require("../../../shared/usecase/CommandHandler");
const DeleteTaskOutput_1 = require("./DeleteTaskOutput");
let DeleteTaskHandler = class DeleteTaskHandler extends CommandHandler_1.CommandHandler {
    constructor(_taskRepository) {
        super();
        this._taskRepository = _taskRepository;
    }
    async handle(id) {
        const task = await this._taskRepository.getById(id);
        if (!task) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.DATA_NOT_FOUND);
        }
        const hasSucess = await this._taskRepository.softDelete(id);
        const result = new DeleteTaskOutput_1.DeleteTaskOutput();
        result.setData(hasSucess);
        return result;
    }
};
DeleteTaskHandler = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, typedi_1.Inject)("task.repository")),
    tslib_1.__metadata("design:paramtypes", [Object])
], DeleteTaskHandler);
exports.DeleteTaskHandler = DeleteTaskHandler;
