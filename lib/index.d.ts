/**
 * Checks the input against the list of blacklisted names.
 *
 * @export
 * @param {string} input
 * @returns {boolean} True if valid, false if not (the input was found).
 */
export function validate(input: string): boolean;
/**
 * A list containing all the blacklisted names
 */
export const list: string[];
