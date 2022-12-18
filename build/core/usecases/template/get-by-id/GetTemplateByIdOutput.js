"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTemplateByIdOutput = exports.GetTemplateByIdData = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const RefSchema_1 = require("../../../shared/decorators/RefSchema");
const DataResponse_1 = require("../../../shared/usecase/DataResponse");
class GetTemplateByIdData {
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
], GetTemplateByIdData.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDate)(),
    tslib_1.__metadata("design:type", Date)
], GetTemplateByIdData.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], GetTemplateByIdData.prototype, "typeByString", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    tslib_1.__metadata("design:type", Array)
], GetTemplateByIdData.prototype, "usageFields", void 0);
exports.GetTemplateByIdData = GetTemplateByIdData;
class GetTemplateByIdOutput extends DataResponse_1.DataResponse {
    setData(val) {
        this.data = new GetTemplateByIdData(val);
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    (0, RefSchema_1.RefSchemaObject)(GetTemplateByIdData),
    tslib_1.__metadata("design:type", GetTemplateByIdData)
], GetTemplateByIdOutput.prototype, "data", void 0);
exports.GetTemplateByIdOutput = GetTemplateByIdOutput;
