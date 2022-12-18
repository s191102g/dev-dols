"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTemplateByIdHandler = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const MessageError_1 = require("../../../shared/exceptions/message/MessageError");
const SystemError_1 = require("../../../shared/exceptions/SystemError");
const QueryHandler_1 = require("../../../shared/usecase/QueryHandler");
const GetTemplateByIdOutput_1 = require("./GetTemplateByIdOutput");
let GetTemplateByIdHandler = class GetTemplateByIdHandler extends QueryHandler_1.QueryHandler {
    constructor(_templateRepository) {
        super();
        this._templateRepository = _templateRepository;
    }
    async handle(id) {
        const data = await this._templateRepository.getById(id);
        if (!data) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.DATA_NOT_FOUND);
        }
        const result = new GetTemplateByIdOutput_1.GetTemplateByIdOutput();
        result.setData(data);
        return result;
    }
};
GetTemplateByIdHandler = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, typedi_1.Inject)("template.repository")),
    tslib_1.__metadata("design:paramtypes", [Object])
], GetTemplateByIdHandler);
exports.GetTemplateByIdHandler = GetTemplateByIdHandler;
