import { IsString } from "class-validator";

export class GetByYearInput{
    @IsString()
    yearStart: string;
    @IsString()
    yearEnd: string;
}