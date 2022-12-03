let mapArray, ctx,currentImgMain;
let imgMountain, imgMain, imgEnemy;
//mapArray - 決定地圖中每個格子的元素
//ctx - HTML5 Canvas用
//currentImgMainX, currentImgMainY - 決定主角所在座標
//imgMountain, imgMain, imgEnemy - 障礙物, 主角, 敵人的圖片物件
const gridLength = 70;
var total = 0, score = 0;
var Timer;
$(function(){
    
    mapArray = [ //0-可走,1-tree,2-終點,3-敵人,4-rock,5-items,6-moving,7-guarded,8&9-enemy-on
    [2,1,4,5,1,1,5,0,0,5],
    [0,0,0,5,0,0,0,0,0,0],
    [7,4,0,0,1,1,4,5,1,0],
    [7,0,0,5,4,5,0,6,0,1],
    [4,5,0,0,5,1,0,7,0,0],
    [6,1,0,5,4,5,1,4,1,5],
    [7,5,1,0,0,0,4,0,0,0],
    [0,7,7,5,0,0,1,0,0,0],
    [0,4,1,0,1,0,4,0,7,1],
    [0,0,0,0,5,1,0,0,6,2],
    ];
    ctx = $("#myCanvas")[0].getContext("2d");
    imgMain = new Image();
    imgMain.src = "images/game/main.png";
    currentImgMain = {
    "x":0,
    "y":0
    };
    imgMain.onload = function(){
        ctx.drawImage(imgMain, 0,0,86.75,86.75,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
    }
    imgMountain = new Image();
    imgMountain.src = "images/game/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "images/game/Enemy.png";
    imgMountain.onload = function(){
    imgEnemy.onload = function(){
    for(var x in mapArray){
        for(var y in mapArray[x]){
            if(mapArray[x][y]==0){
                var rand = parseInt(Math.random()*50);
                let points = [
                    [96,160],
                    [128,160],
                    [192,160],
                    [224,160],
                    [256,160],
                    [192,192]
                ];
                if(!(rand >= points.length)){
                    total++;
                    ctx.drawImage(imgMountain,points[rand][0],points[rand][1],32,32,y*gridLength,x*gridLength,gridLength,gridLength);
                    mapArray[x][y] = 5;
                }
            }else if(mapArray[x][y]==1){
                let points = [
                    [256,192],
                    [288,192]
                ];
                var rand = parseInt(Math.random()*points.length);
                ctx.drawImage(imgMountain,points[rand][0],points[rand][1],32,32,y*gridLength,x*gridLength,gridLength,gridLength);
            }else if(mapArray[x][y]==2){
                let points = [
                    [288,0]
                ];
                var rand = parseInt(Math.random()*points.length);
                ctx.drawImage(imgMountain,points[rand][0],points[rand][1],32,32,y*gridLength,x*gridLength,gridLength,gridLength);
            }else if(mapArray[x][y]==3){
               ctx.drawImage(imgEnemy, 7,40,104,135,y*gridLength,x*gridLength,gridLength,gridLength);
            }else if(mapArray[x][y]==4){
                let points = [
                    [352,192],
                    [320,192]
                ];
                var rand = parseInt(Math.random()*points.length);
                ctx.drawImage(imgMountain,points[rand][0],points[rand][1],32,32,y*gridLength,x*gridLength,gridLength,gridLength);
             }
             else if(mapArray[x][y]==5){
                 let points = [
                    [320,32],
                    [0,64],
                    [64,64],
                    [256,64],
                    [320,64],
                    [352,64],
                    [0,96],
                    [32,96],
                    [128,96],
                    [160,96],
                    [192,96],
                    [256,96],
                    [320,96],
                    [352,96],
                    [0,128],
                    [32,128],
                    [64,128],
                    [96,128],
                    [128,128],
                    [160,128],
                    [192,128],
                    [256,128]
                ];
                total++;
                var rand = parseInt(Math.random()*points.length);
                ctx.drawImage(imgMountain,points[rand][0],points[rand][1],32,32,y*gridLength,x*gridLength,gridLength,gridLength);
             }else if(mapArray[x][y]==7){
                total++;
             }   
        }
    }
    
    ctx.clearRect(currentImgMain.x, currentImgMain.y, gridLength, gridLength);
    ctx.drawImage(imgMain, 0,0,86.75,86.75,currentImgMain.x,currentImgMain.y,gridLength,gridLength);

    moving();
    $("#gameScore").html(`~ ~ Score: ${score}/${total} - - - - - - - - - - - Time: 0 ~ ~`);
} 
}
});

var playing = 0;
var sec = 0;
var pass = 0;
var die = 0;


    //處理使用者按下按鍵
$(document).on("keydown",function(event){
    let targetImg, targetBlock, cutImagePositionY;
    //cutImagePositionX - 決定主角臉朝向哪個方向
    targetImg = { //主角的目標座標
        "x":-1,
        "y":-1
    };
    targetBlock = { //主角的目標(對應2維陣列)
        "x":-1,
        "y":-1 
    };
    
    //避免鍵盤預設行為發生，如捲動/放大/換頁...
    //判斷使用者按下什麼並推算目標座標
    if(pass == 0 && die == 0){
    switch(event.code){
        case "ArrowLeft":
            event.preventDefault();
            if(playing == 0){
                Timer = window.setInterval(function(){
                    sec++;
                    $("#gameScore").html(`~ ~ Score: ${score}/${total} - - - - - - - - - - - Time: ${sec} ~ ~`);
                },1000);
                playing = 1;
            }
        targetImg.x = currentImgMain.x - gridLength;
        targetImg.y = currentImgMain.y;
        cutImagePositionY = 86.75;//臉朝左
        break;
        case "ArrowUp":
            event.preventDefault();
            if(playing == 0){
                Timer = window.setInterval(function(){
                    sec++;
                    $("#gameScore").html(`~ ~ Score: ${score}/${total} - - - - - - - - - - - Time: ${sec} ~ ~`);
                },1000);
                playing = 1;
            }
        targetImg.x = currentImgMain.x;
        targetImg.y = currentImgMain.y - gridLength;
        cutImagePositionY = 260.25;//臉朝上
        break;
        case "ArrowRight":
            event.preventDefault();
            if(playing == 0){
                Timer = window.setInterval(function(){
                    sec++;
                    $("#gameScore").html(`~ ~ Score: ${score}/${total} - - - - - - - - - - - Time: ${sec} ~ ~`);
                },1000);
                playing = 1;
            }
        targetImg.x = currentImgMain.x + gridLength;
        targetImg.y = currentImgMain.y;
        cutImagePositionY = 173.5;//臉朝右
        break;
        case "ArrowDown":
            event.preventDefault();
            if(playing == 0){
                Timer = window.setInterval(function(){
                    sec++;
                    $("#gameScore").html(`~ ~ Score: ${score}/${total} - - - - - - - - - - - Time: ${sec} ~ ~`);
                },1000);
                playing = 1;
            }
        targetImg.x = currentImgMain.x;
        targetImg.y = currentImgMain.y + gridLength;
        cutImagePositionY = 0;//臉朝下
        break;
        default://其他按鍵不處理
        return; }
        //確認目標位置不會超過地圖
    if(targetImg.x<=630 && targetImg.x>=0 && targetImg.y<=630 && targetImg.y>=0){
        targetBlock.x = targetImg.y / gridLength;
        targetBlock.y = targetImg.x / gridLength; 
    }
    else
    {
        targetBlock.x = -1;
        targetBlock.y = -1; 
        $("#popup").html(`Stop! There's no way to go forward`);
    }
    ctx.clearRect(currentImgMain.x, currentImgMain.y, gridLength, gridLength);
    if(targetBlock.x!=-1 && targetBlock.y!=-1){
        switch(mapArray[targetBlock.x][targetBlock.y]){
        case 0: // 一般道路(可移動) 
        currentImgMain.x = targetImg.x;
        currentImgMain.y = targetImg.y;
        break;
        case 1: // 有障礙物(不可移動) 
        $("#popup").html(`Stop! There's no way to go forward`);
        break;
        case 2: // 終點(可移動) 
        currentImgMain.x = targetImg.x;
        currentImgMain.y = targetImg.y;
        if(total == score){
            pass = 1;
            $("#game").html("Congratulations! You Succeeded!");
            $("#popup").html(' ');
            clearInterval(Timer);
        }else if(currentImgMain.x !=0 && currentImgMain.y !=0){
            $("#popup").html('Uh oh, Not yet...There must be something missing');
        }
        break;
        case 4: // rock
        $("#popup").html(`Stop! There's no way to go forward`);
        break;
        case 5: // items
        score++;
        if(total - score==0){
            $("#popup").html(`Great! You may now go to the exit at bottom right`);
        }else{
            $("#popup").html(`Great! ${total - score} more items to go.`);
        }
        
        
        currentImgMain.x = targetImg.x;
        currentImgMain.y = targetImg.y;
        mapArray[targetBlock.x][targetBlock.y] = 0;
        ctx.clearRect(currentImgMain.x, currentImgMain.y, gridLength, gridLength);
        break;
        case 6: // 一般道路, but enemy moving
        currentImgMain.x = targetImg.x;
        currentImgMain.y = targetImg.y;
        break;
        case 7: // items
        score++
        $("#popup").html(`Great! ${total - score} more items to go.`);
        currentImgMain.x = targetImg.x;
        currentImgMain.y = targetImg.y;
        mapArray[targetBlock.x][targetBlock.y] = 0;
        ctx.clearRect(currentImgMain.x, currentImgMain.y, gridLength, gridLength);
        break;
        case 8: 
        die = 1;
        $("#work4").html("Uh-Oh, You're Dead.  Be CAREFUL Next Time");
        break;
        case 9: 
        die = 1;
        $("#work4").html("Uh-Oh, You're Dead.  Be CAREFUL Next Time");
        break;
    }
    
        $("#popup").addClass("changed");
        setTimeout(function(){
        
        $("#popup").removeClass("changed");
        },1000); 
    }
    //清空主角原本所在的位置
    $("#gameScore").html(`~ ~ Score: ${score}/${total}   - - - - - - - - - - -  Time: ${sec} ~ ~ `);
    ctx.drawImage(imgMain, 0,cutImagePositionY,86.75,86.75,currentImgMain.x,currentImgMain.y,gridLength,gridLength);}
});


function moving(){

    let p1=[
        [0,3],
        [0,6],
        [1,7],
        [8,8],
        [7,3]
    ];
    let p2 = [
        [0,2],
        [0,5],
        [2,7],
        [8,9],
        [7,4]
    ];
    let guard = [
        [128,64],
        [160,64],
        [192,64]
    ];

    var count = new Array(p1.length).fill(0);
    var randSec;
    /* --------------------------Interval Section--------------------------- */
    randSec = parseInt(Math.random()*200 + 500);
    var intervalGame=window.setInterval(function(){
        var a = 0;
        if(count[a]%2 == 0){
            if(mapArray[p1[a][1]][p1[a][0]]!=9 && mapArray[p1[a][1]][p1[a][0]]!=6){
                mapArray[p1[a][1]][p1[a][0]] = 7;
            }else{
                mapArray[p1[a][1]][p1[a][0]] = 0;
            }
            ctx.clearRect(p1[a][0]*gridLength,p1[a][1]*gridLength, gridLength, gridLength);
            if(mapArray[p1[a][1]][p1[a][0]] == 7){
                ctx.drawImage(imgMountain,guard[a+2][0],guard[a+2][1],32,32,p1[a][0]*gridLength,p1[a][1]*gridLength,gridLength,gridLength);
            }
            ctx.drawImage(imgEnemy, 109,40,100,135,p2[a][0]*gridLength,p2[a][1]*gridLength,gridLength,gridLength);
            if(currentImgMain.x==p2[a][0]*gridLength&&currentImgMain.y==p2[a][1]*gridLength){
                die = 1;
                $("#work4").html("Uh-Oh, You're Dead.  Be CAREFUL Next Time");
            }
            if(mapArray[p2[a][1]][p2[a][0]]!=0 && mapArray[p2[a][1]][p2[a][0]]!=6){
                mapArray[p2[a][1]][p2[a][0]] = 8;
            }else{
                mapArray[p2[a][1]][p2[a][0]] = 9;
            }
        }else{
            if(mapArray[p2[a][1]][p2[a][0]]!=9 && mapArray[p2[a][1]][p2[a][0]]!=6){
                mapArray[p2[a][1]][p2[a][0]] = 7;
            }else{
                mapArray[p2[a][1]][p2[a][0]] = 0;
            }
            ctx.clearRect(p2[a][0]*gridLength,p2[a][1]*gridLength, gridLength, gridLength);
            if(mapArray[p2[a][1]][p2[a][0]] == 7){
                ctx.drawImage(imgMountain,guard[a][0],guard[a][1],32,32,p2[a][0]*gridLength,p2[a][1]*gridLength,gridLength,gridLength);
            }
            ctx.drawImage(imgEnemy, 109,40,100,135,p1[a][0]*gridLength,p1[a][1]*gridLength,gridLength,gridLength);
            if(currentImgMain.x==p1[a][0]*gridLength&&currentImgMain.y==p1[a][1]*gridLength){
                die = 1;
                $("#work4").html("Uh-Oh, You're Dead.  Be CAREFUL Next Time");
            }
            if(mapArray[p1[a][1]][p1[a][0]]!=0 && mapArray[p1[a][1]][p1[a][0]]!=6){
                mapArray[p1[a][1]][p1[a][0]] = 8;
            }else{
                mapArray[p1[a][1]][p1[a][0]] = 9;
            }
        }
        count[0]++;
    },randSec);

    randSec = parseInt(Math.random()*100 + 500);
    var intervalGame02=window.setInterval(function(){
        var a = 1;
        if(count[a]%2 == 0){
            if(mapArray[p1[a][1]][p1[a][0]]!=9 && mapArray[p1[a][1]][p1[a][0]]!=6){
                mapArray[p1[a][1]][p1[a][0]] = 7;
            }else{
                mapArray[p1[a][1]][p1[a][0]] = 0;
            }
            ctx.clearRect(p1[a][0]*gridLength,p1[a][1]*gridLength, gridLength, gridLength);
            if(mapArray[p1[a][1]][p1[a][0]] == 7){
                ctx.drawImage(imgMountain,guard[a][0],guard[a][1],32,32,p1[a][0]*gridLength,p1[a][1]*gridLength,gridLength,gridLength);
            }
            ctx.drawImage(imgEnemy, 7,40,104,135,p2[a][0]*gridLength,p2[a][1]*gridLength,gridLength,gridLength);
            if(currentImgMain.x==p2[a][0]*gridLength&&currentImgMain.y==p2[a][1]*gridLength){
                die = 1;
                $("#work4").html("Uh-Oh, You're Dead.  Be CAREFUL Next Time");
            }
            if(mapArray[p2[a][1]][p2[a][0]]!=0 && mapArray[p2[a][1]][p2[a][0]]!=6){
                mapArray[p2[a][1]][p2[a][0]] = 8;
            }else{
                mapArray[p2[a][1]][p2[a][0]] = 9;
            }
        }else{
            if(mapArray[p2[a][1]][p2[a][0]]!=9 && mapArray[p2[a][1]][p2[a][0]]!=6){
                mapArray[p2[a][1]][p2[a][0]] = 7;
            }else{
                mapArray[p2[a][1]][p2[a][0]] = 0;
            }
            ctx.clearRect(p2[a][0]*gridLength,p2[a][1]*gridLength, gridLength, gridLength);
            if(mapArray[p2[a][1]][p2[a][0]] == 7){
                ctx.drawImage(imgMountain,guard[a-1][0],guard[a-1][1],32,32,p2[a][0]*gridLength,p2[a][1]*gridLength,gridLength,gridLength);
            }
            ctx.drawImage(imgEnemy, 7,40,104,135,p1[a][0]*gridLength,p1[a][1]*gridLength,gridLength,gridLength);
            if(currentImgMain.x==p1[a][0]*gridLength&&currentImgMain.y==p1[a][1]*gridLength){
                die = 1;
                $("#work4").html("Uh-Oh, You're Dead.  Be CAREFUL Next Time");
            }
            if(mapArray[p1[a][1]][p1[a][0]]!=0 && mapArray[p1[a][1]][p1[a][0]]!=6){
                mapArray[p1[a][1]][p1[a][0]] = 8;
            }else{
                mapArray[p1[a][1]][p1[a][0]] = 9;
            }
        }
        count[a]++;
    },randSec);

    randSec = parseInt(Math.random()*100 + 500);
    var intervalGame03=window.setInterval(function(){
        var a = 2;
        if(count[a]%2 == 0){
            if(mapArray[p1[a][1]][p1[a][0]]!=9 && mapArray[p1[a][1]][p1[a][0]]!=6){
                mapArray[p1[a][1]][p1[a][0]] = 7;
            }else{
                mapArray[p1[a][1]][p1[a][0]] = 0;
            }
            ctx.clearRect(p1[a][0]*gridLength,p1[a][1]*gridLength, gridLength, gridLength);
            if(mapArray[p1[a][1]][p1[a][0]] == 7){
                ctx.drawImage(imgMountain,guard[a][0],guard[a][1],32,32,p1[a][0]*gridLength,p1[a][1]*gridLength,gridLength,gridLength);
            }
            ctx.drawImage(imgEnemy, 274,55,83,120,p2[a][0]*gridLength,p2[a][1]*gridLength,gridLength,gridLength);
            if(currentImgMain.x==p2[a][0]*gridLength&&currentImgMain.y==p2[a][1]*gridLength){
                die = 1;
                $("#work4").html("Uh-Oh, You're Dead.  Be CAREFUL Next Time");
            }
            if(mapArray[p2[a][1]][p2[a][0]]!=0 && mapArray[p2[a][1]][p2[a][0]]!=6){
                mapArray[p2[a][1]][p2[a][0]] = 8;
            }else{
                mapArray[p2[a][1]][p2[a][0]] = 9;
            }
        }else{
            if(mapArray[p2[a][1]][p2[a][0]]!=9 && mapArray[p2[a][1]][p2[a][0]]!=6){
                mapArray[p2[a][1]][p2[a][0]] = 7;
            }else{
                mapArray[p2[a][1]][p2[a][0]] = 0;
            }
            ctx.clearRect(p2[a][0]*gridLength,p2[a][1]*gridLength, gridLength, gridLength);
            if(mapArray[p2[a][1]][p2[a][0]] == 7){
                ctx.drawImage(imgMountain,guard[a-1][0],guard[a-1][1],32,32,p2[a][0]*gridLength,p2[a][1]*gridLength,gridLength,gridLength);
            }
            ctx.drawImage(imgEnemy, 274,55,83,120,p1[a][0]*gridLength,p1[a][1]*gridLength,gridLength,gridLength);
            if(currentImgMain.x==p1[a][0]*gridLength&&currentImgMain.y==p1[a][1]*gridLength){
                die = 1;
                $("#work4").html("Uh-Oh, You're Dead.  Be CAREFUL Next Time");
            }
            if(mapArray[p1[a][1]][p1[a][0]]!=0 && mapArray[p1[a][1]][p1[a][0]]!=6){
                mapArray[p1[a][1]][p1[a][0]] = 8;
            }else{
                mapArray[p1[a][1]][p1[a][0]] = 9;
            }
        }
        count[a]++;
    },randSec);
    randSec = parseInt(Math.random()*100 + 500);
    var intervalGame04=window.setInterval(function(){
        var a = 3;
        if(count[a]%2 == 0){
            if(mapArray[p1[a][1]][p1[a][0]]!=9 && mapArray[p1[a][1]][p1[a][0]]!=6){
                mapArray[p1[a][1]][p1[a][0]] = 7;
            }else{
                mapArray[p1[a][1]][p1[a][0]] = 0;
            }
            ctx.clearRect(p1[a][0]*gridLength,p1[a][1]*gridLength, gridLength, gridLength);
            if(mapArray[p1[a][1]][p1[a][0]] == 7){
                ctx.drawImage(imgMountain,guard[a-1][0],guard[a-1][1],32,32,p1[a][0]*gridLength,p1[a][1]*gridLength,gridLength,gridLength);
            }
            ctx.drawImage(imgEnemy, 109,40,100,135,p2[a][0]*gridLength,p2[a][1]*gridLength,gridLength,gridLength);
            if(currentImgMain.x==p2[a][0]*gridLength&&currentImgMain.y==p2[a][1]*gridLength){
                die = 1;
                $("#work4").html("Uh-Oh, You're Dead.  Be CAREFUL Next Time");
            }
            if(mapArray[p2[a][1]][p2[a][0]]!=0 && mapArray[p2[a][1]][p2[a][0]]!=6){
                mapArray[p2[a][1]][p2[a][0]] = 8;
            }else{
                mapArray[p2[a][1]][p2[a][0]] = 9;
            }
        }else{
            if(mapArray[p2[a][1]][p2[a][0]]!=9 && mapArray[p2[a][1]][p2[a][0]]!=6){
                mapArray[p2[a][1]][p2[a][0]] = 7;
            }else{
                mapArray[p2[a][1]][p2[a][0]] = 0;
            }
            ctx.clearRect(p2[a][0]*gridLength,p2[a][1]*gridLength, gridLength, gridLength);
            if(mapArray[p2[a][1]][p2[a][0]] == 7){
                ctx.drawImage(imgMountain,guard[a-1][0],guard[a-1][1],32,32,p2[a][0]*gridLength,p2[a][1]*gridLength,gridLength,gridLength);
            }
            ctx.drawImage(imgEnemy, 109,40,100,135,p1[a][0]*gridLength,p1[a][1]*gridLength,gridLength,gridLength);
            if(currentImgMain.x==p1[a][0]*gridLength&&currentImgMain.y==p1[a][1]*gridLength){
                die = 1;
                $("#work4").html("Uh-Oh, You're Dead.  Be CAREFUL Next Time");
            }
            if(mapArray[p1[a][1]][p1[a][0]]!=0 && mapArray[p1[a][1]][p1[a][0]]!=6){
                mapArray[p1[a][1]][p1[a][0]] = 8;
            }else{
                mapArray[p1[a][1]][p1[a][0]] = 9;
            }
        }
        count[a]++;
    },randSec);
    randSec = parseInt(Math.random()*100 + 500);
    var intervalGame04=window.setInterval(function(){
        var a = 4;
        if(count[a]%2 == 0){
            if(mapArray[p1[a][1]][p1[a][0]]!=9 && mapArray[p1[a][1]][p1[a][0]]!=6){
                mapArray[p1[a][1]][p1[a][0]] = 7;
            }else{
                mapArray[p1[a][1]][p1[a][0]] = 0;
            }
            ctx.clearRect(p1[a][0]*gridLength,p1[a][1]*gridLength, gridLength, gridLength);
            if(mapArray[p1[a][1]][p1[a][0]] == 7){
                ctx.drawImage(imgMountain,guard[a-4][0],guard[a-4][1],32,32,p1[a][0]*gridLength,p1[a][1]*gridLength,gridLength,gridLength);
            }
            ctx.drawImage(imgEnemy, 7,40,104,135,p2[a][0]*gridLength,p2[a][1]*gridLength,gridLength,gridLength);
            if(currentImgMain.x==p2[a][0]*gridLength&&currentImgMain.y==p2[a][1]*gridLength){
                $("#work4").html("Uh-Oh, You're Dead.  Be CAREFUL Next Time");
            }
            if(mapArray[p2[a][1]][p2[a][0]]!=0 && mapArray[p2[a][1]][p2[a][0]]!=6){
                mapArray[p2[a][1]][p2[a][0]] = 8;
            }else{
                mapArray[p2[a][1]][p2[a][0]] = 9;
            }
        }else{
            if(mapArray[p2[a][1]][p2[a][0]]!=9 && mapArray[p2[a][1]][p2[a][0]]!=6){
                mapArray[p2[a][1]][p2[a][0]] = 7;
            }else{
                mapArray[p2[a][1]][p2[a][0]] = 0;
            }
            ctx.clearRect(p2[a][0]*gridLength,p2[a][1]*gridLength, gridLength, gridLength);
            if(mapArray[p2[a][1]][p2[a][0]] == 7){
                ctx.drawImage(imgMountain,guard[a-4][0],guard[a-4][1],32,32,p2[a][0]*gridLength,p2[a][1]*gridLength,gridLength,gridLength);
            }
            ctx.drawImage(imgEnemy, 7,40,104,135,p1[a][0]*gridLength,p1[a][1]*gridLength,gridLength,gridLength);
            if(currentImgMain.x==p1[a][0]*gridLength&&currentImgMain.y==p1[a][1]*gridLength){
                die = 1;
                $("#work4").html("Uh-Oh, You're Dead.  Be CAREFUL Next Time");
            }
            if(mapArray[p1[a][1]][p1[a][0]]!=0 && mapArray[p1[a][1]][p1[a][0]]!=6){
                mapArray[p1[a][1]][p1[a][0]] = 8;
            }else{
                mapArray[p1[a][1]][p1[a][0]] = 9;
            }
        }
        count[a]++;
    },randSec);
    /* ------------------------End of Interval Section------------------------ */
}