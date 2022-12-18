"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllClientHandler = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const IClientRepository_1 = require("../../../../gateways/repositories/user/IClientRepository");
const QueryHandler_1 = require("../../../../shared/usecase/QueryHandler");
const FindAllClientOutput_1 = require("./FindAllClientOutput");
let FindAllClientHandler = class FindAllClientHandler extends QueryHandler_1.QueryHandler {
    constructor(_clientRepository) {
        super();
        this._clientRepository = _clientRepository;
    }
    async handle(param) {
        const filter = new IClientRepository_1.FindAllClientFilter();
        filter.setPagination(param.skip, param.limit);
        filter.keyword = param.keyword;
        const [clients, count] = await this._clientRepository.findAndCount(filter);
        const result = new FindAllClientOutput_1.FindAllCientOutput();
        result.setData(clients);
        result.setPagination(count, param.skip, param.limit);
        return result;
    }
};
FindAllClientHandler = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, typedi_1.Inject)('client.repository')),
    tslib_1.__metadata("design:paramtypes", [Object])
], FindAllClientHandler);
exports.FindAllClientHandler = FindAllClientHandler;
