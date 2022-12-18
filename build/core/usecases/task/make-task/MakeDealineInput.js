"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeDealineInput = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class MakeDealineInput {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], MakeDealineInput.prototype, "taskId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Object)
], MakeDealineInput.prototype, "dealine", void 0);
exports.MakeDealineInput = MakeDealineInput;
