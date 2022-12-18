"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const routing_controllers_1 = require("routing-controllers");
const routing_controllers_openapi_1 = require("routing-controllers-openapi");
const userEnum_1 = require("../../../../core/domain/enums/userEnum");
const CreateTaskInput_1 = require("../../../../core/usecases/task/create-task/CreateTaskInput");
const CreateTaskOutput_1 = require("../../../../core/usecases/task/create-task/CreateTaskOutput");
const CreateTaskHandler_1 = require("../../../../core/usecases/task/create-task/CreateTaskHandler");
const FindTaskInput_1 = require("../../../../core/usecases/task/find-task/FindTaskInput");
const FindTaskOutput_1 = require("../../../../core/usecases/task/find-task/FindTaskOutput");
const FindTaskHandler_1 = require("../../../../core/usecases/task/find-task/FindTaskHandler");
const DeleteTaskHandler_1 = require("../../../../core/usecases/task/delete-task/DeleteTaskHandler");
const UpdateTaskHandler_1 = require("../../../../core/usecases/task/update-task/UpdateTaskHandler");
const DeleteTaskOutput_1 = require("../../../../core/usecases/task/delete-task/DeleteTaskOutput");
const UpdateTaskInput_1 = require("../../../../core/usecases/task/update-task/UpdateTaskInput");
const UpdateTaskOutput_1 = require("../../../../core/usecases/task/update-task/UpdateTaskOutput");
const UpdateTaskOfDataHandler_1 = require("../../../../core/usecases/task/update-task-of-data/UpdateTaskOfDataHandler");
const UpdateTaskOfDataInput_1 = require("../../../../core/usecases/task/update-task-of-data/UpdateTaskOfDataInput");
const UpdateTaskOfDataOutput_1 = require("../../../../core/usecases/task/update-task-of-data/UpdateTaskOfDataOutput");
const MakeDealineHandler_1 = require("../../../../core/usecases/task/make-task/MakeDealineHandler");
const MakeDealineOutput_1 = require("../../../../core/usecases/task/make-task/MakeDealineOutput");
const MakeDealineInput_1 = require("../../../../core/usecases/task/make-task/MakeDealineInput");
const UserAuthenticated_1 = require("../../../../core/shared/UserAuthenticated");
let TaskController = class TaskController {
    constructor(_createTaskHandler, _findTaskHandler, _updateTaskHandler, _deleteTaskHandler, _updateTaskOfDataHandler, _makeDealineHandler) {
        this._createTaskHandler = _createTaskHandler;
        this._findTaskHandler = _findTaskHandler;
        this._updateTaskHandler = _updateTaskHandler;
        this._deleteTaskHandler = _deleteTaskHandler;
        this._updateTaskOfDataHandler = _updateTaskOfDataHandler;
        this._makeDealineHandler = _makeDealineHandler;
    }
    async create(param, userAuth) {
        return await this._createTaskHandler.handle(userAuth.userId, param);
    }
    async get(param) {
        return await this._findTaskHandler.handle(param);
    }
    async update(id, param) {
        return await this._updateTaskHandler.handle(id, param);
    }
    async updateMultiple(param) {
        return await this._updateTaskOfDataHandler.handle(param);
    }
    async delete(id) {
        return await this._deleteTaskHandler.handle(id);
    }
    async makeDealine(userAuth, param) {
        return await this._makeDealineHandler.handle(userAuth.userId, param);
    }
};
tslib_1.__decorate([
    (0, routing_controllers_1.Post)("/"),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: " Create task" }),
    (0, routing_controllers_1.Authorized)(userEnum_1.RoleType.Client),
    (0, routing_controllers_openapi_1.ResponseSchema)(CreateTaskOutput_1.CreateTaskOutput),
    tslib_1.__param(0, (0, routing_controllers_1.Body)()),
    tslib_1.__param(1, (0, routing_controllers_1.CurrentUser)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CreateTaskInput_1.CreateTaskInput,
        UserAuthenticated_1.UserAuthenticated]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskController.prototype, "create", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Get)("/"),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: " find task" }),
    (0, routing_controllers_1.Authorized)(userEnum_1.RoleType.Client),
    (0, routing_controllers_openapi_1.ResponseSchema)(FindTaskOutput_1.FindTaskOutput),
    tslib_1.__param(0, (0, routing_controllers_1.QueryParams)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [FindTaskInput_1.FindTaskInput]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskController.prototype, "get", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Put)("/:id([0-9a-f-]{36})"),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: "update task" }),
    (0, routing_controllers_1.Authorized)(userEnum_1.RoleType.Client),
    (0, routing_controllers_openapi_1.ResponseSchema)(UpdateTaskOutput_1.UpdateTaskOutput),
    tslib_1.__param(0, (0, routing_controllers_1.Param)("id")),
    tslib_1.__param(1, (0, routing_controllers_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, UpdateTaskInput_1.UpdateTaskInput]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskController.prototype, "update", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Post)("/update-task-of-data"),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: "update task of data" }),
    (0, routing_controllers_1.Authorized)(userEnum_1.RoleType.Client),
    (0, routing_controllers_openapi_1.ResponseSchema)(UpdateTaskOfDataOutput_1.UpdateTaskOfDataOutput),
    tslib_1.__param(0, (0, routing_controllers_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UpdateTaskOfDataInput_1.UpdateTaskOfDataInput]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskController.prototype, "updateMultiple", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Delete)("/:id([0-9a-f-]{36})"),
    (0, routing_controllers_1.Authorized)(userEnum_1.RoleType.Client),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: "delete task" }),
    (0, routing_controllers_openapi_1.ResponseSchema)(DeleteTaskOutput_1.DeleteTaskOutput),
    tslib_1.__param(0, (0, routing_controllers_1.Param)("id")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskController.prototype, "delete", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Post)("/make-dealine"),
    (0, routing_controllers_openapi_1.OpenAPI)({ summary: "make dealine for task" }),
    (0, routing_controllers_1.Authorized)(userEnum_1.RoleType.Client),
    (0, routing_controllers_openapi_1.ResponseSchema)(MakeDealineOutput_1.MakeDealineOutput),
    tslib_1.__param(0, (0, routing_controllers_1.CurrentUser)()),
    tslib_1.__param(1, (0, routing_controllers_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserAuthenticated_1.UserAuthenticated,
        MakeDealineInput_1.MakeDealineInput]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskController.prototype, "makeDealine", null);
TaskController = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    (0, routing_controllers_1.JsonController)("/v1/tasks"),
    tslib_1.__metadata("design:paramtypes", [CreateTaskHandler_1.CreateTaskHandler,
        FindTaskHandler_1.FindTaskHandler,
        UpdateTaskHandler_1.UpdateTaskHandler,
        DeleteTaskHandler_1.DeleteTaskHandler,
        UpdateTaskOfDataHandler_1.UpdateTaskOfDataHandler,
        MakeDealineHandler_1.MakeDealineHandler])
], TaskController);
exports.TaskController = TaskController;
