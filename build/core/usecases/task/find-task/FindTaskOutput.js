"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindTaskOutput = exports.FindTaskData = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const RefSchema_1 = require("../../../shared/decorators/RefSchema");
const PaginationResponse_1 = require("../../../shared/usecase/PaginationResponse");
class FindTaskData {
    constructor(data) {
        this.id = data.id;
        this.createdAt = data.createdAt;
        this.title = data.title;
        this.content = data.content;
        this.position = data.position;
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsUUID)(),
    tslib_1.__metadata("design:type", String)
], FindTaskData.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDate)(),
    tslib_1.__metadata("design:type", Date)
], FindTaskData.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], FindTaskData.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], FindTaskData.prototype, "content", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", Number)
], FindTaskData.prototype, "position", void 0);
exports.FindTaskData = FindTaskData;
class FindTaskOutput extends PaginationResponse_1.PaginationResponse {
    setData(list) {
        this.data = list.map((e) => new FindTaskData(e));
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    (0, RefSchema_1.RefSchemaArray)(FindTaskData),
    tslib_1.__metadata("design:type", Array)
], FindTaskOutput.prototype, "data", void 0);
exports.FindTaskOutput = FindTaskOutput;
