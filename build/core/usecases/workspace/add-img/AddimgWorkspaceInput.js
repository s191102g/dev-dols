"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddimgWorkspaceInput = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class AddimgWorkspaceInput {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], AddimgWorkspaceInput.prototype, "image", void 0);
exports.AddimgWorkspaceInput = AddimgWorkspaceInput;
