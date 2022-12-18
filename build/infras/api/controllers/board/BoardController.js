"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardController = void 0;
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const routing_controllers_openapi_1 = require("routing-controllers-openapi");
const typedi_1 = require("typedi");
const userEnum_1 = require("../../../../core/domain/enums/userEnum");
const CreateBoardHandler_1 = require("../../../../core/usecases/board/create/CreateBoardHandler");
const CreateBoardInput_1 = require("../../../../core/usecases/board/create/CreateBoardInput");
const CreateBoardOutput_1 = require("../../../../core/usecases/board/create/CreateBoardOutput");
const DeleteBoardHandler_1 = require("../../../../core/usecases/board/delete-board/DeleteBoardHandler");
const DeleteBoardOutput_1 = require("../../../../core/usecases/board/delete-board/DeleteBoardOutput");
const GetBroadByIdHandler_1 = require("../../../../core/usecases/board/get-by-id/GetBroadByIdHandler");
const GetBroadByIdOutput_1 = require("../../../../core/usecases/board/get-by-id/GetBroadByIdOutput");
const UpdateBoardHandler_1 = require("../../../../core/usecases/board/update-board/UpdateBoardHandler");
const UpdateBoardInput_1 = require("../../../../core/usecases/board/update-board/UpdateBoardInput");
const UpdateBoardOutput_1 = require("../../../../core/usecases/board/update-board/UpdateBoardOutput");
let BoardController = class BoardController {
    constructor(_createBoardHandler, _getBoardByIdHandler, _updateBoardHandler, _deleteBoardHandler) {
        this._createBoardHandler = _createBoardHandler;
        this._getBoardByIdHandler = _getBoardByIdHandler;
        this._updateBoardHandler = _updateBoardHandler;
        this._deleteBoardHandler = _deleteBoardHandler;
    }
    async create(param) {
        return await this._createBoardHandler.handle(param);
    }
    async getOne(id) {
        return await this._getBoardByIdHandler.handle(id);
    }
    async update(id, param) {
        return await this._updateBoardHandler.handle(id, param);
    }
    async delete(id) {
        return await this._deleteBoardHandler.handle(id);
    }
};
tslib_1.__decorate([
    (0, routing_controllers_1.Post)("/"),
    (0, routing_controllers_1.Authorized)(),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: "create board" }),
    (0, routing_controllers_openapi_1.ResponseSchema)(CreateBoardOutput_1.CreateBoardOutput),
    tslib_1.__param(0, (0, routing_controllers_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CreateBoardInput_1.CreateBoardInput]),
    tslib_1.__metadata("design:returntype", Promise)
], BoardController.prototype, "create", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Get)("/:id([0-9a-f-]{36})"),
    (0, routing_controllers_1.Authorized)(),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: "get broad" }),
    (0, routing_controllers_openapi_1.ResponseSchema)(GetBroadByIdOutput_1.GetBoardByIdOutput),
    tslib_1.__param(0, (0, routing_controllers_1.Param)("id")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], BoardController.prototype, "getOne", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Put)("/:id([0-9a-f-]{36})"),
    (0, routing_controllers_1.Authorized)(userEnum_1.RoleType.Client),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: "update board" }),
    (0, routing_controllers_openapi_1.ResponseSchema)(UpdateBoardOutput_1.UpdateBoardOutput),
    tslib_1.__param(0, (0, routing_controllers_1.Param)("id")),
    tslib_1.__param(1, (0, routing_controllers_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, UpdateBoardInput_1.UpdateBoardInput]),
    tslib_1.__metadata("design:returntype", Promise)
], BoardController.prototype, "update", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Delete)("/:id([0-9a-f-]{36})"),
    (0, routing_controllers_1.Authorized)(),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: "delete board" }),
    (0, routing_controllers_openapi_1.ResponseSchema)(DeleteBoardOutput_1.DeleteBoardOutput),
    tslib_1.__param(0, (0, routing_controllers_1.Param)("id")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], BoardController.prototype, "delete", null);
BoardController = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    (0, routing_controllers_1.JsonController)("/v1/board"),
    tslib_1.__metadata("design:paramtypes", [CreateBoardHandler_1.CreateBoardHandler,
        GetBroadByIdHandler_1.GetBoardByIdHandler,
        UpdateBoardHandler_1.UpdateBoardHandler,
        DeleteBoardHandler_1.DeleteBoardHandler])
], BoardController);
exports.BoardController = BoardController;
