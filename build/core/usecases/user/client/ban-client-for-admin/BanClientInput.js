"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BanClienInput = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class BanClienInput {
}
tslib_1.__decorate([
    (0, class_validator_1.IsUUID)(),
    tslib_1.__metadata("design:type", String)
], BanClienInput.prototype, "idUser", void 0);
exports.BanClienInput = BanClienInput;
