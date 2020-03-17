import ReduceParser from "./parsers/reduceParser.js";
import MapParser from "./parsers/mapParser.js";

/** An element that represents the "Process" button on the page. */
const processButtonElement = document.getElementById('process');

/**
 * Checks the chosen parser and creates an instance of the right parser.
 * <p>
 * Throw an Error in case no parser is chosen.
 *
 * @returns {Parser} An instance of the chosen parser.
 */
function chooseParser() {

    const parserOptions = document.getElementsByName('parser');

    let parser;

    parserOptions.forEach((option) => {
        if (option.checked) {
            switch (option.value) {
                case 'map':
                    parser = new MapParser();
                    break;
                case 'reduce':
                    parser = new ReduceParser();
            }
        }
    });

    if (!parser) {
        alert('Parser is not defined!');
        throw new Error('Parser is not defined!');
    }

    return parser;
}

/**
 * Clears the output list, provides the data from the input to the corresponding parser, and appends list items to
 * the output list.
 */
function handleClick() {

    const inputElement = document.getElementById('input');
    const outputElement = document.getElementById('output');

    outputElement.innerHTML = '';

    const parser = chooseParser();

    const listItems = parser.parse(inputElement.value);

    listItems.forEach((item) => outputElement.appendChild(item));
}

processButtonElement.addEventListener('click', handleClick);