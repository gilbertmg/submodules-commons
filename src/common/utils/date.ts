import Logger from "./logger";

/**
 * Parses a string into a valid ISO date formatted string.
 * @param dateToTransform date string to transform
 * @returns a date into ISO string format or `null` if the date can't be parsed.
 */
export const toISODate = (dateToTransform: string | Date | null = null) => {
    let transformedDate = null;
    try {
        if (dateToTransform) {
            if (dateToTransform instanceof Date) {
                transformedDate = dateToTransform.toISOString();
            } else {
                transformedDate = new Date(dateToTransform).toISOString();
            }
        }
    } catch (error) {
        Logger.error(`[toISODate] Error found => [${JSON.stringify(error, Object.getOwnPropertyNames(error))}]`);
    }
    return transformedDate;
};

/**
 * Parses a string into a Date object.
 * @param dateToTransform date string to parse
 * @returns a date object or `null` if the date can't be parsed.
 */
export const toDate = (dateToTransform: string | Date | null = null) => {
    let transformedDate = null;
    try {
        if (dateToTransform) {
            if (dateToTransform instanceof Date) {
                transformedDate = dateToTransform;
            } else {
                transformedDate = new Date(dateToTransform);
            }
        }
    } catch (error) {
        Logger.error(`[toDate] Error found => [${JSON.stringify(error, Object.getOwnPropertyNames(error))}]`);
    }
    return transformedDate;
};
