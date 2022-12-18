"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClientHandler = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const validator_1 = require("../../../../../utils/validator");
const Client_1 = require("../../../../domain/entities/user/Client");
const MessageError_1 = require("../../../../shared/exceptions/message/MessageError");
const SystemError_1 = require("../../../../shared/exceptions/SystemError");
const CommandHandler_1 = require("../../../../shared/usecase/CommandHandler");
const HandleOption_1 = require("../../../../shared/usecase/HandleOption");
const CreateBoardInput_1 = require("../../../board/create/CreateBoardInput");
const CreateBoardwhenCreateClientHandler_1 = require("../../../board/create/CreateBoardwhenCreateClientHandler");
const CreateWorkspaceInput_1 = require("../../../workspace/create/CreateWorkspaceInput");
const CreateWorkspaceWhenCreateClientHandler_1 = require("../../../workspace/create/CreateWorkspaceWhenCreateClientHandler");
const CreateClientOutput_1 = require("./CreateClientOutput");
let CreateClientHandler = class CreateClientHandler extends CommandHandler_1.CommandHandler {
    constructor(_clientRepository, _cryptoService, _dbContext, _createWorkspace, _createBoard, _authJwtService) {
        super();
        this._clientRepository = _clientRepository;
        this._cryptoService = _cryptoService;
        this._dbContext = _dbContext;
        this._createWorkspace = _createWorkspace;
        this._createBoard = _createBoard;
        this._authJwtService = _authJwtService;
    }
    async handle(param) {
        await (0, validator_1.validateDataInput)(param);
        const data = new Client_1.Client();
        data.firstName = param.firstName;
        data.passWord = param.password;
        data.avatar = param.image;
        const client = await this._clientRepository.getByEmail(this._cryptoService.encrypt(param.email));
        if (!client) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.DATA_NOT_FOUND);
        }
        if (client.activeKey) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.DATA_INVALID);
        }
        const worksapce = new CreateWorkspaceInput_1.CreateWorkspaceInput();
        worksapce.name = `${data.firstName} WorkSpace`;
        return await this._dbContext
            .getConnection()
            .runTransaction(async (queryRunner) => {
            const handleOption = new HandleOption_1.HandleOption();
            handleOption.queryRunner = queryRunner;
            const idCreated = await this._createWorkspace.handle(client.id, worksapce, handleOption);
            const board = new CreateBoardInput_1.CreateBoardInput();
            board.title = "First board";
            board.workspaceId = idCreated.data;
            board.description = '<h2><a href="https://emojipedia.org/travel-places">🚀</a>Xin chào bạn, lại là DOLS đây !<a href="https://emojipedia.org/travel-places">🚀</a></h2><p>&nbsp;</p><h2><a href="https://emojipedia.org/four-leaf-clover/">🍀</a>Đây là nơi mà bạn có thể ghi bất cứ thứ gì mà bạn muốn…</h2><p>&nbsp;</p><h2><a href="https://emojipedia.org/new-years-eve/">🎊</a>Chỉ có cái bạn không nghĩ ra chứ không có cái DOLS không có&nbsp;</h2>';
            board.position = 0;
            board.icon = '✍️',
                board.favourite = 'no',
                board.favouritePosition = 0;
            board.templateId = '674e1995-80a0-467a-b48f-312502538210';
            await this._createBoard.handle(board, handleOption);
            await this._clientRepository.update(client.id, data, handleOption.queryRunner);
            const token = this._authJwtService.sign(client.id, client.role);
            const result = new CreateClientOutput_1.CreateClientOutput();
            result.setData(token);
            return result;
        });
    }
};
CreateClientHandler = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, typedi_1.Inject)("client.repository")),
    tslib_1.__param(1, (0, typedi_1.Inject)("crypto.service")),
    tslib_1.__param(2, (0, typedi_1.Inject)("db.context")),
    tslib_1.__param(3, (0, typedi_1.Inject)()),
    tslib_1.__param(4, (0, typedi_1.Inject)()),
    tslib_1.__param(5, (0, typedi_1.Inject)("auth_jwt.service")),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object, CreateWorkspaceWhenCreateClientHandler_1.CreateWorkspaceWhenCreateClientHandler,
        CreateBoardwhenCreateClientHandler_1.CreateBoardWhenCreateClientHandler, Object])
], CreateClientHandler);
exports.CreateClientHandler = CreateClientHandler;
