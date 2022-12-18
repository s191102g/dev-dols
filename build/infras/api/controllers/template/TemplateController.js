"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateController = void 0;
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const routing_controllers_openapi_1 = require("routing-controllers-openapi");
const typedi_1 = require("typedi");
const userEnum_1 = require("../../../../core/domain/enums/userEnum");
const CreateTeamplateInput_1 = require("../../../../core/usecases/template/create/CreateTeamplateInput");
const CreateTemplateHandler_1 = require("../../../../core/usecases/template/create/CreateTemplateHandler");
const CreateTemplateOutput_1 = require("../../../../core/usecases/template/create/CreateTemplateOutput");
const FindTemplateHandler_1 = require("../../../../core/usecases/template/find-template/FindTemplateHandler");
const FindTemplateInput_1 = require("../../../../core/usecases/template/find-template/FindTemplateInput");
const FindTemplateOutput_1 = require("../../../../core/usecases/template/find-template/FindTemplateOutput");
const GetTemplateByIdHandler_1 = require("../../../../core/usecases/template/get-by-id/GetTemplateByIdHandler");
const GetTemplateByIdOutput_1 = require("../../../../core/usecases/template/get-by-id/GetTemplateByIdOutput");
let TemplateController = class TemplateController {
    constructor(_createTemplateHandler, _findTemplateHandler, _getTemplateByIdHandler) {
        this._createTemplateHandler = _createTemplateHandler;
        this._findTemplateHandler = _findTemplateHandler;
        this._getTemplateByIdHandler = _getTemplateByIdHandler;
    }
    async create(param) {
        return await this._createTemplateHandler.handle(param);
    }
    async findAndCount(param) {
        return await this._findTemplateHandler.handle(param);
    }
    async getById(id) {
        return await this._getTemplateByIdHandler.handle(id);
    }
};
tslib_1.__decorate([
    (0, routing_controllers_1.Post)("/"),
    (0, routing_controllers_1.Authorized)(userEnum_1.RoleType.Admin),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: "create new template" }),
    (0, routing_controllers_openapi_1.ResponseSchema)(CreateTemplateOutput_1.CreateTemplateOutput),
    tslib_1.__param(0, (0, routing_controllers_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CreateTeamplateInput_1.CreateTemplateInput]),
    tslib_1.__metadata("design:returntype", Promise)
], TemplateController.prototype, "create", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Get)("/"),
    (0, routing_controllers_1.Authorized)(userEnum_1.RoleType.Admin),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: "find template" }),
    (0, routing_controllers_openapi_1.ResponseSchema)(FindTemplateOutput_1.FindTemplateOutput),
    tslib_1.__param(0, (0, routing_controllers_1.QueryParams)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [FindTemplateInput_1.FindTemplateInput]),
    tslib_1.__metadata("design:returntype", Promise)
], TemplateController.prototype, "findAndCount", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Get)("/:id([0-9a-f-]{36})"),
    (0, routing_controllers_1.Authorized)(),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: "get template by id" }),
    (0, routing_controllers_openapi_1.ResponseSchema)(GetTemplateByIdOutput_1.GetTemplateByIdOutput),
    tslib_1.__param(0, (0, routing_controllers_1.Param)("id")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], TemplateController.prototype, "getById", null);
TemplateController = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    (0, routing_controllers_1.JsonController)("/v1/template"),
    tslib_1.__metadata("design:paramtypes", [CreateTemplateHandler_1.CreateTemplateHandler,
        FindTemplateHandler_1.FindTemplateHandler,
        GetTemplateByIdHandler_1.GetTemplateByIdHandler])
], TemplateController);
exports.TemplateController = TemplateController;
