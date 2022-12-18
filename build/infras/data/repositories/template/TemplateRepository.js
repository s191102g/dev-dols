"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateRepository = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const TemplateDb_1 = require("../../entities/template/TemplateDb");
const TemplateSchema_1 = require("../../schemas/template/TemplateSchema");
const BaseRepository_1 = require("../base/BaseRepository");
let TemplateRepository = class TemplateRepository extends BaseRepository_1.BaseRepository {
    constructor() {
        super(TemplateDb_1.TemplateDb, TemplateSchema_1.TEMPLATE_SCHEMA);
    }
    async findAndCount(param) {
        let query = this.repository.createQueryBuilder(TemplateSchema_1.TEMPLATE_SCHEMA.TABLE_NAME);
        if (param.keyword) {
            const keyword = `%${param.keyword}%`;
            query = query.andWhere(`${TemplateSchema_1.TEMPLATE_SCHEMA.TABLE_NAME}.${TemplateSchema_1.TEMPLATE_SCHEMA.COLUMNS.TYPE_BY_STRING} ILIKE :keyword`, { keyword });
        }
        query = query.skip(param.skip).take(param.limit);
        const [list, count] = await query.getManyAndCount();
        return [list.map((item) => item.toEntity()), count];
    }
};
TemplateRepository = tslib_1.__decorate([
    (0, typedi_1.Service)("template.repository"),
    tslib_1.__metadata("design:paramtypes", [])
], TemplateRepository);
exports.TemplateRepository = TemplateRepository;
