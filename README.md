# 小项目集合
###### 作者：hauk0101

## 说明
cases目录中包含了本人所有的小项目，其中所有图片、声音等素材均来自互联网，如有侵犯您相关权益，请联系本人邮箱georeg.qiao.yao@gmail.com，本人会及时删除，谢谢。

## 项目目录
<table>
	<tr>
   		<th>项目序号</th>
		<th>项目目录</th>
        <th>项目名称</th>
        <th>项目技术点</th>
    </tr>
    <tr>
        <th>项目 1</th>
		 <th>turntable</th>
        <th>《抽奖转盘》</th>
        <th>jQuery+jQueryRotate</th>
    </tr>
    <tr>
        <th>项目 2</th>
		 <th>sanyalvyou</th>
        <th>《三亚旅游》</th>
        <th>swiper.js+animate.css+swiper.animate.js</th>
    </tr>
</table>    


## 项目简介
>项目1 turntable

### 项目名称：《抽奖转盘》
### 项目简介：
本项目主要实现了转盘抽奖活动，同时包括了中奖名单的实时更新。但根据具体的项目需求，本项目只实现了本地数据显示，没有与后端的数据交互。
### 项目技术：
本项目主要使用了jquery+jQueryRotate.2.2.js，其中jQueryRotate.2.2用于实现转盘效果。
### 项目总结：
* 本项目使我学会了jQueryRotate.2.2相关方法的调用。
* 搞清楚了html中ontouchstart(以及相关的ontouchmove、ontouchend)与touchstart(以及相关的touchmove、touchend)的区别，以及使用场景 。其中ontouchstart为document中针对移动端特有的触摸事件相关的函数表达式，使用方法为

		document.documentElement.ontouchstart = function(){
			//TO DO 
		}
	其中touchstart的为html针对移动端所特有的触摸事件名称，用于绑定相关触摸事件时，作为参数使用，其使用方法为
		
		document.addEventListener("touchstart",function(){
			//TO DO
		},false);

	_在本项目中，为了适应在不同环境下匹配不同的按钮点击/触屏效果，参考并使用了如下方法_
		
		 //根据document中支持的相关事件，确认需要侦听的事件类型，但需要注意eventName不能为ontouchstart
		 //即ontouchstart和touchstart不可混淆使用
		 //本例需引用jQuery相关脚本
		 var eventName = "ontouchstart" in document ? "touchend":"click";
		 TurnTableObject.btn_go.on(eventName,function(){
        	// TODO  
   		 });

* 本项目中，为了满足移动端的自适应，根据设计图使用了rem为单位的屏幕自适应解决方案，其中相关代码如下：
		
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

	
	其中根据设计图的大小，在css文件中设置对应的元素布局，例如如果设计图宽为640px，则setFontsize(designSize)中designSize的值为640，如果设计图中有元素宽度为100px,则在css中可设置其width值为1rem.
	
	_以上所述的屏幕自适应解决方案，主要参考了网易公司相关的布局方案，具体说明，参考此文章。[点击此处打开链接](http://www.codeceo.com/article/font-size-web-design.html)_


>项目2  sanyalvyou

### 项目名称：《三亚旅游》推广案例
### 项目简介：
本项目是为了一个旅游项目的营销推广活动而制作的适用于微信推广的Html5活动页面。
### 项目技术：
本项目主要使用了swiper.js、animate.css、以及swiper针对animate.css所整合的swiper.animate.js实现了页面滑动、页面元素的动画效果等。
### 项目总结：
* 本项目中本人能熟练使用swiper.js操作页面的滑动效果。
* 本项目中本人能配合animate.css以及swiper.animate.js使swiper页面中的元素动画效果更完美的匹配。
* 本项目中本人根据animte.css的效果，实现了页面中animate.css中没有的流星反复流动的效果。也使本人能够根据实际需求书写css动画效果。

_本人做过很多类似的swiper的项目，本项目特殊之处在于有自定义的css动画效果，以及整体项目效果还算不错，所以会提出来，作为案例参考。_