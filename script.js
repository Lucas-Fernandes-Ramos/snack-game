


let canvas = document.getElementById('snack');
let context = canvas.getContext("2d");
let box = 32;
let snack = [];
snack[0] = {
    x: 8*box,
    y: 8*box
}

let direction = "right"

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

function iniciaJogo(){
    criarBG();
    criarCobrinha();


    let snack_X = snack[0].x;
    let snack_Y = snack[0].y;

    if(direction == "right") snack_X += box;
    if(direction == "left")  snack_X  -= box;
    if(direction == "up")  snack_Y -= box;
    if(direction == "down") snack_Y  += box;

    snack.pop();

    let newHead = {
        x: snack_X,
        y: snack_Y
    }

    snack.unshift(newHead);

}


let jogo = setInterval(() => {
    iniciaJogo();
}, 100);


