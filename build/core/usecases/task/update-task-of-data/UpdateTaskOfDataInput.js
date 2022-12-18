"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaskOfDataInput = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class UpdateTaskOfDataInput {
}
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    tslib_1.__metadata("design:type", Array)
], UpdateTaskOfDataInput.prototype, "tasks", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsUUID)(),
    tslib_1.__metadata("design:type", String)
], UpdateTaskOfDataInput.prototype, "dataId", void 0);
exports.UpdateTaskOfDataInput = UpdateTaskOfDataInput;
