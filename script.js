
const main = document.querySelector('.main');

const container = document.createElement('div');
container.classList.add('container');
main.appendChild(container);

let num = +prompt("Input grid number under 1 - 100 then Enter");

while(num > 100 || num === null || num === 0) {
    num = +prompt("Input grid number 1 - 100 then Enter");
}

function setGrid(num) {
    
    for(let i = 1; i <= num; i++) {
        num;
        const div = document.createElement('div');
        div.setAttribute('class', 'division');
        container.appendChild(div);
        for(let j = 1; j <= num; j++) {
            const div2 = document.createElement('div');
            div2.setAttribute('class', 'division-2');
            div2.addEventListener('mouseover', mouseOver);
            div.appendChild(div2);
            
            function mouseOver() {
                div2.classList.add('hovering');
            }
        }
    }
}
setGrid(num);

const button = document.querySelector('.clear-grid');
button.addEventListener('click', clearGrid);

function clearGrid() {
    window.location.reload(true);
}