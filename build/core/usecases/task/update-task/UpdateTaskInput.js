"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaskInput = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class UpdateTaskInput {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], UpdateTaskInput.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], UpdateTaskInput.prototype, "content", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Number)
], UpdateTaskInput.prototype, "position", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsUUID)(),
    tslib_1.__metadata("design:type", String)
], UpdateTaskInput.prototype, "dataId", void 0);
exports.UpdateTaskInput = UpdateTaskInput;
