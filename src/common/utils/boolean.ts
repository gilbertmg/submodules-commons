/**
 * Parses a string/number into a valid boolean value.
 * @param str string to parse
 * @returns a boolean representation of the string.
 */
export const toBoolean = (str: boolean | string | null | number | undefined) => {
    if (!str) {
        return false;
    }
    if (typeof str === "string") {
        return !["0", "false", "no", "n", "null", "undefined", "nil"].includes(str.toLowerCase().trim());
    }
    return Boolean(str).valueOf();
};
