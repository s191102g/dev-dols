"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClientProfileOutput = exports.GetClientProfileData = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const userEnum_1 = require("../../../../domain/enums/userEnum");
const RefSchema_1 = require("../../../../shared/decorators/RefSchema");
const DataResponse_1 = require("../../../../shared/usecase/DataResponse");
class GetClientProfileData {
    constructor(data) {
        this.id = data.id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.gender = data.gender;
        this.birthDay = data.birthDay;
        this.avatar = data.avatar;
        this.email = data.email;
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsUUID)(),
    tslib_1.__metadata("design:type", String)
], GetClientProfileData.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], GetClientProfileData.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], GetClientProfileData.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsEnum)(userEnum_1.GenderType),
    tslib_1.__metadata("design:type", String)
], GetClientProfileData.prototype, "gender", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDate)(),
    tslib_1.__metadata("design:type", Date)
], GetClientProfileData.prototype, "birthDay", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], GetClientProfileData.prototype, "avatar", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], GetClientProfileData.prototype, "email", void 0);
exports.GetClientProfileData = GetClientProfileData;
class GetClientProfileOutput extends DataResponse_1.DataResponse {
    setData(val) {
        this.data = new GetClientProfileData(val);
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    (0, RefSchema_1.RefSchemaObject)(GetClientProfileData),
    tslib_1.__metadata("design:type", GetClientProfileData)
], GetClientProfileOutput.prototype, "data", void 0);
exports.GetClientProfileOutput = GetClientProfileOutput;
