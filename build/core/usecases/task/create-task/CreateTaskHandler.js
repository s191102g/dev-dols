"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskHandler = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const validator_1 = require("../../../../utils/validator");
const Task_1 = require("../../../domain/entities/task/Task");
const userEnum_1 = require("../../../domain/enums/userEnum");
const ITaskRepository_1 = require("../../../gateways/repositories/task/ITaskRepository");
const MessageError_1 = require("../../../shared/exceptions/message/MessageError");
const SystemError_1 = require("../../../shared/exceptions/SystemError");
const CommandHandler_1 = require("../../../shared/usecase/CommandHandler");
const CreateTaskOutput_1 = require("./CreateTaskOutput");
let CreateTaskHandler = class CreateTaskHandler extends CommandHandler_1.CommandHandler {
    constructor(_dataRepository, _taskRepository, _clientRepository) {
        super();
        this._dataRepository = _dataRepository;
        this._taskRepository = _taskRepository;
        this._clientRepository = _clientRepository;
    }
    async handle(userId, param) {
        await (0, validator_1.validateDataInput)(param);
        const datas = await this._dataRepository.getById(param.dataId);
        if (!datas) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.DATA_NOT_FOUND);
        }
        const filter = new ITaskRepository_1.FindTaskFilter();
        filter.dataId = param.dataId;
        const [tasks, count] = await this._taskRepository.findAndCount(filter);
        console.log(tasks);
        const client = await this._clientRepository.getById(userId);
        if (!client) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.DATA_INVALID);
        }
        if (count == 5 && client.pay !== userEnum_1.Pay.IsPay) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.USER_NOT_UPDATE);
        }
        const data = new Task_1.Task();
        data.title = param.title;
        data.content = param.content;
        data.dataId = datas.id;
        data.position = param.position;
        const idCreated = await this._taskRepository.create(data);
        const task = await this._taskRepository.getById(idCreated);
        if (!task) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.SOMETHING_WRONG);
        }
        const result = new CreateTaskOutput_1.CreateTaskOutput();
        result.setData(task);
        return result;
    }
};
CreateTaskHandler = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, typedi_1.Inject)("data.repository")),
    tslib_1.__param(1, (0, typedi_1.Inject)("task.repository")),
    tslib_1.__param(2, (0, typedi_1.Inject)('client.repository')),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object])
], CreateTaskHandler);
exports.CreateTaskHandler = CreateTaskHandler;
