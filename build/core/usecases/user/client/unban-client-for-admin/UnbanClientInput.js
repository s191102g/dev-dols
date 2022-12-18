"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnbanClienInput = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class UnbanClienInput {
}
tslib_1.__decorate([
    (0, class_validator_1.IsUUID)(),
    tslib_1.__metadata("design:type", String)
], UnbanClienInput.prototype, "idUser", void 0);
exports.UnbanClienInput = UnbanClienInput;
