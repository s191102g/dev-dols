"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsingWithGGInput = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class UsingWithGGInput {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], UsingWithGGInput.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], UsingWithGGInput.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], UsingWithGGInput.prototype, "password", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], UsingWithGGInput.prototype, "avatar", void 0);
exports.UsingWithGGInput = UsingWithGGInput;
