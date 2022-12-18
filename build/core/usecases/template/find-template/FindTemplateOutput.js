"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindTemplateOutput = exports.FindTemplateData = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const RefSchema_1 = require("../../../shared/decorators/RefSchema");
const PaginationResponse_1 = require("../../../shared/usecase/PaginationResponse");
class FindTemplateData {
    constructor(data) {
        this.id = data.id;
        this.createdAt = data.createdAt;
        this.typeByString = data.typeByString;
        this.usageFields = data.usageFields;
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsUUID)(),
    tslib_1.__metadata("design:type", String)
], FindTemplateData.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDate)(),
    tslib_1.__metadata("design:type", Date)
], FindTemplateData.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], FindTemplateData.prototype, "typeByString", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    tslib_1.__metadata("design:type", Array)
], FindTemplateData.prototype, "usageFields", void 0);
exports.FindTemplateData = FindTemplateData;
class FindTemplateOutput extends PaginationResponse_1.PaginationResponse {
    setData(list) {
        this.data = list.map((e) => new FindTemplateData(e));
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    (0, RefSchema_1.RefSchemaArray)(FindTemplateData),
    tslib_1.__metadata("design:type", Array)
], FindTemplateOutput.prototype, "data", void 0);
exports.FindTemplateOutput = FindTemplateOutput;
