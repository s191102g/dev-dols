/* eslint-disable @typescript-eslint/ban-types */

import { isArray, isDate, validate } from "class-validator";
import { InputValidationError } from "../../core/shared/exceptions/InputValidationError";

/**
 * Validate data input
 */
export async function validateDataInput(data: object): Promise<void> {
  const errors = await validate(data, {
    whitelist: true,
    validationError: { target: false },
  });
  if (errors && errors.length) {
    throw new InputValidationError(errors);
  }
}

/**
 * Check whether the value is a literal object or not
 */
export function isLiteralObject(val: object): boolean {
  return !!val && typeof val === "object" && !isArray(val) && !isDate(val);
}
