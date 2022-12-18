"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationResponse = exports.Pagination = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const RefSchema_1 = require("../decorators/RefSchema");
const DataResponse_1 = require("./DataResponse");
class Pagination {
}
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    tslib_1.__metadata("design:type", Number)
], Pagination.prototype, "skip", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    tslib_1.__metadata("design:type", Number)
], Pagination.prototype, "limit", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    tslib_1.__metadata("design:type", Number)
], Pagination.prototype, "total", void 0);
exports.Pagination = Pagination;
class PaginationResponse extends DataResponse_1.DataResponse {
    setPagination(total, skip, limit) {
        this.pagination = new Pagination();
        this.pagination.total = total;
        this.pagination.skip = skip;
        this.pagination.limit = limit;
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    (0, RefSchema_1.RefSchemaObject)(Pagination),
    tslib_1.__metadata("design:type", Pagination)
], PaginationResponse.prototype, "pagination", void 0);
exports.PaginationResponse = PaginationResponse;
