"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientController = void 0;
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const routing_controllers_openapi_1 = require("routing-controllers-openapi");
const typedi_1 = require("typedi");
const ActiveClientHandler_1 = require("../../../../core/usecases/user/client/active/ActiveClientHandler");
const ActiveClientInput_1 = require("../../../../core/usecases/user/client/active/ActiveClientInput");
const ActiveClientOutput_1 = require("../../../../core/usecases/user/client/active/ActiveClientOutput");
const CreateClientHandler_1 = require("../../../../core/usecases/user/client/create/CreateClientHandler");
const CreateClientInput_1 = require("../../../../core/usecases/user/client/create/CreateClientInput");
const CreateClientOutput_1 = require("../../../../core/usecases/user/client/create/CreateClientOutput");
const ForgotPassHandler_1 = require("../../../../core/usecases/user/client/forgot-pass/ForgotPassHandler");
const ForgotPassInput_1 = require("../../../../core/usecases/user/client/forgot-pass/ForgotPassInput");
const ForgotPassOutput_1 = require("../../../../core/usecases/user/client/forgot-pass/ForgotPassOutput");
const LoginClientHandler_1 = require("../../../../core/usecases/user/client/login/LoginClientHandler");
const LoginClientInput_1 = require("../../../../core/usecases/user/client/login/LoginClientInput");
const LoginClientOutput_1 = require("../../../../core/usecases/user/client/login/LoginClientOutput");
const RequireRegisterHandler_1 = require("../../../../core/usecases/user/client/require-register/RequireRegisterHandler");
const RequireRegisterInput_1 = require("../../../../core/usecases/user/client/require-register/RequireRegisterInput");
const RequireRegisterOutput_1 = require("../../../../core/usecases/user/client/require-register/RequireRegisterOutput");
const ResendActiveHandler_1 = require("../../../../core/usecases/user/client/resend-active/ResendActiveHandler");
const ResendActiveInput_1 = require("../../../../core/usecases/user/client/resend-active/ResendActiveInput");
const ResendactiveOutput_1 = require("../../../../core/usecases/user/client/resend-active/ResendactiveOutput");
const UsingWithGGHandler_1 = require("../../../../core/usecases/user/client/using-with-gg/UsingWithGGHandler");
const UsingWithGGInput_1 = require("../../../../core/usecases/user/client/using-with-gg/UsingWithGGInput");
const UsingWithGGOutput_1 = require("../../../../core/usecases/user/client/using-with-gg/UsingWithGGOutput");
let ClientController = class ClientController {
    constructor(_createClientHandler, _loginClientHandler, _requireRegisterHandler, _activeClientHandler, _usingWithGGHandler, _resendActiveHandler, _forgotPassHandler) {
        this._createClientHandler = _createClientHandler;
        this._loginClientHandler = _loginClientHandler;
        this._requireRegisterHandler = _requireRegisterHandler;
        this._activeClientHandler = _activeClientHandler;
        this._usingWithGGHandler = _usingWithGGHandler;
        this._resendActiveHandler = _resendActiveHandler;
        this._forgotPassHandler = _forgotPassHandler;
    }
    async requireRegister(param) {
        return await this._requireRegisterHandler.handle(param);
    }
    async active(param) {
        return await this._activeClientHandler.handle(param);
    }
    async resendactive(param) {
        return await this._resendActiveHandler.handle(param);
    }
    async register(param) {
        return await this._createClientHandler.handle(param);
    }
    async login(param) {
        return await this._loginClientHandler.handle(param);
    }
    async usingWithGG(param) {
        return await this._usingWithGGHandler.handle(param);
    }
    async forgotPass(param) {
        return await this._forgotPassHandler.handle(param);
    }
};
tslib_1.__decorate([
    (0, routing_controllers_1.Post)("/require-register"),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: "require register client" }),
    (0, routing_controllers_openapi_1.ResponseSchema)(RequireRegisterOutput_1.RequireRegisterOutput),
    tslib_1.__param(0, (0, routing_controllers_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [RequireRegisterInput_1.RequireRegisterInput]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientController.prototype, "requireRegister", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Post)('/active'),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: "active" }),
    (0, routing_controllers_openapi_1.ResponseSchema)(ActiveClientOutput_1.ActiveClientOutput),
    tslib_1.__param(0, (0, routing_controllers_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ActiveClientInput_1.ActiveClientInput]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientController.prototype, "active", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Post)('/resend-activekey'),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: "resend active" }),
    (0, routing_controllers_openapi_1.ResponseSchema)(ResendactiveOutput_1.ResendActiveOutput),
    tslib_1.__param(0, (0, routing_controllers_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ResendActiveInput_1.ResendActiveInput]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientController.prototype, "resendactive", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Post)("/register"),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: "register client" }),
    (0, routing_controllers_openapi_1.ResponseSchema)(CreateClientOutput_1.CreateClientOutput),
    tslib_1.__param(0, (0, routing_controllers_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CreateClientInput_1.CreateClientInput]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientController.prototype, "register", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Post)("/login"),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: "Login" }),
    (0, routing_controllers_openapi_1.ResponseSchema)(LoginClientOutput_1.LoginClientOutput),
    tslib_1.__param(0, (0, routing_controllers_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [LoginClientInput_1.LoginClientInput]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientController.prototype, "login", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Post)("/using-with-gg"),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: "Using with google" }),
    (0, routing_controllers_openapi_1.ResponseSchema)(UsingWithGGOutput_1.UsingWithGGOutput),
    tslib_1.__param(0, (0, routing_controllers_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UsingWithGGInput_1.UsingWithGGInput]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientController.prototype, "usingWithGG", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Post)('/forgot-pass'),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: "forgot pass" }),
    (0, routing_controllers_openapi_1.ResponseSchema)(ForgotPassOutput_1.ForgotPassOutput),
    tslib_1.__param(0, (0, routing_controllers_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ForgotPassInput_1.ForgotPassInput]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientController.prototype, "forgotPass", null);
ClientController = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    (0, routing_controllers_1.JsonController)("/v1/clients"),
    tslib_1.__metadata("design:paramtypes", [CreateClientHandler_1.CreateClientHandler,
        LoginClientHandler_1.LoginClientHandler,
        RequireRegisterHandler_1.RequireRegisterHandler,
        ActiveClientHandler_1.ActiveClientHandler,
        UsingWithGGHandler_1.UsingWithGGHandler,
        ResendActiveHandler_1.ResendActiveHandler,
        ForgotPassHandler_1.ForgotPassHandler])
], ClientController);
exports.ClientController = ClientController;
