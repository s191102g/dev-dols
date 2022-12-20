import { Inject, Service } from "typedi";
import { Client } from "../../../../domain/entities/user/Client";
import { Pay } from "../../../../domain/enums/userEnum";
import { IClientRepository } from "../../../../gateways/repositories/user/IClientRepository";
import { MessageError } from "../../../../shared/exceptions/message/MessageError";
import { SystemError } from "../../../../shared/exceptions/SystemError";
import { CommandHandler } from "../../../../shared/usecase/CommandHandler";
import { UpdateAccountOutput } from "./UpdateAccountOutput";


@Service()
export class UpdateAccountHandler extends CommandHandler<
string,
UpdateAccountOutput
>{
    constructor(
        @Inject("client.repository")
        private readonly _clientRepository: IClientRepository,
    ){
        super()
    }

    async handle(userId: string ): Promise<UpdateAccountOutput> {
        const client = await this._clientRepository.getById(userId);
        if(!client){
            throw new SystemError(MessageError.DATA_NOT_FOUND)
        }
        const data = new Client();
        data.pay = Pay.IsPay;
        const updated = await this._clientRepository.update(client.id, data);
        const result = new UpdateAccountOutput()
        result.setData(updated);
        return result;
    }
}