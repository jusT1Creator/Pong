let batRightX = 1670, batRightY  = 400;

let batLeftX = 15, batLeftY = 400;

let scoreLeft = 0, scoreRight = 0;



let x=845, y=450, speedX = 3, speedY = 3;

let changeYLeft = 0;
let changeYRight = 0;

document.onkeydown=keyWSPressed;
function keyWSPressed(e){
    let k=e.keyCode;
    if(k==87){changeYLeft=-8;}
    if(k==83){changeYLeft=8;}
    if(k==38){changeYRight=-8;}
    if(k==40){changeYRight=8;}
// }
}

document.onkeyup=keyWSLifted;
function keyWSLifted(e){
    let k = e.keyCode;
    if(k == 87 || k == 83){
        changeYLeft = 0;
    }
    if(k == 38 || k == 40){
        changeYRight = 0;
    }
}


function moveBall(){
    x=x+speedX;
    y=y+speedY;
    ball.style.left=x+'px';
    ball.style.top=y+'px';

    if(x > 1620 &&  Math.abs(batRightY - y)<70){
        speedX=-speedX;
        speedX -= 2;
        speedY -= 2;
    }
    if(x<17 && Math.abs(batLeftY - y)<70){
        speedX=-speedX;
        speedX += 2;
        speedY += 2;
    }
    if(y<0){
        speedY=-speedY;
    }
    if(y > 890){
        speedY=-speedY;
    }
    if(x>1700){
        scoreLeft++;
        resetBall(false);
    }
    if(x < -20){
        scoreRight++;
        resetBall(true);
       
    }
    if(scoreLeft >= 4 || scoreRight >= 4){
        alert('game over!');
        clearInterval(timer);
    }
    
    scoreboard.innerHTML = scoreLeft + ":" + scoreRight;

}

var timer=setInterval(moveBall, 10);

function moveBats(){
    batLeftY+=changeYLeft;
    batRightY+=changeYRight;
    batright.style.left = batRightX + "px";
    batright.style.top = batRightY + "px";

    batleft.style.left = batLeftX + "px";
    batleft.style.top = batLeftY + "px";
}

var timer=setInterval(moveBats, 10);

function resetBall(leftOrRight){

    x = 845;
    y = 450;
    if(leftOrRight){
        speedX = Math.random() * 3 * -1;
        speedY = Math.random() * 3 * -1;
    }else{
        speedX = Math.random() * 3;
        speedY = Math.random() * 3;
    }
   
}