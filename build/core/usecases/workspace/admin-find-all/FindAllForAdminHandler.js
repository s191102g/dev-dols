"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindWorkspaceForAdminHandler = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const IWorkSpaceRepository_1 = require("../../../gateways/repositories/workspace/IWorkSpaceRepository");
const QueryHandler_1 = require("../../../shared/usecase/QueryHandler");
const FindAllForAdminOutput_1 = require("./FindAllForAdminOutput");
let FindWorkspaceForAdminHandler = class FindWorkspaceForAdminHandler extends QueryHandler_1.QueryHandler {
    constructor(_workspaceRepository) {
        super();
        this._workspaceRepository = _workspaceRepository;
    }
    async handle(param) {
        const filter = new IWorkSpaceRepository_1.FindAllWorkspaceForAdminClientFilter();
        filter.setPagination(param.skip, param.limit);
        filter.keyword = param.keyword;
        const [workspaces, count] = await this._workspaceRepository.findAndCount(filter);
        const result = new FindAllForAdminOutput_1.FindAllWorkspaceForAdminOutput();
        result.setData(workspaces);
        result.setPagination(count, param.skip, param.limit);
        return result;
    }
};
FindWorkspaceForAdminHandler = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__param(0, (0, typedi_1.Inject)("workspace.repository")),
    tslib_1.__metadata("design:paramtypes", [Object])
], FindWorkspaceForAdminHandler);
exports.FindWorkspaceForAdminHandler = FindWorkspaceForAdminHandler;
