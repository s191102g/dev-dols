"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindTemplateHandler = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const ITemplateRepository_1 = require("../../../gateways/repositories/template/ITemplateRepository");
const QueryHandler_1 = require("../../../shared/usecase/QueryHandler");
const FindTemplateOutput_1 = require("./FindTemplateOutput");
let FindTemplateHandler = class FindTemplateHandler extends QueryHandler_1.QueryHandler {
    constructor(_templateRepository) {
        super();
        this._templateRepository = _templateRepository;
    }
    async handle(param) {
        const filter = new ITemplateRepository_1.FindTemplateFilter();
        filter.setPagination(param.skip, param.limit);
        filter.keyword = param.keyword;
        const [tempalte, count] = await this._templateRepository.findAndCount(filter);
        const result = new FindTemplateOutput_1.FindTemplateOutput();
        result.setData(tempalte);
        result.setPagination(count, param.skip, param.limit);
        return result;
    }
};
FindTemplateHandler = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, typedi_1.Inject)("template.repository")),
    tslib_1.__metadata("design:paramtypes", [Object])
], FindTemplateHandler);
exports.FindTemplateHandler = FindTemplateHandler;
