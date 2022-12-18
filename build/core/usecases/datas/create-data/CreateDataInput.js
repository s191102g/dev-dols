"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDataInput = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CreateDataInput {
}
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Object)
], CreateDataInput.prototype, "heading", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], CreateDataInput.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], CreateDataInput.prototype, "content", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsUUID)(),
    tslib_1.__metadata("design:type", String)
], CreateDataInput.prototype, "boardId", void 0);
exports.CreateDataInput = CreateDataInput;
