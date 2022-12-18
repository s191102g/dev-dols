"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBoardHandler = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const MessageError_1 = require("../../../shared/exceptions/message/MessageError");
const SystemError_1 = require("../../../shared/exceptions/SystemError");
const CommandHandler_1 = require("../../../shared/usecase/CommandHandler");
const DeleteBoardOutput_1 = require("./DeleteBoardOutput");
let DeleteBoardHandler = class DeleteBoardHandler extends CommandHandler_1.CommandHandler {
    constructor(_boardReposiory) {
        super();
        this._boardReposiory = _boardReposiory;
    }
    async handle(id) {
        const board = await this._boardReposiory.getById(id);
        if (!board) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.DATA_NOT_FOUND);
        }
        const hasSuccess = await this._boardReposiory.softDelete(id);
        const result = new DeleteBoardOutput_1.DeleteBoardOutput();
        result.setData(hasSuccess);
        return result;
    }
};
DeleteBoardHandler = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, typedi_1.Inject)("board.repository")),
    tslib_1.__metadata("design:paramtypes", [Object])
], DeleteBoardHandler);
exports.DeleteBoardHandler = DeleteBoardHandler;
