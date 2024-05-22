let canvasOne = document.querySelector('.canvasOne');
let canvasTwo = document.querySelector('.canvasTwo');
let canvasThree = document.querySelector('.canvasThree');
let canvasFour = document.querySelector('.canvasFour');
let canvasFive = document.querySelector('.canvasFive');
let canvasSix = document.querySelector('.canvasSix');
let canvasSeven = document.querySelector('.canvasSeven');



let ctx = canvasOne.getContext('2d'); // Создается канвас/холст

// fillRect - Заполняется холст (двигать по - х, двигать по - y, заполнять по - х, заполнять по - y);
// clearRect - Очищать холст


ctx.fillRect(200, 0, 100, 100); 
ctx.fillRect(235, 100, 25, 50);
ctx.fillRect(100, 150, 300, 25); 
ctx.fillRect(150, 175, 200, 150); 
ctx.fillRect(150, 175, 200, 150); 
ctx.fillRect(175, 300, 25, 100); 
ctx.fillRect(300, 300, 25, 100); 


// fillStyle - дает цвет 

let ctxTwo = canvasTwo.getContext('2d');
ctxTwo.fillStyle = 'red';
ctxTwo.fillRect(0, 0, 150, 500);
ctxTwo.fillStyle = 'green';
ctxTwo.fillRect(150, 0, 150, 500);
ctxTwo.fillStyle = 'blue';
ctxTwo.fillRect(300, 0, 150, 500);

// strokeRect - Создает обводку

let ctxThree = canvasThree.getContext('2d');

ctxThree.strokeRect(150, 150, 200, 200);


// strokeStyle - задает цвет линни
// beginPath - определяет начало нового пути
// moveTo - перо отрывается от холста и перемещается по координатам
// lineTo - перо опускается на холст и следует на координаты
// stroke - метод после которого линии появляютмя на хосте 
// fill - метод вместо stroke используется для заполнения замкнутых путей
// lineWidth - ширина линии

let ctxFour = canvasFour.getContext('2d');


ctxFour.strokeStyle = 'blue';
ctxFour.lineWidth = 5;
ctxFour.beginPath()
ctxFour.moveTo(50, 50);
ctxFour.lineTo(450, 450);
ctxFour.moveTo(450, 50);
ctxFour.lineTo(50, 450);
ctxFour.stroke();

// Окружности

let ctxFive = canvasFive.getContext('2d');

ctxFive.beginPath()
ctxFive.arc(150, 150, 100, 0, Math.PI * 2, false);
ctxFive.stroke();

// Animation

let ctxSix = canvasSix.getContext('2d');

let position = 0;

setInterval(() => {
    ctxSix.clearRect(0, 0, 500, 500)
    ctxSix.fillRect(position, 0, 50, 50);
    console.log('test')
    position += 5;

    if(position > 500) {
        position = 0;
    }
}, 30)


// Пчела

let ctxSeven = canvasSeven.getContext('2d');

function creatCircle(x, y, radius, isFill) {
    ctxSeven.beginPath();
    ctxSeven.arc(x, y, radius, 0, Math.PI * 2, false);

    if(isFill) {
        ctxSeven.fill();
    }else {
        ctxSeven.stroke();
    }
}


function getBee(x, y) {
    ctxSeven.lineWidth = 2;
    ctxSeven.strokeStyle = 'black';
    ctxSeven.fillStyle = 'gold';

    creatCircle(x, y, 8, true);
    creatCircle(x, y, 8, false);
    creatCircle(x - 5, y - 11, 5, false);
    creatCircle(x + 5, y - 11, 5, false);
    creatCircle(x - 2, y - 1, 2, false);
    creatCircle(x + 2, y - 1, 2, false);

}

function update(coordinate) {
    let offset = Math.random() * 4 - 2;
    console.log(offset)
    coordinate += offset;

    if(coordinate > 500) {
        coordinate = 500;
    }
    if(coordinate < 0) {
        coordinate = 0;
    }

    return coordinate;
} 

let x = 300;
let y = 300;

setInterval(() => {
    ctxSeven.clearRect(0, 0, 500, 500);

    getBee(x, y);
    x = update(x);
    y = update(y);

    ctxSeven.strokeRect(0, 0, 500,500) // Границы
}, 30)




