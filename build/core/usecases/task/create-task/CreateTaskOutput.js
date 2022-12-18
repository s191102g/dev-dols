"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskOutput = exports.CreateTaskData = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const RefSchema_1 = require("../../../shared/decorators/RefSchema");
const DataResponse_1 = require("../../../shared/usecase/DataResponse");
class CreateTaskData {
    constructor(data) {
        this.id = data.id;
        this.dataId = data.dataId;
        this.title = data.title;
        this.content = data.content;
        this.position = data.position;
        this.deadline = data.deadline;
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsUUID)(),
    tslib_1.__metadata("design:type", String)
], CreateTaskData.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsUUID)(),
    tslib_1.__metadata("design:type", String)
], CreateTaskData.prototype, "dataId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateTaskData.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateTaskData.prototype, "content", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreateTaskData.prototype, "position", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateTaskData.prototype, "deadline", void 0);
exports.CreateTaskData = CreateTaskData;
class CreateTaskOutput extends DataResponse_1.DataResponse {
    setData(val) {
        this.data = new CreateTaskData(val);
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    (0, RefSchema_1.RefSchemaObject)(CreateTaskData),
    tslib_1.__metadata("design:type", CreateTaskData)
], CreateTaskOutput.prototype, "data", void 0);
exports.CreateTaskOutput = CreateTaskOutput;
