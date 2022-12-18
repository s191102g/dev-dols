"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsingWithGGHandler = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const validator_1 = require("../../../../../utils/validator");
const Client_1 = require("../../../../domain/entities/user/Client");
const userEnum_1 = require("../../../../domain/enums/userEnum");
const MessageError_1 = require("../../../../shared/exceptions/message/MessageError");
const SystemError_1 = require("../../../../shared/exceptions/SystemError");
const CommandHandler_1 = require("../../../../shared/usecase/CommandHandler");
const HandleOption_1 = require("../../../../shared/usecase/HandleOption");
const CreateBoardInput_1 = require("../../../board/create/CreateBoardInput");
const CreateBoardwhenCreateClientHandler_1 = require("../../../board/create/CreateBoardwhenCreateClientHandler");
const CreateWorkspaceInput_1 = require("../../../workspace/create/CreateWorkspaceInput");
const CreateWorkspaceWhenCreateClientHandler_1 = require("../../../workspace/create/CreateWorkspaceWhenCreateClientHandler");
const UsingWithGGOutput_1 = require("./UsingWithGGOutput");
let UsingWithGGHandler = class UsingWithGGHandler extends CommandHandler_1.CommandHandler {
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
        const client = await this._clientRepository.getByEmail(this._cryptoService.encrypt(param.email));
        if (!client) {
            return await this._dbContext
                .getConnection()
                .runTransaction(async (queryRunner) => {
                const handleOption = new HandleOption_1.HandleOption();
                handleOption.queryRunner = queryRunner;
                const data = new Client_1.Client();
                data.email = param.email;
                data.status = userEnum_1.StatusType.Active;
                data.role = userEnum_1.RoleType.Client;
                data.typeUse = userEnum_1.TypeUse.WithGG;
                data.firstName = param.name;
                data.passWord = param.password;
                data.avatar = param.avatar;
                const idClient = await this._clientRepository.create(data, handleOption.queryRunner);
                const worksapce = new CreateWorkspaceInput_1.CreateWorkspaceInput();
                worksapce.name = `${data.firstName} WorkSpace`;
                const idCreated = await this._createWorkspace.handle(idClient, worksapce, handleOption);
                const board = new CreateBoardInput_1.CreateBoardInput();
                board.title = "First board";
                board.workspaceId = idCreated.data;
                board.description =
                    '<h2><a href="https://emojipedia.org/travel-places">🚀</a>Xin chào bạn, lại là DOLS đây !<a href="https://emojipedia.org/travel-places">🚀</a></h2><p>&nbsp;</p><h2><a href="https://emojipedia.org/four-leaf-clover/">🍀</a>Đây là nơi mà bạn có thể ghi bất cứ thứ gì mà bạn muốn…</h2><p>&nbsp;</p><h2><a href="https://emojipedia.org/new-years-eve/">🎊</a>Chỉ có cái bạn không nghĩ ra chứ không có cái DOLS không có&nbsp;</h2>';
                board.position = 0;
                (board.icon = "✍️"),
                    (board.favourite = "no"),
                    (board.favouritePosition = 0);
                board.templateId = "674e1995-80a0-467a-b48f-312502538210";
                await this._createBoard.handle(board, handleOption);
                const token = this._authJwtService.sign(idClient, data.role);
                const result = new UsingWithGGOutput_1.UsingWithGGOutput();
                result.setData(token);
                return result;
            });
        }
        else {
            if (client.typeUse == userEnum_1.TypeUse.Normal) {
                throw new SystemError_1.SystemError(MessageError_1.MessageError.DATA_INVALID);
            }
            const token = this._authJwtService.sign(client.id, client.role);
            const result = new UsingWithGGOutput_1.UsingWithGGOutput();
            result.setData(token);
            return result;
        }
    }
};
UsingWithGGHandler = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, typedi_1.Inject)("client.repository")),
    tslib_1.__param(1, (0, typedi_1.Inject)("crypto.service")),
    tslib_1.__param(2, (0, typedi_1.Inject)("db.context")),
    tslib_1.__param(3, (0, typedi_1.Inject)()),
    tslib_1.__param(4, (0, typedi_1.Inject)()),
    tslib_1.__param(5, (0, typedi_1.Inject)("auth_jwt.service")),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object, CreateWorkspaceWhenCreateClientHandler_1.CreateWorkspaceWhenCreateClientHandler,
        CreateBoardwhenCreateClientHandler_1.CreateBoardWhenCreateClientHandler, Object])
], UsingWithGGHandler);
exports.UsingWithGGHandler = UsingWithGGHandler;
