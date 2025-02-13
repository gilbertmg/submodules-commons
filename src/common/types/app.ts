/** Used to wrap error objects and adding the posibility of extending it with additional properties without DB updates. */
export type ErrorObject = {
    /** The original error caught by the middleware (usually the stacktrace). */
    originalError: object | null | unknown;
    /** Additional information useful to understand the error. */
    extraData?: object;
};
