"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAdminProfileOutput = exports.GetAdminProfileData = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const userEnum_1 = require("../../../../domain/enums/userEnum");
const RefSchema_1 = require("../../../../shared/decorators/RefSchema");
const DataResponse_1 = require("../../../../shared/usecase/DataResponse");
class GetAdminProfileData {
    constructor(data) {
        this.id = data.id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.gender = data.gender;
        this.birthDay = data.birthDay;
        this.avatar = data.avatar;
        this.username = data.userName;
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsUUID)(),
    tslib_1.__metadata("design:type", String)
], GetAdminProfileData.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], GetAdminProfileData.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], GetAdminProfileData.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsEnum)(userEnum_1.GenderType),
    tslib_1.__metadata("design:type", String)
], GetAdminProfileData.prototype, "gender", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDate)(),
    tslib_1.__metadata("design:type", Date)
], GetAdminProfileData.prototype, "birthDay", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], GetAdminProfileData.prototype, "avatar", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], GetAdminProfileData.prototype, "username", void 0);
exports.GetAdminProfileData = GetAdminProfileData;
class GetAdminProfileOutput extends DataResponse_1.DataResponse {
    setData(val) {
        this.data = new GetAdminProfileData(val);
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsObject)(),
    (0, RefSchema_1.RefSchemaObject)(GetAdminProfileData),
    tslib_1.__metadata("design:type", GetAdminProfileData)
], GetAdminProfileOutput.prototype, "data", void 0);
exports.GetAdminProfileOutput = GetAdminProfileOutput;
