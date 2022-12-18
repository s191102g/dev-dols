"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAdminProfileHandler = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const MessageError_1 = require("../../../../shared/exceptions/message/MessageError");
const SystemError_1 = require("../../../../shared/exceptions/SystemError");
const CommandHandler_1 = require("../../../../shared/usecase/CommandHandler");
const GetAdminProfileOutput_1 = require("./GetAdminProfileOutput");
let GetAdminProfileHandler = class GetAdminProfileHandler extends CommandHandler_1.CommandHandler {
    constructor(_adminRepository) {
        super();
        this._adminRepository = _adminRepository;
    }
    async handle(param) {
        const admin = await this._adminRepository.getById(param);
        if (!admin) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.DATA_NOT_FOUND);
        }
        const result = new GetAdminProfileOutput_1.GetAdminProfileOutput();
        result.setData(admin);
        return result;
    }
};
GetAdminProfileHandler = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, typedi_1.Inject)('admin.repository')),
    tslib_1.__metadata("design:paramtypes", [Object])
], GetAdminProfileHandler);
exports.GetAdminProfileHandler = GetAdminProfileHandler;
