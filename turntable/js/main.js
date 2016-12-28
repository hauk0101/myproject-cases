/**
 * 抽奖转盘(单机版)
 * Created by YaoQiao on 2016/11/30.
 */

//转盘页面对象集合
var TurnTableObject = null;
/**
 * 页面加载完成事件，程序入口
 */
$(document).ready(function(){
    //计算并设置页面的font-sizeֵ
    setFontsize(750);
    //初始化数据
    initFunc();
});
/**
 * 数据初始化
 */
function initFunc(){
    /**
     *  转盘为8份，对应7种中奖类型，每份对应转盘45°
     *  中奖描述分别为：
     *      “只差一步”、“1积分”，“2积分”，“5积分”，“10积分”，“爱奇艺vip”,“iPhone7手机”
     */
    TurnTableObject = {
        angle:[0,-45,-225,-90,-135,-315,180],
        awardsTips:["只差一步","1积分","2积分","5积分","10积分","爱奇艺vip","iPhone7手机"],
        btn_go:$(".btn-go"),
        turn_circle:$(".turntable-circle img"),
        isRotating:false
    }

    var eventName = "ontouchstart" in document ? "touchend":"click";
    TurnTableObject.btn_go.on(eventName,function(){
        // TODO  检查是否有id
        // TODO  获得服务器返回数据
        //开始旋转
        if(!TurnTableObject.isRotating){
            //随机奖项 1-7
            var award = Math.floor(Math.random() * TurnTableObject.awardsTips.length);
            //随机圈数 5-10
            var total = Math.floor(Math.random() * 5 + 5);
            //随机旋转时间 2-5s
            var time = Math.floor(Math.random() * 3 + 2);
            //启动抽奖
            rotateCircle(time,total,award);
            TurnTableObject.isRotating = !TurnTableObject.isRotating;
        }
    });

    //显示中奖记录
    showRecondText();
}

/**
 * 显示中奖记录
 */
function showRecondText(){
    var area = document.getElementById("scrollArea");
    var timer = null;
    var delay = 1000;
    var oLiHeight = $("#scrollArea p").height();
    var areaHeight = $("#scrollArea").height();
    var speed = 20;
    area.scrollTop = 0;
    area.innerHTML += area.innerHTML;
    function scrollUp(){

        if(area.scrollTop % oLiHeight == 0){
            clearInterval(timer);
            setTimeout(startScroll,delay);
        }else{

            area.scrollTop ++;
            if(area.scrollTop >= area.scrollHeight / 2){
                area.scrollTop = 0;
            }
        }
    }
    function startScroll(){
        timer = setInterval(scrollUp,speed);
        area.scrollTop++;
    }
    setTimeout(startScroll,delay);

}

/**
 * 抽奖转盘
 * @param rotateTime  转盘旋转时间
 * @param rotateTotal 转盘旋转圈数
 */
function rotateCircle(rotateTime,rotateTotal,award){
    var circle =  TurnTableObject.turn_circle;
    //当奖项超出1-7的范围时，默认为获奖无效
    var _award = (1 <= award && award <= 7) ? award : 1;
    var angle = TurnTableObject.angle[_award - 1];
    //因为四等奖的角度有两份，所以随机四等奖的角度
    if(_award == 4){
        var _angle = [TurnTableObject.angle[3],TurnTableObject.angle[3] + 180];
        angle = _angle[Math.floor(Math.random()*_angle.length)];
    }
    circle.stopRotate();
    circle.rotate({
        angle:0,
        duration:1000 * rotateTime,
        animateTo:angle + rotateTotal * 360,
        callback:function(){
            showAwardsTips(award);
            console.log(award + "等奖--",angle + "°--",  TurnTableObject.awardsTips[_award - 1]);
        }
    });
}

/**
 * 显示中奖提示
 * @param award
 */
function showAwardsTips(award){
    var _award = (1 <= award && award <= 7) ? award : 1;
    var message = TurnTableObject.awardsTips[_award - 1];
    if(_award != 1){
        message = "恭喜获得 " + message + " !"
    }
    alert(message);
    TurnTableObject.isRotating = !TurnTableObject.isRotating;
}


/**
 * 计算并设置网页的font-size数值
 * @param designSize 设计图的竖屏宽度
 */
function setFontsize(designSize){
    if(!designSize) designSize = 640;
    //初次设置font-size
    var deviceWidth = document.documentElement.clientWidth;
    if(deviceWidth > designSize)    deviceWidth = designSize;
    document.documentElement.style.fontSize = deviceWidth / (designSize / 100) + 'px';
    //监听浏览器窗口大小变化，更新font-size
    $(window).resize(function(){
        var deviceWidth = document.documentElement.clientWidth;
        if(deviceWidth > designSize)    deviceWidth = designSize;
        document.documentElement.style.fontSize = deviceWidth / (designSize / 100) + 'px';
    });
}
