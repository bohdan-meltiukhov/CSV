import ReduceParser from "../parsers/reduceParser.js";

QUnit.module('ReduceParser test');

QUnit.test('should create list items with correct inner text.', function(assert) {
    const parser = new ReduceParser();

    assert.strictEqual(parser.parse('')[0].innerText, '<empty>',
        'An empty string should create an <empty> list item.');

    assert.strictEqual(parser.parse('1,2,3')[0].innerText, '1 2 3',
        'A single line of values should become separated by space.');

    const listItems = parser.parse('1,2,3\n4,5');

    assert.strictEqual(listItems[0].innerText, '1 2 3',
        'The first line of multiple lines should be parsed correctly.');

    assert.strictEqual(listItems[1].innerText, '4 5',
        'The second line of multiple lines should be parsed correctly.');

    assert.strictEqual(parser.parse('1,,5')[0].innerText, '1 <empty> 5',
        'A skipped value should be displayed as <empty>.');

    assert.strictEqual(parser.parse('\n1,2,3')[0].innerText, '<empty>',
        'A skipped line should be displayed as <empty>.');
});