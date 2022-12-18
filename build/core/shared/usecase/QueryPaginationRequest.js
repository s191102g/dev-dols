"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryPaginationRequest = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class QueryPaginationRequest {
    constructor() {
        this.skip = 0;
        this.limit = 10;
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Object)
], QueryPaginationRequest.prototype, "skip", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(10),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Object)
], QueryPaginationRequest.prototype, "limit", void 0);
exports.QueryPaginationRequest = QueryPaginationRequest;
