let textAreaElement = document.getElementById('text-area');

let buttonElement = document.getElementById('send');

let listElement = document.getElementById('list');

function handleClick() {
    let input = textAreaElement.value;

    let lines = input.split('\n');

    console.log(lines);

    lines = lines.map((line) => line.split(',')
        .map((value) => (value !== '') ? value : '<empty>')
        .join(' ')
    );

    console.log(lines);

    lines.forEach((line) => {
        let listItem = document.createElement('li');
        listItem.innerText = line;
        listElement.appendChild(listItem);
    });
}


buttonElement.addEventListener('click', handleClick);