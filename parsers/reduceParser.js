import Parser from "./parser.js";

/**
 * A parser that uses the javascript reduce method to turn an input string to an array of list items.
 */
export default class ReduceParser extends Parser{

    /**
     * Turns the provided string to an array of list items with the help of the javascript reduce method.
     *
     * @param {string} input - The string to be parsed.
     * @returns {Promise<HTMLLIElement[]>} A promise that provides list items to be appended to the output list.
     */
    async parse(input) {

        return new Promise(resolve => {
            let lines = input.split('\n');

            lines = lines.reduce(function(modifiedLines, line) {
                const modifiedLine = line.split(',')
                    .map((value) => (value !== '') ? value : '<empty>')
                    .join(' ');

                modifiedLines.push(modifiedLine);
                return modifiedLines;
            }, []);

            const listItems = lines.reduce(function(items, line) {
                const listItem = document.createElement('li');
                listItem.innerText = line;
                items.push(listItem);
                return items;
            }, []);

            resolve(listItems);
        });
    }
}