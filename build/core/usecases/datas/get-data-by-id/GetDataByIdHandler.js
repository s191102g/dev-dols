"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDataByIdHandler = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const MessageError_1 = require("../../../shared/exceptions/message/MessageError");
const SystemError_1 = require("../../../shared/exceptions/SystemError");
const QueryHandler_1 = require("../../../shared/usecase/QueryHandler");
const GetDataByIdOutput_1 = require("./GetDataByIdOutput");
let GetDataByIdHandler = class GetDataByIdHandler extends QueryHandler_1.QueryHandler {
    constructor(_dataRepository) {
        super();
        this._dataRepository = _dataRepository;
    }
    async handle(id) {
        const data = await this._dataRepository.getById(id);
        if (!data) {
            throw new SystemError_1.SystemError(MessageError_1.MessageError.DATA_NOT_FOUND);
        }
        const result = new GetDataByIdOutput_1.GetDataByIdOutput();
        result.setData(data);
        return result;
    }
};
GetDataByIdHandler = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, typedi_1.Inject)("data.repository")),
    tslib_1.__metadata("design:paramtypes", [Object])
], GetDataByIdHandler);
exports.GetDataByIdHandler = GetDataByIdHandler;
