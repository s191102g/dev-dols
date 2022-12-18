"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAdminProfileHandler = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const validator_1 = require("../../../../../utils/validator");
const Admin_1 = require("../../../../domain/entities/user/Admin");
const MessageError_1 = require("../../../../shared/exceptions/message/MessageError");
const SystemError_1 = require("../../../../shared/exceptions/SystemError");
const CommandHandler_1 = require("../../../../shared/usecase/CommandHandler");
const UpdateClientProfileOutput_1 = require("../../client/update-client-profile/UpdateClientProfileOutput");
let UpdateAdminProfileHandler = class UpdateAdminProfileHandler extends CommandHandler_1.CommandHandler {
    constructor(_adminRepository) {
        super();
        this._adminRepository = _adminRepository;
    }
    async handle(userId, param) {
        await (0, validator_1.validateDataInput)(param);
        const admin = await this._adminRepository.getById(userId);
        if (!admin) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.DATA_NOT_FOUND);
        }
        const data = new Admin_1.Admin();
        if (param.email)
            data.userName = param.email;
        if (param.avatar)
            data.avatar = param.avatar;
        if (param.birthDay)
            data.birthDay = param.birthDay;
        if (param.firstName)
            data.firstName = param.firstName;
        if (param.gender)
            data.gender = param.gender;
        const success = await this._adminRepository.update(admin.id, data);
        const result = new UpdateClientProfileOutput_1.UpdateClientProfileOutput();
        result.setData(success);
        return result;
    }
};
UpdateAdminProfileHandler = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, typedi_1.Inject)('admin.repository')),
    tslib_1.__metadata("design:paramtypes", [Object])
], UpdateAdminProfileHandler);
exports.UpdateAdminProfileHandler = UpdateAdminProfileHandler;
