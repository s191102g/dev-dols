"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDataHandler = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const validator_1 = require("../../../../utils/validator");
const Data_1 = require("../../../domain/entities/datas/Data");
const MessageError_1 = require("../../../shared/exceptions/message/MessageError");
const SystemError_1 = require("../../../shared/exceptions/SystemError");
const CommandHandler_1 = require("../../../shared/usecase/CommandHandler");
const UpdateDataOutput_1 = require("./UpdateDataOutput");
let UpdateDataHandler = class UpdateDataHandler extends CommandHandler_1.CommandHandler {
    constructor(_broadRepository, _dataRepository) {
        super();
        this._broadRepository = _broadRepository;
        this._dataRepository = _dataRepository;
    }
    async handle(id, param) {
        await (0, validator_1.validateDataInput)(param);
        const data = new Data_1.Data();
        const datas = await this._dataRepository.getById(id);
        if (!datas) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.DATA_NOT_FOUND);
        }
        const board = await this._broadRepository.getById(param.boardId);
        if (!board) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.DATA_NOT_FOUND);
        }
        data.boardId = param.boardId;
        if (param.content)
            data.content = param.content;
        if (param.title)
            data.title = param.title;
        if (param.heading)
            data.heading = param.heading;
        const isSuccess = await this._dataRepository.update(id, data);
        const result = new UpdateDataOutput_1.UpdateDataOutput();
        result.setData(isSuccess);
        return result;
    }
};
UpdateDataHandler = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, typedi_1.Inject)('board.repository')),
    tslib_1.__param(1, (0, typedi_1.Inject)("data.repository")),
    tslib_1.__metadata("design:paramtypes", [Object, Object])
], UpdateDataHandler);
exports.UpdateDataHandler = UpdateDataHandler;
