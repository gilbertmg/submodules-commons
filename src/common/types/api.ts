import { ErrorObject } from "./app";

/**
 * Basic API interface used to send/receive responses
 */
export type ApiResponse<T> = {
    /** Object which contains the data sent/received */
    data: T;
};

/**
 * Basic API error interface
 */
export type ApiErrorResponse = ApiResponse<ErrorObject> & {
    /** Error message */
    message: string;
};
