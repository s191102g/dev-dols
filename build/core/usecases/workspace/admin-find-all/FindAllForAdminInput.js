"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllWorkSpaceForAdminInput = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const QueryPaginationRequest_1 = require("../../../shared/usecase/QueryPaginationRequest");
class FindAllWorkSpaceForAdminInput extends QueryPaginationRequest_1.QueryPaginationRequest {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], FindAllWorkSpaceForAdminInput.prototype, "keyword", void 0);
exports.FindAllWorkSpaceForAdminInput = FindAllWorkSpaceForAdminInput;
