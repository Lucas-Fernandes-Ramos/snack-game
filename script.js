


let canvas = document.getElementById('snack');
let context = canvas.getContext("2d");
let box = 32;
let snack = [];
snack[0] = {
    x: 8*box,
    y: 8*box
}

function criarBG(){
    context.fillStyle = 'lightgreen';
    context.fillRect(0,0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for( index = 0; index < snack.length; index++) {
        context.fillStyle =  "black";
        context.fillRect(snack[index].x, snack[index].y, box, box);
        
    }
}

criarBG();
criarCobrinha();