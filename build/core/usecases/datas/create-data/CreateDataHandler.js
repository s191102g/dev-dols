"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDataHandler = void 0;
const tslib_1 = require("tslib");
const crypto_1 = require("crypto");
const typedi_1 = require("typedi");
const validator_1 = require("../../../../utils/validator");
const Data_1 = require("../../../domain/entities/datas/Data");
const MessageError_1 = require("../../../shared/exceptions/message/MessageError");
const SystemError_1 = require("../../../shared/exceptions/SystemError");
const CommandHandler_1 = require("../../../shared/usecase/CommandHandler");
const CreateDataOutput_1 = require("./CreateDataOutput");
let CreateDataHandler = class CreateDataHandler extends CommandHandler_1.CommandHandler {
    constructor(_broadRepository, _dataRepository) {
        super();
        this._broadRepository = _broadRepository;
        this._dataRepository = _dataRepository;
    }
    async handle(param) {
        await (0, validator_1.validateDataInput)(param);
        const data = new Data_1.Data();
        const board = await this._broadRepository.getById(param.boardId);
        if (!board) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.DATA_NOT_FOUND);
        }
        data.boardId = param.boardId;
        if (param.content)
            data.content = param.content;
        if (param.title)
            data.title = param.title;
        if (param.heading) {
            if (Array.isArray(param.heading)) {
                for (let i = 0; i < param.heading.length; i++) {
                    data.id = (0, crypto_1.randomUUID)();
                    data.heading = param.heading[i];
                    data.content = String(i + 1);
                    await this._dataRepository.create(data);
                }
                const ranId = (0, crypto_1.randomUUID)();
                const result = new CreateDataOutput_1.CreateDataOutput();
                result.setData(ranId);
                return result;
            }
            else {
                data.heading = param.heading;
            }
        }
        const id = await this._dataRepository.create(data);
        const result = new CreateDataOutput_1.CreateDataOutput();
        result.setData(id);
        return result;
    }
};
CreateDataHandler = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, typedi_1.Inject)('board.repository')),
    tslib_1.__param(1, (0, typedi_1.Inject)("data.repository")),
    tslib_1.__metadata("design:paramtypes", [Object, Object])
], CreateDataHandler);
exports.CreateDataHandler = CreateDataHandler;
