"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePaymentHandler = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const MessageError_1 = require("../../../shared/exceptions/message/MessageError");
const SystemError_1 = require("../../../shared/exceptions/SystemError");
const CommandHandler_1 = require("../../../shared/usecase/CommandHandler");
const CreatePaymentOutput_1 = require("./CreatePaymentOutput");
let CreatePaymentHandler = class CreatePaymentHandler extends CommandHandler_1.CommandHandler {
    constructor(_paypalService, _clientRepository) {
        super();
        this._paypalService = _paypalService;
        this._clientRepository = _clientRepository;
    }
    async handle(userId) {
        const client = await this._clientRepository.getById(userId);
        if (!client) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.DATA_NOT_FOUND);
        }
        const link = await this._paypalService.pay();
        const result = new CreatePaymentOutput_1.CreatePaymentOutput();
        result.setData(String(link));
        return result;
    }
};
CreatePaymentHandler = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, typedi_1.Inject)('paypal.service')),
    tslib_1.__param(1, (0, typedi_1.Inject)("client.repository")),
    tslib_1.__metadata("design:paramtypes", [Object, Object])
], CreatePaymentHandler);
exports.CreatePaymentHandler = CreatePaymentHandler;
