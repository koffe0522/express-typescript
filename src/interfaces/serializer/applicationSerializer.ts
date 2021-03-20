import moment from "moment";
import { StatusCode } from "./errorCode";

class ApplicationSerializer {
  public error(error: Error) {
    try {
      const err = JSON.parse(error.message);
      return {
        code: err.code,
        errorName: error.name,
        message: err.message,
        responsedAt: moment().format()
      };
    } catch {
      return {
        code: StatusCode.exception,
        errorName: error.name,
        message: "err obj parse error",
        responsedAt: moment().format()
      };
    }
  }
}

type TResponse<T> =
  | {
    code: typeof StatusCode.success;
    data: T;
    responsedAt: string;
  }
  | {
    code:
    | typeof StatusCode.invalid
    | typeof StatusCode.exception
    | typeof StatusCode.undefined;
    errorName?: string;
    message: string;
    responsedAt: string;
  };

export { ApplicationSerializer, TResponse, StatusCode };