"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BanClientHandler = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const validator_1 = require("../../../../../utils/validator");
const Client_1 = require("../../../../domain/entities/user/Client");
const userEnum_1 = require("../../../../domain/enums/userEnum");
const MessageError_1 = require("../../../../shared/exceptions/message/MessageError");
const SystemError_1 = require("../../../../shared/exceptions/SystemError");
const CommandHandler_1 = require("../../../../shared/usecase/CommandHandler");
const BanClientOutput_1 = require("./BanClientOutput");
let BanClientHandler = class BanClientHandler extends CommandHandler_1.CommandHandler {
    constructor(_clientRepository) {
        super();
        this._clientRepository = _clientRepository;
    }
    async handle(param) {
        await (0, validator_1.validateDataInput)(param);
        const client = await this._clientRepository.getById(param.idUser);
        if (!client) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.DATA_NOT_FOUND);
        }
        const data = new Client_1.Client();
        data.status = userEnum_1.StatusType.Archived;
        const hasSuccess = await this._clientRepository.update(param.idUser, data);
        const result = new BanClientOutput_1.BanClientOutput();
        result.setData(hasSuccess);
        return result;
    }
};
BanClientHandler = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, typedi_1.Inject)("client.repository")),
    tslib_1.__metadata("design:paramtypes", [Object])
], BanClientHandler);
exports.BanClientHandler = BanClientHandler;
