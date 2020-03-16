const processButtonElement = document.getElementById('process');

function handleClick() {

    const inputElement = document.getElementById('input');
    const outputElement = document.getElementById('output');

    outputElement.innerHTML = '';

    const input = inputElement.value;

    let lines = input.split('\n');

    lines = lines.map((line) => line.split(',')
        .map((value) => (value !== '') ? value : '<empty>')
        .join(' ')
    );

    lines.forEach((line) => {
        let listItem = document.createElement('li');
        listItem.innerText = line;
        outputElement.appendChild(listItem);
    });
}


processButtonElement.addEventListener('click', handleClick);