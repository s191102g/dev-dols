"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPassInput = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class ForgotPassInput {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], ForgotPassInput.prototype, "email", void 0);
exports.ForgotPassInput = ForgotPassInput;
