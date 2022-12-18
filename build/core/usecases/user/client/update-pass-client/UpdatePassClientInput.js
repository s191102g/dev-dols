"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePassClientInput = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class UpdatePassClientInput {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], UpdatePassClientInput.prototype, "oldPass", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], UpdatePassClientInput.prototype, "newPass", void 0);
exports.UpdatePassClientInput = UpdatePassClientInput;
