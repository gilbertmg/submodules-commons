export enum HttpMethods {
    GET = "GET",
    PATCH = "PATCH",
    PUT = "PUT",
    POST = "POST",
    DELETE = "DELETE",
}

/** Services provided by this middleware. */
export enum Services {
    /** this is one service */
    ServiceA = "service-a",
    /** this is another service */
    ServiceB = "service-b",
}

/**
 * The severity of the log entry:
 */
export enum Severity {
    /** Information that is diagnostically helpful to people more than just developers (IT, sysadmins, etc.). */
    DEBUG = "DEBUG",
    /** Generally useful information to log (service start/stop, configuration assumptions, etc). Nice to have Info but usually needed under normal circumstances. */
    INFO = "INFO",
    /** Anything that can potentially cause application oddities, but for which the middleware will be automatically recovering. (Such as retrying an operation, missing secondary data, etc.) */
    WARNING = "WARNING",
    /** Any error which is fatal to the operation, but not the service or application (can't open a required file, missing data, etc.). These errors will force user (administrator, or direct user) intervention. */
    ERROR = "ERROR",
    /** Any error that is forcing a shutdown of the service or application to prevent data loss (or further data loss). */
    CRITICAL = "CRITICAL",
}
