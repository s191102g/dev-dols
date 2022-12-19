import { Inject, Service } from "typedi";
import { validateDataInput } from "../../../../../utils/validator";
import { ITaskRepository } from "../../../../gateways/repositories/task/ITaskRepository";
import { IClientRepository } from "../../../../gateways/repositories/user/IClientRepository";
import { IWorkSpaceRepository } from "../../../../gateways/repositories/workspace/IWorkSpaceRepository";
import { CommandHandler } from "../../../../shared/usecase/CommandHandler";
import { GetByYearInput } from "./GetByYearInput";
import { GetByYearOutput } from "./GetByYearOutput";


@Service()
export class GetByYearHadler extends CommandHandler<
GetByYearInput,
GetByYearOutput
>{
    constructor(
        @Inject("workspace.repository")
        private readonly _workspaceRepository: IWorkSpaceRepository,
        @Inject('client.repository')
        private readonly  _clientRepository: IClientRepository,
        @Inject("task.repository")
        private readonly _taskRepository: ITaskRepository,
    ){
        super()
    }
    async handle(param: GetByYearInput): Promise<GetByYearOutput> {
        await validateDataInput(param);
 
        const workSpace = await this._workspaceRepository.getByYear(param.yearStart,param.yearEnd)
        const Client = await this._clientRepository.getByYear(param.yearStart,param.yearEnd)
        const Taks = await this._taskRepository.getByYear(param.yearStart,param.yearEnd)
        
        const resutl = new GetByYearOutput()
        resutl.setData({workSpace,Client,Taks})
        return resutl
    }
}