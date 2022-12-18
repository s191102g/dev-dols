"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddimgWorkspaceHandler = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const validator_1 = require("../../../../utils/validator");
const WorkSpace_1 = require("../../../domain/entities/workspace/WorkSpace");
const CommandHandler_1 = require("../../../shared/usecase/CommandHandler");
const AddimgWorkspaceOutput_1 = require("./AddimgWorkspaceOutput");
const SystemError_1 = require("../../../shared/exceptions/SystemError");
const MessageError_1 = require("../../../shared/exceptions/message/MessageError");
let AddimgWorkspaceHandler = class AddimgWorkspaceHandler extends CommandHandler_1.CommandHandler {
    constructor(_workspaceRepository) {
        super();
        this._workspaceRepository = _workspaceRepository;
    }
    async handle(id, param) {
        await (0, validator_1.validateDataInput)(param);
        const data = new WorkSpace_1.WorkSpace();
        data.image = param.image;
        const wp = await this._workspaceRepository.getById(id);
        if (!wp) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.DATA_NOT_FOUND);
        }
        await this._workspaceRepository.update(id, data);
        const result = new AddimgWorkspaceOutput_1.AddimgWorkspaceOutput();
        result.setData('test');
        return result;
    }
};
AddimgWorkspaceHandler = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, typedi_1.Inject)("workspace.repository")),
    tslib_1.__metadata("design:paramtypes", [Object])
], AddimgWorkspaceHandler);
exports.AddimgWorkspaceHandler = AddimgWorkspaceHandler;
