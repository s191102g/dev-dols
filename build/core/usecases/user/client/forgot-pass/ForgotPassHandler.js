"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPassHandler = void 0;
const tslib_1 = require("tslib");
const crypto_1 = require("crypto");
const typedi_1 = require("typedi");
const validator_1 = require("../../../../../utils/validator");
const Client_1 = require("../../../../domain/entities/user/Client");
const userEnum_1 = require("../../../../domain/enums/userEnum");
const MessageError_1 = require("../../../../shared/exceptions/message/MessageError");
const SystemError_1 = require("../../../../shared/exceptions/SystemError");
const CommandHandler_1 = require("../../../../shared/usecase/CommandHandler");
const ForgotPassOutput_1 = require("./ForgotPassOutput");
let ForgotPassHandler = class ForgotPassHandler extends CommandHandler_1.CommandHandler {
    constructor(_clientRepository, _cryptoServiceL, _mailService) {
        super();
        this._clientRepository = _clientRepository;
        this._cryptoServiceL = _cryptoServiceL;
        this._mailService = _mailService;
    }
    async handle(param) {
        await (0, validator_1.validateDataInput)(param);
        const client = await this._clientRepository.getByEmail(this._cryptoServiceL.encrypt(param.email));
        if (!client) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.DATA_NOT_FOUND);
        }
        if (client.typeUse === userEnum_1.TypeUse.WithGG) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.DATA_INVALID);
        }
        if (client.status === userEnum_1.StatusType.InActive) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.UNAUTHORIZED);
        }
        if (client.status == userEnum_1.StatusType.Archived) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.PARAM_IS_BANED, 'account');
        }
        const data = new Client_1.Client();
        const newPass = (0, crypto_1.randomBytes)(4).toString("hex");
        data.passWord = newPass;
        await this._mailService.sendMailForgotPass(param.email, newPass);
        const updated = await this._clientRepository.update(client.id, data);
        const result = new ForgotPassOutput_1.ForgotPassOutput();
        result.setData(updated);
        return result;
    }
};
ForgotPassHandler = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, typedi_1.Inject)("client.repository")),
    tslib_1.__param(1, (0, typedi_1.Inject)('crypto.service')),
    tslib_1.__param(2, (0, typedi_1.Inject)("mail.service")),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object])
], ForgotPassHandler);
exports.ForgotPassHandler = ForgotPassHandler;
