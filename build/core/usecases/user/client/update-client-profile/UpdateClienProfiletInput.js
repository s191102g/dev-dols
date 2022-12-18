"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClientProfileInput = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const userEnum_1 = require("../../../../domain/enums/userEnum");
class UpdateClientProfileInput {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], UpdateClientProfileInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsEnum)(userEnum_1.GenderType),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], UpdateClientProfileInput.prototype, "gender", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Date)
], UpdateClientProfileInput.prototype, "birthDay", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], UpdateClientProfileInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], UpdateClientProfileInput.prototype, "email", void 0);
exports.UpdateClientProfileInput = UpdateClientProfileInput;
