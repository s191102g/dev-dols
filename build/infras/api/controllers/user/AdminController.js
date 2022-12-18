"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const routing_controllers_openapi_1 = require("routing-controllers-openapi");
const typedi_1 = require("typedi");
const userEnum_1 = require("../../../../core/domain/enums/userEnum");
const CreateAdminHandler_1 = require("../../../../core/usecases/user/admin/create-admin/CreateAdminHandler");
const CreateAdminInput_1 = require("../../../../core/usecases/user/admin/create-admin/CreateAdminInput");
const CreateAdminOutput_1 = require("../../../../core/usecases/user/admin/create-admin/CreateAdminOutput");
const FindAllClientHandler_1 = require("../../../../core/usecases/user/admin/find-all-client/FindAllClientHandler");
const FindAllClientInput_1 = require("../../../../core/usecases/user/admin/find-all-client/FindAllClientInput");
const FindAllClientOutput_1 = require("../../../../core/usecases/user/admin/find-all-client/FindAllClientOutput");
const LoginAdminHandler_1 = require("../../../../core/usecases/user/admin/login-admin/LoginAdminHandler");
const LoginAdminInput_1 = require("../../../../core/usecases/user/admin/login-admin/LoginAdminInput");
const LoginAdminOutput_1 = require("../../../../core/usecases/user/admin/login-admin/LoginAdminOutput");
const BanClientHandler_1 = require("../../../../core/usecases/user/client/ban-client-for-admin/BanClientHandler");
const BanClientInput_1 = require("../../../../core/usecases/user/client/ban-client-for-admin/BanClientInput");
const BanClientOutput_1 = require("../../../../core/usecases/user/client/ban-client-for-admin/BanClientOutput");
const UnbanClientHandler_1 = require("../../../../core/usecases/user/client/unban-client-for-admin/UnbanClientHandler");
const UnbanClientInput_1 = require("../../../../core/usecases/user/client/unban-client-for-admin/UnbanClientInput");
const UnbanClientOutput_1 = require("../../../../core/usecases/user/client/unban-client-for-admin/UnbanClientOutput");
const FindAllForAdminHandler_1 = require("../../../../core/usecases/workspace/admin-find-all/FindAllForAdminHandler");
const FindAllForAdminInput_1 = require("../../../../core/usecases/workspace/admin-find-all/FindAllForAdminInput");
const FindAllForAdminOutput_1 = require("../../../../core/usecases/workspace/admin-find-all/FindAllForAdminOutput");
let AdminController = class AdminController {
    constructor(_createAdminHandler, _loginAdminHandler, _findAllClientHandler, _findAllWorkspaceForAdminHandler, _banclientHandler, _unbanclientHandler) {
        this._createAdminHandler = _createAdminHandler;
        this._loginAdminHandler = _loginAdminHandler;
        this._findAllClientHandler = _findAllClientHandler;
        this._findAllWorkspaceForAdminHandler = _findAllWorkspaceForAdminHandler;
        this._banclientHandler = _banclientHandler;
        this._unbanclientHandler = _unbanclientHandler;
    }
    async register(param) {
        return await this._createAdminHandler.handle(param);
    }
    async login(param) {
        return await this._loginAdminHandler.handle(param);
    }
    async findAndCountClient(param) {
        return await this._findAllClientHandler.handle(param);
    }
    async banClient(param) {
        return await this._banclientHandler.handle(param);
    }
    async unbanClient(param) {
        return await this._unbanclientHandler.handle(param);
    }
    async findAndCountWorkspace(param) {
        return await this._findAllWorkspaceForAdminHandler.handle(param);
    }
};
tslib_1.__decorate([
    (0, routing_controllers_1.Post)("/create"),
    (0, routing_controllers_1.Authorized)(userEnum_1.RoleType.Admin),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: "register admin" }),
    (0, routing_controllers_openapi_1.ResponseSchema)(CreateAdminOutput_1.CreateAdminOutput),
    tslib_1.__param(0, (0, routing_controllers_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CreateAdminInput_1.CreateAdminInput]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "register", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Post)("/login"),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: "login admin" }),
    (0, routing_controllers_openapi_1.ResponseSchema)(LoginAdminOutput_1.LoginAdminOutput),
    tslib_1.__param(0, (0, routing_controllers_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [LoginAdminInput_1.LoginAdminInput]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "login", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Get)("/find-all-clients"),
    (0, routing_controllers_1.Authorized)(userEnum_1.RoleType.Admin),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: "find all client" }),
    (0, routing_controllers_openapi_1.ResponseSchema)(FindAllClientOutput_1.FindAllCientOutput),
    tslib_1.__param(0, (0, routing_controllers_1.QueryParams)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [FindAllClientInput_1.FindAllClientInput]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "findAndCountClient", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Post)("/ban-client"),
    (0, routing_controllers_1.Authorized)(userEnum_1.RoleType.Admin),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: "ban client" }),
    (0, routing_controllers_openapi_1.ResponseSchema)(BanClientOutput_1.BanClientOutput),
    tslib_1.__param(0, (0, routing_controllers_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [BanClientInput_1.BanClienInput]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "banClient", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Post)("/unban-client"),
    (0, routing_controllers_1.Authorized)(userEnum_1.RoleType.Admin),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: "unban client" }),
    (0, routing_controllers_openapi_1.ResponseSchema)(UnbanClientOutput_1.UnbanClientOutput),
    tslib_1.__param(0, (0, routing_controllers_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UnbanClientInput_1.UnbanClienInput]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "unbanClient", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Get)("/find-all-workspace"),
    (0, routing_controllers_1.Authorized)(userEnum_1.RoleType.Admin),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: "find all workspace" }),
    (0, routing_controllers_openapi_1.ResponseSchema)(FindAllForAdminOutput_1.FindAllWorkspaceForAdminOutput),
    tslib_1.__param(0, (0, routing_controllers_1.QueryParams)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [FindAllForAdminInput_1.FindAllWorkSpaceForAdminInput]),
    tslib_1.__metadata("design:returntype", Promise)
], AdminController.prototype, "findAndCountWorkspace", null);
AdminController = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    (0, routing_controllers_1.JsonController)("/v1/admins"),
    tslib_1.__metadata("design:paramtypes", [CreateAdminHandler_1.CreateAdminHandler,
        LoginAdminHandler_1.LoginAdminHandler,
        FindAllClientHandler_1.FindAllClientHandler,
        FindAllForAdminHandler_1.FindWorkspaceForAdminHandler,
        BanClientHandler_1.BanClientHandler,
        UnbanClientHandler_1.UnbanClientHandler])
], AdminController);
exports.AdminController = AdminController;
