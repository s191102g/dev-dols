"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllCientOutput = exports.FindAllClientData = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const userEnum_1 = require("../../../../domain/enums/userEnum");
const RefSchema_1 = require("../../../../shared/decorators/RefSchema");
const PaginationResponse_1 = require("../../../../shared/usecase/PaginationResponse");
class FindAllClientData {
    constructor(data) {
        this.id = data.id;
        this.createdAt = data.createdAt;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.email = data.email;
        this.password = data.passWord;
        this.role = data.role;
        this.birthDay = data.birthDay;
        this.avatar = data.avatar;
        this.gender = data.gender;
        this.status = data.status;
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsUUID)(),
    tslib_1.__metadata("design:type", String)
], FindAllClientData.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDate)(),
    tslib_1.__metadata("design:type", Date)
], FindAllClientData.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], FindAllClientData.prototype, "email", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], FindAllClientData.prototype, "password", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], FindAllClientData.prototype, "image", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsEnum)(userEnum_1.RoleType),
    tslib_1.__metadata("design:type", String)
], FindAllClientData.prototype, "role", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], FindAllClientData.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], FindAllClientData.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsEnum)(userEnum_1.GenderType),
    tslib_1.__metadata("design:type", String)
], FindAllClientData.prototype, "gender", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDate)(),
    tslib_1.__metadata("design:type", Date)
], FindAllClientData.prototype, "birthDay", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], FindAllClientData.prototype, "avatar", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsEnum)(userEnum_1.StatusType),
    tslib_1.__metadata("design:type", String)
], FindAllClientData.prototype, "status", void 0);
exports.FindAllClientData = FindAllClientData;
class FindAllCientOutput extends PaginationResponse_1.PaginationResponse {
    setData(list) {
        this.data = list.map((e) => new FindAllClientData(e));
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    (0, RefSchema_1.RefSchemaArray)(FindAllClientData),
    tslib_1.__metadata("design:type", Array)
], FindAllCientOutput.prototype, "data", void 0);
exports.FindAllCientOutput = FindAllCientOutput;
