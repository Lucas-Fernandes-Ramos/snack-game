


let canvas = document.getElementById('snack');
let context = canvas.getContext("2d");
let box = 32;
let snack = [];
snack[0] = {
    x: 8*box,
    y: 8*box
}

let direction = "right"
let food = {
    x: Math.floor(Math.random() * 15+1) * box,
    y: Math.floor(Math.random() * 15+1) * box,
}

/********************************/


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

function drawFood(){
  context.fillStyle = "red";
  context.fillRect(food.x, food.y, box, box);
}





document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";

}



function iniciaJogo(){
  if(snack[0].x > 15 * box  && direction == "right") snack[0].x = 0;
  if(snack[0].x < 0  && direction == "left") snack[0].x = 16 * box ;
  if(snack[0].y > 15 * box  && direction == "down") snack[0].y = 0;
  if(snack[0].y  < 0  && direction == "up") snack[0].y = 16 * box;
  
 


    criarBG();
    criarCobrinha();
    drawFood();

    let snack_X = snack[0].x;
    let snack_Y = snack[0].y;

    if(direction == "right") snack_X += box;
    if(direction == "left")  snack_X  -= box;
    if(direction == "up")    snack_Y -= box;
    if(direction == "down")  snack_Y  += box;

if(snack_X != food.x || snack_Y != food.y){
  //remova
  snack.pop();
}else{
    food.x =  Math.floor(Math.random() * 15+1) * box;
    food.y =  Math.floor(Math.random() * 15+1) * box;
}


    snack.pop();

    let newHead = {
        x: snack_X,
        y: snack_Y
    }

    snack.unshift(newHead);

}


let jogo = setInterval(iniciaJogo, 100)


