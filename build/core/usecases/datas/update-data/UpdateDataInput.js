"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDataInput = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class UpdateDataInput {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], UpdateDataInput.prototype, "heading", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], UpdateDataInput.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], UpdateDataInput.prototype, "content", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsUUID)(),
    tslib_1.__metadata("design:type", String)
], UpdateDataInput.prototype, "boardId", void 0);
exports.UpdateDataInput = UpdateDataInput;
