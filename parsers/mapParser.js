import Parser from "./parser.js";

/**
 * A parser that uses the javascript map method to turn an input string to an array of list items.
 */
export default class MapParser extends Parser {

    /**
     * Turns the provided string to an array of list items with the help of the javascript map method.
     *
     * @param {string} input - The string to be parsed.
     * @returns {HTMLLIElement[]} List items to be appended to the output list.
     */
    parse(input) {
        let lines = input.split('\n');

        lines = lines.map(line =>
            line.split(',')
                .map((value) => (value !== '') ? value : '<empty>')
                .join(' ')
        );

        const listItems = lines.map(line => {
            const listItem = document.createElement('li');
            listItem.innerText = line;
            return listItem;
        });

        return listItems;
    }
}