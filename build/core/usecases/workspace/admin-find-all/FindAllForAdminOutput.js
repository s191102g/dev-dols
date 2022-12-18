"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllWorkspaceForAdminOutput = exports.FindAllWorkSpaceForAdminData = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const RefSchema_1 = require("../../../shared/decorators/RefSchema");
const PaginationResponse_1 = require("../../../shared/usecase/PaginationResponse");
class FindAllWorkSpaceForAdminData {
    constructor(data) {
        this.id = data.id;
        this.createdAt = data.createdAt;
        this.userCreate = data.userId;
        this.name = data.name;
        this.image = data.image;
        this.member = data.member;
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsUUID)(),
    tslib_1.__metadata("design:type", String)
], FindAllWorkSpaceForAdminData.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDate)(),
    tslib_1.__metadata("design:type", Date)
], FindAllWorkSpaceForAdminData.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], FindAllWorkSpaceForAdminData.prototype, "userCreate", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], FindAllWorkSpaceForAdminData.prototype, "image", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], FindAllWorkSpaceForAdminData.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    tslib_1.__metadata("design:type", Array)
], FindAllWorkSpaceForAdminData.prototype, "member", void 0);
exports.FindAllWorkSpaceForAdminData = FindAllWorkSpaceForAdminData;
class FindAllWorkspaceForAdminOutput extends PaginationResponse_1.PaginationResponse {
    setData(list) {
        this.data = list.map((e) => new FindAllWorkSpaceForAdminData(e));
    }
}
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    (0, RefSchema_1.RefSchemaArray)(FindAllWorkSpaceForAdminData),
    tslib_1.__metadata("design:type", Array)
], FindAllWorkspaceForAdminOutput.prototype, "data", void 0);
exports.FindAllWorkspaceForAdminOutput = FindAllWorkspaceForAdminOutput;
