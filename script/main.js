// 添加事件函数，酷炫的做好了兼容和重写以提升性能
function addEvent(obj, type, fn) {
	if (obj.attachEvent) {
		obj.attachEvent(type, fn);
		addEvent = function(obj, type, fn) {
			obj.attachEvent(fn);
		}
	} else {
		addEvent = function(obj, type, fn) {
			obj.addEventListener(type, fn);
		}
		obj.addEventListener(type, fn)
	}
}
// 点击开始，则更换下面的图片并开始计时
var start = document.getElementsByClassName('start-button')[0];
addEvent(start,'click',function(){
	changeView();
	startCount();
})



// 更换下面的场景
function changeView(){
	document.getElementsByClassName('main')[0].style.display="none";
	document.getElementsByClassName('kanjia')[0].style.display="block";
}

// 开始计时
function startCount(){
	var countHtml = document.getElementsByClassName('count')[0];
	var countNum = 10;
	countHtml.innerHTML = countNum--;
	setInterval(function(){
		if(countNum === 0){
			window.location.href='help-over.html';
		}
		countHtml.innerHTML = countNum--;
	},1000);

}

// 砍价按钮点击次数
var clickTime = 0;
// 添加点击事件
var kanjiaButton = document.getElementsByClassName('kanjia-button')[0];
addEvent(kanjiaButton,'click',function(){
	// 点击次数增加
	clickTime++;
	randomMoney(clickTime);
})
// 按钮按下效果
addEvent(kanjiaButton,'touchstart',function(event){
	console.log(event.target.src);
	event.target.src='img/kanjia-button-clicked.png';
})
addEvent(kanjiaButton,'touchend',function(event){
	console.log(event.target.src);
	event.target.src='img/kanjia-button.png';
})

// 产生随机的钱数
function randomMoney(time){
	var moneyNum = -Math.floor(Math.random()*50).toString();
	var node=document.createTextNode(moneyNum);
	var money = document.createElement('div');
	money.appendChild(node);

	document.getElementsByClassName('kanjia-button')[0].appendChild(money);
	setPath(money);
}

// 为随机数创建动画
function setPath(obj){
	obj.setAttribute('class','randomMoney');
	var ranHeng = Math.floor(Math.random()*18-6);
	var ranShu = Math.floor(Math.random()*18-6);
	// 定到了按钮上
	if(ranShu>0 && ranShu <9 &&ranHeng>0 && ranHeng<9){
		ranHeng > 4.5?ranHeng-=4.5:ranHeng+=4.5;
		ranShu > 4.5?ranShu-=4.5:ranShu+=4.5;
	}
	console.log(ranHeng,ranShu);
	obj.style.left=ranHeng+'rem';
	obj.style.top=ranShu+'rem';
}





