"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDataHandler = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const MessageError_1 = require("../../../shared/exceptions/message/MessageError");
const SystemError_1 = require("../../../shared/exceptions/SystemError");
const CommandHandler_1 = require("../../../shared/usecase/CommandHandler");
const DeleteDataOutput_1 = require("./DeleteDataOutput");
let DeleteDataHandler = class DeleteDataHandler extends CommandHandler_1.CommandHandler {
    constructor(_dataRepository) {
        super();
        this._dataRepository = _dataRepository;
    }
    async handle(id) {
        const datas = await this._dataRepository.getById(id);
        if (!datas) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.DATA_NOT_FOUND);
        }
        const isSuccess = await this._dataRepository.softDelete(id);
        const result = new DeleteDataOutput_1.DeleteDataOutput();
        result.setData(isSuccess);
        return result;
    }
};
DeleteDataHandler = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, typedi_1.Inject)("data.repository")),
    tslib_1.__metadata("design:paramtypes", [Object])
], DeleteDataHandler);
exports.DeleteDataHandler = DeleteDataHandler;
