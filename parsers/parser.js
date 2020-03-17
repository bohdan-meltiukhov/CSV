/**
 * An abstract parser that can turn an input string to an array of list items.
 */
export default class Parser {

    /**
     * An abstract method that turns a string into an array of list items.
     *
     * @param {string} input - A string to be parsed.
     * @returns {Promise<HTMLLIElement[]>} A promise that provides an array of list items to be appended
     * to the output list.
     */
    async parse(input) {
    }
}