import { IsString } from "class-validator";
import { DataResponse } from "../../../shared/usecase/DataResponse";


export class CreatePaymentOutput extends DataResponse<any>{
    @IsString()
    data: any;

    setData(val:any){
        this.data = val
    }
}