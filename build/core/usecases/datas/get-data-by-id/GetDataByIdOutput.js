"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDataByIdOutput = exports.GetDataByIdData = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const RefSchema_1 = require("../../../shared/decorators/RefSchema");
const DataResponse_1 = require("../../../shared/usecase/DataResponse");
const CreateTaskOutput_1 = require("../../task/create-task/CreateTaskOutput");
class GetDataByIdData {
    constructor(data) {
        this.id = data.id;
        this.createdAt = data.createdAt;
        this.title = data.title;
        this.content = data.content;
        this.heading = data.heading;
        this.task = data.tasks && data.tasks.map((e) => new CreateTaskOutput_1.CreateTaskData(e));
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsUUID)(),
    tslib_1.__metadata("design:type", String)
], GetDataByIdData.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDate)(),
    tslib_1.__metadata("design:type", Date)
], GetDataByIdData.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], GetDataByIdData.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], GetDataByIdData.prototype, "content", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], GetDataByIdData.prototype, "heading", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsUUID)(),
    tslib_1.__metadata("design:type", String)
], GetDataByIdData.prototype, "boardId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    (0, RefSchema_1.RefSchemaArray)(CreateTaskOutput_1.CreateTaskData),
    tslib_1.__metadata("design:type", Array)
], GetDataByIdData.prototype, "task", void 0);
exports.GetDataByIdData = GetDataByIdData;
class GetDataByIdOutput extends DataResponse_1.DataResponse {
    setData(val) {
        this.data = new GetDataByIdData(val);
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    (0, RefSchema_1.RefSchemaObject)(GetDataByIdData),
    tslib_1.__metadata("design:type", GetDataByIdData)
], GetDataByIdOutput.prototype, "data", void 0);
exports.GetDataByIdOutput = GetDataByIdOutput;
