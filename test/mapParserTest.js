import MapParser from "../parsers/mapParser.js";

QUnit.module('MapParser test');

QUnit.test('should create list items with correct inner text.', async function(assert) {
    const parser = new MapParser();

    let result = await parser.parse('');

    assert.strictEqual(result[0].innerText, '<empty>',
        'An empty string should create an <empty> list item.');

    result = await parser.parse('1,2,3');

    assert.strictEqual(result[0].innerText, '1 2 3',
        'A single line of values should become separated by space.');

    result = await parser.parse('1,2,3\n4,5');

    assert.strictEqual(result[0].innerText, '1 2 3',
        'The first line of multiple lines should be parsed correctly.');

    assert.strictEqual(result[1].innerText, '4 5',
        'The second line of multiple lines should be parsed correctly.');

    result = await parser.parse('1,,5');

    assert.strictEqual(result[0].innerText, '1 <empty> 5',
        'A skipped value should be displayed as <empty>.');

    result = await parser.parse('\n1,2,3');

    assert.strictEqual(result[0].innerText, '<empty>',
        'A skipped line should be displayed as <empty>.');
});