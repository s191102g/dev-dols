
import { IsString } from "class-validator";
import { mapTemplate } from "../../../utils/mapper";
import { ErrorObject } from "./message/ErrorObject";
import { MessageError } from "./message/MessageError";

export class UnauthorizedError extends Error {
  httpCode: number;

  @IsString()
  code: string;

  @IsString()
  override name: string;

  @IsString()
  override message: string;
  @IsString()
  override stack: string;
  constructor(
    errObj: ErrorObject = MessageError.UNAUTHORIZED,
    ...params: any[]
  ) {
    super();
    this.stack =''
    this.httpCode = 401;
    this.code = errObj.code;
    this.name = "UnauthorizedError";
    this.message =
      params && params.length
        ? mapTemplate(errObj.message, ...params)
        : errObj.message;
  }
}
