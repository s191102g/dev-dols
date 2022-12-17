import { IsString } from "class-validator";


export class LoginClientInput {
    @IsString()
    email:string;

    @IsString()
    password:string;
}