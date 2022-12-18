"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePassAdminHandler = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const validator_1 = require("../../../../../utils/validator");
const Admin_1 = require("../../../../domain/entities/user/Admin");
const MessageError_1 = require("../../../../shared/exceptions/message/MessageError");
const SystemError_1 = require("../../../../shared/exceptions/SystemError");
const CommandHandler_1 = require("../../../../shared/usecase/CommandHandler");
const UpdatePassClientOutput_1 = require("../../client/update-pass-client/UpdatePassClientOutput");
let UpdatePassAdminHandler = class UpdatePassAdminHandler extends CommandHandler_1.CommandHandler {
    constructor(_adminRepository) {
        super();
        this._adminRepository = _adminRepository;
    }
    async handle(userId, param) {
        await (0, validator_1.validateDataInput)(param);
        const client = await this._adminRepository.getById(userId);
        if (!client) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.DATA_NOT_FOUND);
        }
        if (!client.comparePassword(param.oldPass)) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.PARAM_INCORRECT, "password");
        }
        const data = new Admin_1.Admin();
        data.passWord = param.newPass;
        const success = await this._adminRepository.update(client.id, data);
        const result = new UpdatePassClientOutput_1.UpdatePassClientOutput();
        result.setData(success);
        return result;
    }
};
UpdatePassAdminHandler = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, typedi_1.Inject)('admin.repository')),
    tslib_1.__metadata("design:paramtypes", [Object])
], UpdatePassAdminHandler);
exports.UpdatePassAdminHandler = UpdatePassAdminHandler;
