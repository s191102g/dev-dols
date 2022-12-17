import { IDataResponse } from "./DataResponse";
import { HandleOption } from "./HandleOption";


export abstract class QueryHandler<TIn, TOut extends IDataResponse> {
  abstract handle(
    param: number | string | TIn | HandleOption, 
    param2?: any
  ): Promise<TOut>;
}
