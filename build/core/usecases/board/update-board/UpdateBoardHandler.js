"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBoardHandler = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const validator_1 = require("../../../../utils/validator");
const Board_1 = require("../../../domain/entities/board/Board");
const MessageError_1 = require("../../../shared/exceptions/message/MessageError");
const SystemError_1 = require("../../../shared/exceptions/SystemError");
const CommandHandler_1 = require("../../../shared/usecase/CommandHandler");
const UpdateBoardOutput_1 = require("./UpdateBoardOutput");
let UpdateBoardHandler = class UpdateBoardHandler extends CommandHandler_1.CommandHandler {
    constructor(_boardReposiory, _templateRepository) {
        super();
        this._boardReposiory = _boardReposiory;
        this._templateRepository = _templateRepository;
    }
    async handle(id, param) {
        await (0, validator_1.validateDataInput)(param);
        const board = await this._boardReposiory.getById(id);
        if (!board) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.DATA_NOT_FOUND);
        }
        if (board.workSpaceId !== param.workspaceId) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.PARAM_INCORRECT, "worksapceId");
        }
        const data = new Board_1.Board();
        if (param.title)
            data.title = param.title;
        if (param.description)
            data.description = param.description;
        if (param.icon)
            data.icon = param.icon;
        if (param.templateId) {
            const template = await this._templateRepository.getById(param.templateId);
            if (!template) {
                throw new SystemError_1.SystemError(MessageError_1.MessageError.PARAM_INCORRECT, "template");
            }
            data.templateId = param.templateId;
        }
        const hasSuccess = await this._boardReposiory.update(board.id, data);
        const result = new UpdateBoardOutput_1.UpdateBoardOutput();
        result.setData(hasSuccess);
        return result;
    }
};
UpdateBoardHandler = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, typedi_1.Inject)("board.repository")),
    tslib_1.__param(1, (0, typedi_1.Inject)("template.repository")),
    tslib_1.__metadata("design:paramtypes", [Object, Object])
], UpdateBoardHandler);
exports.UpdateBoardHandler = UpdateBoardHandler;
