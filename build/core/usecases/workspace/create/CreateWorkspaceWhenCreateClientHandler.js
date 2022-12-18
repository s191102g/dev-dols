"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWorkspaceWhenCreateClientHandler = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const validator_1 = require("../../../../utils/validator");
const WorkSpace_1 = require("../../../domain/entities/workspace/WorkSpace");
const CommandHandler_1 = require("../../../shared/usecase/CommandHandler");
const CreateWorkspaceOutput_1 = require("./CreateWorkspaceOutput");
let CreateWorkspaceWhenCreateClientHandler = class CreateWorkspaceWhenCreateClientHandler extends CommandHandler_1.CommandHandler {
    constructor(_workspaceRepository) {
        super();
        this._workspaceRepository = _workspaceRepository;
    }
    async handle(userId, param, handleOption) {
        await (0, validator_1.validateDataInput)(param);
        const data = new WorkSpace_1.WorkSpace();
        data.userId = userId;
        data.name = param.name;
        data.image = "";
        const member = [userId];
        data.member = member;
        const created = await this._workspaceRepository.create(data, handleOption.queryRunner);
        const result = new CreateWorkspaceOutput_1.CreateWorkspaceOutput();
        result.setData(created);
        return result;
    }
};
CreateWorkspaceWhenCreateClientHandler = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, typedi_1.Inject)("workspace.repository")),
    tslib_1.__metadata("design:paramtypes", [Object])
], CreateWorkspaceWhenCreateClientHandler);
exports.CreateWorkspaceWhenCreateClientHandler = CreateWorkspaceWhenCreateClientHandler;
