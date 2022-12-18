"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatasController = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const routing_controllers_1 = require("routing-controllers");
const routing_controllers_openapi_1 = require("routing-controllers-openapi");
const userEnum_1 = require("../../../../core/domain/enums/userEnum");
const CreateDataOutput_1 = require("../../../../core/usecases/datas/create-data/CreateDataOutput");
const CreateDataInput_1 = require("../../../../core/usecases/datas/create-data/CreateDataInput");
const CreateDataHandler_1 = require("../../../../core/usecases/datas/create-data/CreateDataHandler");
const UpdateDataOutput_1 = require("../../../../core/usecases/datas/update-data/UpdateDataOutput");
const UpdateDataInput_1 = require("../../../../core/usecases/datas/update-data/UpdateDataInput");
const UpdateDataHandler_1 = require("../../../../core/usecases/datas/update-data/UpdateDataHandler");
const GetDataByIdOutput_1 = require("../../../../core/usecases/datas/get-data-by-id/GetDataByIdOutput");
const GetDataByIdHandler_1 = require("../../../../core/usecases/datas/get-data-by-id/GetDataByIdHandler");
const DeleteDataHandler_1 = require("../../../../core/usecases/datas/delete-data/DeleteDataHandler");
const DeleteDataOutput_1 = require("../../../../core/usecases/datas/delete-data/DeleteDataOutput");
let DatasController = class DatasController {
    constructor(_createDataHandler, _updateDataHandler, _getDataByIdHandler, _deleteDataHandler) {
        this._createDataHandler = _createDataHandler;
        this._updateDataHandler = _updateDataHandler;
        this._getDataByIdHandler = _getDataByIdHandler;
        this._deleteDataHandler = _deleteDataHandler;
    }
    async create(param) {
        return await this._createDataHandler.handle(param);
    }
    async getOne(id) {
        return await this._getDataByIdHandler.handle(id);
    }
    async update(id, param) {
        return await this._updateDataHandler.handle(id, param);
    }
    async delete(id) {
        return await this._deleteDataHandler.handle(id);
    }
};
tslib_1.__decorate([
    (0, routing_controllers_1.Post)("/"),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: " Create data" }),
    (0, routing_controllers_1.Authorized)(userEnum_1.RoleType.Client),
    (0, routing_controllers_openapi_1.ResponseSchema)(CreateDataOutput_1.CreateDataOutput),
    tslib_1.__param(0, (0, routing_controllers_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CreateDataInput_1.CreateDataInput]),
    tslib_1.__metadata("design:returntype", Promise)
], DatasController.prototype, "create", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Get)("/:id([0-9a-f-]{36})"),
    (0, routing_controllers_1.Authorized)(),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: "get data" }),
    (0, routing_controllers_openapi_1.ResponseSchema)(GetDataByIdOutput_1.GetDataByIdOutput),
    tslib_1.__param(0, (0, routing_controllers_1.Param)("id")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], DatasController.prototype, "getOne", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Put)("/:id([0-9a-f-]{36})"),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: "update data" }),
    (0, routing_controllers_1.Authorized)(userEnum_1.RoleType.Client),
    (0, routing_controllers_openapi_1.ResponseSchema)(UpdateDataOutput_1.UpdateDataOutput),
    tslib_1.__param(0, (0, routing_controllers_1.Param)("id")),
    tslib_1.__param(1, (0, routing_controllers_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, UpdateDataInput_1.UpdateDataInput]),
    tslib_1.__metadata("design:returntype", Promise)
], DatasController.prototype, "update", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Delete)("/:id([0-9a-f-]{36})"),
    (0, routing_controllers_1.Authorized)(userEnum_1.RoleType.Client),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: "delete data" }),
    (0, routing_controllers_openapi_1.ResponseSchema)(DeleteDataOutput_1.DeleteDataOutput),
    tslib_1.__param(0, (0, routing_controllers_1.Param)("id")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], DatasController.prototype, "delete", null);
DatasController = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    (0, routing_controllers_1.JsonController)("/v1/datas"),
    tslib_1.__metadata("design:paramtypes", [CreateDataHandler_1.CreateDataHandler,
        UpdateDataHandler_1.UpdateDataHandler,
        GetDataByIdHandler_1.GetDataByIdHandler,
        DeleteDataHandler_1.DeleteDataHandler])
], DatasController);
exports.DatasController = DatasController;
