"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResendActiveHandler = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const validator_1 = require("../../../../../utils/validator");
const Client_1 = require("../../../../domain/entities/user/Client");
const MessageError_1 = require("../../../../shared/exceptions/message/MessageError");
const SystemError_1 = require("../../../../shared/exceptions/SystemError");
const CommandHandler_1 = require("../../../../shared/usecase/CommandHandler");
const crypto_1 = tslib_1.__importDefault(require("crypto"));
const ResendactiveOutput_1 = require("./ResendactiveOutput");
let ResendActiveHandler = class ResendActiveHandler extends CommandHandler_1.CommandHandler {
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
        const data = new Client_1.Client();
        const activeKey = crypto_1.default.randomBytes(4).toString("hex");
        data.activeKey = activeKey;
        await this._mailService.sendMailVertify(param.email, data.activeKey);
        const updated = await this._clientRepository.update(client.id, data);
        const result = new ResendactiveOutput_1.ResendActiveOutput();
        result.setData(updated);
        return result;
    }
};
ResendActiveHandler = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, typedi_1.Inject)('client.repository')),
    tslib_1.__param(1, (0, typedi_1.Inject)('crypto.service')),
    tslib_1.__param(2, (0, typedi_1.Inject)("mail.service")),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object])
], ResendActiveHandler);
exports.ResendActiveHandler = ResendActiveHandler;
