"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClientProfileHandler = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const validator_1 = require("../../../../../utils/validator");
const Client_1 = require("../../../../domain/entities/user/Client");
const MessageError_1 = require("../../../../shared/exceptions/message/MessageError");
const SystemError_1 = require("../../../../shared/exceptions/SystemError");
const CommandHandler_1 = require("../../../../shared/usecase/CommandHandler");
const UpdateClientProfileOutput_1 = require("./UpdateClientProfileOutput");
let UpdateClientProfileHandler = class UpdateClientProfileHandler extends CommandHandler_1.CommandHandler {
    constructor(_clientRepository) {
        super();
        this._clientRepository = _clientRepository;
    }
    async handle(userId, param) {
        await (0, validator_1.validateDataInput)(param);
        const client = await this._clientRepository.getById(userId);
        if (!client) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.DATA_NOT_FOUND);
        }
        const data = new Client_1.Client();
        if (param.email)
            data.email = param.email;
        if (param.avatar)
            data.avatar = param.avatar;
        if (param.birthDay)
            data.birthDay = new Date(param.birthDay);
        if (param.firstName)
            data.firstName = param.firstName;
        if (param.gender)
            data.gender = param.gender;
        const success = await this._clientRepository.update(client.id, data);
        const result = new UpdateClientProfileOutput_1.UpdateClientProfileOutput();
        result.setData(success);
        return result;
    }
};
UpdateClientProfileHandler = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, typedi_1.Inject)("client.repository")),
    tslib_1.__metadata("design:paramtypes", [Object])
], UpdateClientProfileHandler);
exports.UpdateClientProfileHandler = UpdateClientProfileHandler;
