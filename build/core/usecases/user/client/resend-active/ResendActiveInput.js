"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResendActiveInput = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class ResendActiveInput {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], ResendActiveInput.prototype, "email", void 0);
exports.ResendActiveInput = ResendActiveInput;
