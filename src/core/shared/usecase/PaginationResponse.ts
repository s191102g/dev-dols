
import { IsInt, IsObject, Min } from "class-validator";
import { RefSchemaObject } from "../decorators/RefSchema";
import { DataResponse } from "./DataResponse";

export class Pagination {
  @IsInt()
  @Min(0)
  skip: number;

  @IsInt()
  @Min(1)
  limit: number;

  @IsInt()
  @Min(0)
  total: number;
}

export abstract class PaginationResponse<T> extends DataResponse<T[]> {
  @IsObject()
  @RefSchemaObject(Pagination)
  pagination: Pagination;

  setPagination(total: number, skip: number, limit: number): void {
    this.pagination = new Pagination();
    this.pagination.total = total;
    this.pagination.skip = skip;
    this.pagination.limit = limit;
  }
}
