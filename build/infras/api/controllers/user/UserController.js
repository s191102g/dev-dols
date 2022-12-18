"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const routing_controllers_openapi_1 = require("routing-controllers-openapi");
const typedi_1 = require("typedi");
const userEnum_1 = require("../../../../core/domain/enums/userEnum");
const MessageError_1 = require("../../../../core/shared/exceptions/message/MessageError");
const SystemError_1 = require("../../../../core/shared/exceptions/SystemError");
const UserAuthenticated_1 = require("../../../../core/shared/UserAuthenticated");
const GetAdminProfileHandler_1 = require("../../../../core/usecases/user/admin/get-admin-profile/GetAdminProfileHandler");
const GetAdminProfileOutput_1 = require("../../../../core/usecases/user/admin/get-admin-profile/GetAdminProfileOutput");
const UpdateAdminProfileHandler_1 = require("../../../../core/usecases/user/admin/update-admin-profile/UpdateAdminProfileHandler");
const UpdatePassAdminHandler_1 = require("../../../../core/usecases/user/admin/update-pass-admin/UpdatePassAdminHandler");
const GetClientProfileHandler_1 = require("../../../../core/usecases/user/client/get-client-profile/GetClientProfileHandler");
const GetClientProfileOutput_1 = require("../../../../core/usecases/user/client/get-client-profile/GetClientProfileOutput");
const UpdateClienProfiletInput_1 = require("../../../../core/usecases/user/client/update-client-profile/UpdateClienProfiletInput");
const UpdateClientProfileHandler_1 = require("../../../../core/usecases/user/client/update-client-profile/UpdateClientProfileHandler");
const UpdateClientProfileOutput_1 = require("../../../../core/usecases/user/client/update-client-profile/UpdateClientProfileOutput");
const UpdatePassClientHandler_1 = require("../../../../core/usecases/user/client/update-pass-client/UpdatePassClientHandler");
const UpdatePassClientInput_1 = require("../../../../core/usecases/user/client/update-pass-client/UpdatePassClientInput");
const UpdatePassClientOutput_1 = require("../../../../core/usecases/user/client/update-pass-client/UpdatePassClientOutput");
let UserController = class UserController {
    constructor(_getClientprofileHandler, _getAdminprofileHandler, _updateClientProfileHandler, _updateAdminProfileHandler, _updatePassClientHandler, _updatePassAdminHandler) {
        this._getClientprofileHandler = _getClientprofileHandler;
        this._getAdminprofileHandler = _getAdminprofileHandler;
        this._updateClientProfileHandler = _updateClientProfileHandler;
        this._updateAdminProfileHandler = _updateAdminProfileHandler;
        this._updatePassClientHandler = _updatePassClientHandler;
        this._updatePassAdminHandler = _updatePassAdminHandler;
    }
    async getProfile(userAuth) {
        switch (userAuth.role) {
            case userEnum_1.RoleType.Admin:
                return await this._getAdminprofileHandler.handle(userAuth.userId);
            case userEnum_1.RoleType.Client:
                return await this._getClientprofileHandler.handle(userAuth.userId);
            default:
                throw new SystemError_1.SystemError(MessageError_1.MessageError.DATA_INVALID);
        }
    }
    async updateProfile(userAuth, param) {
        switch (userAuth.role) {
            case userEnum_1.RoleType.Admin:
                return await this._updateAdminProfileHandler.handle(userAuth.userId, param);
            case userEnum_1.RoleType.Client:
                return await this._updateClientProfileHandler.handle(userAuth.userId, param);
            default:
                throw new SystemError_1.SystemError(MessageError_1.MessageError.DATA_INVALID);
        }
    }
    async updatePass(userAuth, param) {
        switch (userAuth.role) {
            case userEnum_1.RoleType.Admin:
                return await this._updatePassAdminHandler.handle(userAuth.userId, param);
            case userEnum_1.RoleType.Client:
                return await this._updatePassClientHandler.handle(userAuth.userId, param);
            default:
                throw new SystemError_1.SystemError(MessageError_1.MessageError.DATA_INVALID);
        }
    }
};
tslib_1.__decorate([
    (0, routing_controllers_1.Get)("/profile"),
    (0, routing_controllers_1.Authorized)(),
    (0, routing_controllers_openapi_1.OpenAPI)({
        description: "Get my profile information. Applies to any user.",
    }),
    (0, routing_controllers_openapi_1.ResponseSchema)(GetClientProfileOutput_1.GetClientProfileOutput),
    (0, routing_controllers_openapi_1.ResponseSchema)(GetAdminProfileOutput_1.GetAdminProfileOutput),
    tslib_1.__param(0, (0, routing_controllers_1.CurrentUser)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserAuthenticated_1.UserAuthenticated]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "getProfile", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Put)("/update-profile"),
    (0, routing_controllers_1.Authorized)(),
    (0, routing_controllers_openapi_1.OpenAPI)({
        description: "Update my profile information. Applies to any user.",
    }),
    (0, routing_controllers_openapi_1.ResponseSchema)(UpdateClientProfileOutput_1.UpdateClientProfileOutput),
    tslib_1.__param(0, (0, routing_controllers_1.CurrentUser)()),
    tslib_1.__param(1, (0, routing_controllers_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserAuthenticated_1.UserAuthenticated,
        UpdateClienProfiletInput_1.UpdateClientProfileInput]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "updateProfile", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Put)("/update-password"),
    (0, routing_controllers_1.Authorized)(),
    (0, routing_controllers_openapi_1.OpenAPI)({
        description: "Update my password. Applies to any user.",
    }),
    (0, routing_controllers_openapi_1.ResponseSchema)(UpdatePassClientOutput_1.UpdatePassClientOutput),
    tslib_1.__param(0, (0, routing_controllers_1.CurrentUser)()),
    tslib_1.__param(1, (0, routing_controllers_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserAuthenticated_1.UserAuthenticated,
        UpdatePassClientInput_1.UpdatePassClientInput]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "updatePass", null);
UserController = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    (0, routing_controllers_1.JsonController)("/v1/users"),
    tslib_1.__metadata("design:paramtypes", [GetClientProfileHandler_1.GetClientProfileHandler,
        GetAdminProfileHandler_1.GetAdminProfileHandler,
        UpdateClientProfileHandler_1.UpdateClientProfileHandler,
        UpdateAdminProfileHandler_1.UpdateAdminProfileHandler,
        UpdatePassClientHandler_1.UpdatePassClientHandler,
        UpdatePassAdminHandler_1.UpdatePassAdminHandler])
], UserController);
exports.UserController = UserController;
