"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClientProfileHandler = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const MessageError_1 = require("../../../../shared/exceptions/message/MessageError");
const SystemError_1 = require("../../../../shared/exceptions/SystemError");
const CommandHandler_1 = require("../../../../shared/usecase/CommandHandler");
const GetClientProfileOutput_1 = require("./GetClientProfileOutput");
let GetClientProfileHandler = class GetClientProfileHandler extends CommandHandler_1.CommandHandler {
    constructor(_clientRepository) {
        super();
        this._clientRepository = _clientRepository;
    }
    async handle(param) {
        const client = await this._clientRepository.getById(param);
        if (!client) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.DATA_NOT_FOUND);
        }
        const result = new GetClientProfileOutput_1.GetClientProfileOutput();
        result.setData(client);
        return result;
    }
};
GetClientProfileHandler = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, typedi_1.Inject)("client.repository")),
    tslib_1.__metadata("design:paramtypes", [Object])
], GetClientProfileHandler);
exports.GetClientProfileHandler = GetClientProfileHandler;
