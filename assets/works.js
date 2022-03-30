/* - - - - - - - - - - - Start of Dinner Selector Code - - - - - - - - - - - */
var interval = null;
var all;
var count = 0;
var chosen = 0;
function create(){
    all = $("#optInput").val();
    var code = "";
    all = all.split('\n');
    if(all.length > 2 && all[all.length - 1] != ''){
        for(var i = 0; i<all.length; i++){
            code += "<div class='oneOpt' id='opt-"+i+"'>"+all[i]+"</div>";
        }
        $("#errorM").html('');

        $("#2ndTitle").addClass("changed");
        $("#optionArea").addClass("changed");
        setTimeout(function(){
        $("#2ndTitle").removeClass("changed");
        $("#optionArea").removeClass("changed");
        },1000);

        $("#2ndTitle").html("你可以選擇繼續新增，或是開始決定");
        $("#optionArea").html(code);
        $("#btnArea").html('<input type="button" value="繼續新增" style="margin-right:60px;" onclick="back()"/>'+
        '<input type="button" value="開始決定" onclick="start()"/>')
    }else{
        $("#errorM").addClass("changed");
        setTimeout(function(){
        $("#errorM").removeClass("changed");
        },1000);

        $("#errorM").html(" - - - - 請至少輸入三個選項，並將多餘的換行刪除 - - - - ");
    }
}
function start(){

    $("#2ndTitle").addClass("changed");
        setTimeout(function(){
        $("#2ndTitle").removeClass("changed");
        },1000);

    $("#result").css("margin","0px 0");
    $("#result").html("<br>");
    $("#2ndTitle").html("請稍後，正在慎重的幫您決定.... ..");
    interval = window.setInterval("choose()",50);
}
function choose(){
    // console.log(length);
    if(count == 60){
        
        $("#opt-"+chosen).css("background-color","#909497");
        chosen = parseInt(Math.random() * all.length);
        $("#opt-"+chosen).css("background-color","#F1948A");
        $("#result").css("margin","50px 0");

        $("#result").addClass("changed");
        $("#2ndTitle").addClass("changed");
        setTimeout(function(){
        $("#result").removeClass("changed");
        $("#2ndTitle").removeClass("changed");
        },1000);

        $("#result").html("今晚，吃點「"+all[chosen]+"」吧！");
        clearInterval(interval);
        $("#2ndTitle").html("你可以選擇繼續新增，或是開始決定");
        count = 0;
    }else{
        $("#opt-"+chosen).css("background-color","#909497");
        chosen = parseInt(Math.random() * all.length);
        $("#opt-"+chosen).css("background-color","#F1948A");
        count++;
    }
}
function clearBox(){
    $("#optInput").html("");
}
function back(){
    clearInterval(interval);
    $("#result").css("margin","0px 0");
    $("#result").html("<br>");
    $("#2ndTitle").addClass("changed");
        $("#optionArea").addClass("changed");
        setTimeout(function(){
        $("#2ndTitle").removeClass("changed");
        $("#optionArea").removeClass("changed");
        },1000);
    $("#2ndTitle").html("隨機決定今天晚餐！首先，請先自訂選項～（用換行分隔）至少三個選項才能開始喔！");
    $("#optionArea").html('<textarea id="optInput" style="border-radius: 20px; width: 100%; height: 500px; padding: 30px; border: 2px solid black;">');
    var words = "";
    for(var i = 0; i<all.length; i++){
        if(i != 0){
            words += "&#10";
        }
        words += " " + all[i] + " ";
    }
    $("#optInput").html(words);
    $("#btnArea").html('<input type="button" value="清除選項" style="margin-right:60px;" onclick="clearBox()"/>'+
    '<input type="button" value="確認送出" onclick="create()"/>')
}
/* - - - - - - - - - - - End of Dinner Selector Code - - - - - - - - - - - */


/* - - - - - - - - - - - Start of YouTube Song Selector Code - - - - - - - - - - - */
var playList = [
    "64cjM6VL-OI",
    "entVpj_IT6M",
    "5UMCrq-bBCg",
    "dQw4w9WgXcQ",
    "g5T2tu3Yky4",
    "djV11Xbc914",
    "JTOisjU8Yb0",
    "ZmDBbnmKpqQ",
    "dQw4w9WgXcQ",
    "aPnqx56V8-0",
    "c_10qS7amjk",
    "7aFGaSdTJGU",
    "dQw4w9WgXcQ"
];
var playTime = [
    [0,48],
    [52,88],
    [73,170],
    [0,35],
    [29,100],
    [20,76],
    [60,91],
    [58,90],
    [35,59],
    [188,290],
    [27,88],
    [30,94],
    [136,178]
];
var player = null;
var currentPlay = 0;
function playV(){
    $("#VidArea").css("height",$("#VidArea").width() / 16 * 9 + "px");
    $("#VTitle").addClass("changed");
    $("#VidArea").addClass("changed");
    setTimeout(function(){
        $("#VTitle").removeClass("changed");
        $("#VidArea").removeClass("changed");
    },1000);
    if(player == null){
        player = new YT.Player("player",{
            videoId:playList[currentPlay],
            playerVars:{
            autoplay:1, //是否自動撥放
            controls:0, //是否顯示控制項
            start:playTime[currentPlay][0],//開始秒數
            end:playTime[currentPlay][1],//結束秒數
            iv_load_policy:3
            },
            events:{
                onReady:onPlayerReady,
                onStateChange:onPlayerReady
            }
        });
        document.getElementById("playBtn").setAttribute("value","換下一首");
    }else
    {
        if(currentPlay<playList.length-1)
        {
            currentPlay++;
        }
        else
        {
            currentPlay=0;
        }
        player.loadVideoById({
            videoId:playList[currentPlay],
            startSeconds:playTime[currentPlay][0],
            endSeconds:playTime[currentPlay][1],
            suggestedQuality:"hd720",
        });
    }
}
function onPlayerReady(){
    if(Math.floor(player.getCurrentTime())==playTime[currentPlay][1]){
        if(currentPlay<playList.length-1)
        {
            currentPlay++;
        }
        else
        {
            currentPlay=0;
        }
        player.loadVideoById({
            videoId:playList[currentPlay],
            startSeconds:playTime[currentPlay][0],
            endSeconds:playTime[currentPlay][1],
            suggestedQuality:"hd720",
        });
    }
    $("#VTitle").html(player.getVideoData().title);
}
/* - - - - - - - - - - - End of YouTube Song Selector Code - - - - - - - - - - - */


/* - - - - - - - - - - - Start of Redirecting Page js - - - - - - - - - - - */
function changeURL(str){
    $("#contentT").html('<h2>即將將您導向至其他網域...</h2><p id="2ndTitle"><br>此網站用到SQL、PHP，所以需要個人伺服器<br>'+
    '伺服器架在元智宿舍，需VPN或用校內網路才能連上<br>如果無法連線，可能電腦被關機了QQ。請過一陣子再重試<br></p>');
    document.getElementById("URL").setAttribute("onclick","location='"+str+"'");
    document.getElementById("URL").setAttribute("value","了解，帶我前往");
}
/* - - - - - - - - - - - End of Redirecting Page js - - - - - - - - - - - */