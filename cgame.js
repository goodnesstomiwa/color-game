var numSquares = 6;
var colorQ = []; //colorQ = color queue
var pickedColor;

var squares = document.querySelectorAll('.square');
var color = document.querySelector('#color-num');
var message = document.querySelector('#message');
var newColorButton = document.querySelector('#new-color');
var modeButtons = document.querySelectorAll('.mode');
var h1 = document.querySelector('h1');
var easyButton = document.querySelector('.mode')

inner();

function inner() {
    color.textContent = pickedColor;
    setupSquares();
    setupMode();
    newColor();
}

newColorButton.addEventListener('click', function() {
    newColor();
})

function setupSquares() {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colorQ[i]; 
        squares[i].addEventListener('click', function(){
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                message.textContent = 'correct ! yiipeeee';
                newColorButton.textContent = 'play again';
                changedColors(pickedColor); 
            }else {
                this.style.backgroundColor = '#0a3337';
                message.textContent = 'try again !'
            }
        })
    }
}

function setupMode() {
    for(var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function(){
            for(var i = 0; i < modeButtons.length; i++){
                modeButtons[i].classList.remove('selected');
            };
            this.classList.add('selected');
            if(this.textContent === 'Easy') {
                numSquares = 3;
            }else {
                numSquares = 6;
            }newColor();
        });
    }
}

function newColor() {
    colorQ = genRandomColors(numSquares);
    pickedColor = chooseColor();
    color.textContent = pickedColor;
    h1.style.backgroundColor = '#2C8E99';
    newColorButton.textContent = 'New Colors';
    message.textContent = '';

    for(var i = 0; i < squares.length; i++) {
        if(colorQ[i]) {
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colorQ[i];
        }else {
            squares[i].style.display = 'none';
        }
    }
}

function changedColors(color) {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
        h1.style.backgroundColor = color;
    }
}

function chooseColor() {
    var random = Math.floor(Math.random() * colorQ.length);
    return colorQ[random]
}

function genRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(makecolor());
    } return arr;
}

function makecolor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return 'rgb('+ r +', '+ g +', '+ b +')';
}