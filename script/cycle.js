var banners = ["images/extra/20240330.png", "images/extra/Fs_2024_MA.jpg", "images/extra/mathposter.png"]; 
var item = document.getElementById("banner")
var wrap = document.querySelector('.img-container');
var btn = document.querySelectorAll('.cyc-btn'); // cyc-btn按钮组
var pre = document.querySelector('.prev'); // 上一个按钮
var next = document.querySelector('.next'); // 下一个按钮

var opa = 1; //通过控制透明度opacity来实现图片的渐隐渐现的效果
var time1, time2;
var index = 0; //记录图片的下标

// 切换下一张图片效果实现
function nextImg() {
	if (time1) {
		clearInterval(time1);
	}
	//用计时器实现渐变消失效果
	time1 = setInterval(function () {
		opa -= 0.1;
		// 满足条件，证明当前的图片已经看不见，下一张图片就开始出现
		if (opa <= 0) {
			clearInterval(time1);
			opa = 0;//以防万一，再给它赋值为0；这样透明度就为0
			index++;//下一张图片的索引就是index++; 
			index = index % banners.length;
			fadeIn();//上一张图片消失，这张图片就要显示，执行此函数
		}
		item.style.opacity = opa;//当前的图片的透明度随着opa的减少减少
		item.src = banners[index];

		// btn按钮组样式重置
		for (var i = 0; i < btn.length; i++) {
			btn[i].style.backgroundColor = 'skyblue';
		}
		// 当前图片的点样式高亮
		btn[index].style.backgroundColor = 'orange';
	}, 16.7)
}

// 控制图片的出现
function fadeIn() {
	time2 = setInterval(function () {
		opa += 0.1;
		if (opa >= 1) {
			clearInterval(time2);
			opa = 1;
		}
		//item.src = banners[index];
		item.style.opacity = opa;//这里的index就是上张图片的index++;
	}, 16.7)
}

// 控制图片的自动播放
var autoPlay = setInterval(nextImg, 3000); //默认计时器打开

//鼠标进入清除计时器，停止播放
wrap.onmouseenter = function () {
	clearInterval(autoPlay);
}

//鼠标离开继续执行计时器
wrap.onmouseleave = function () {
	autoPlay = setInterval(nextImg, 3000);
}

// 切换下一张图片效果实现
next.onclick = function () {
	nextImg();
}

// 切换上一张图片效果实现
pre.onclick = function () {
	if (time1) {
		clearInterval(time1);
	}
	time1 = setInterval(function () {
		// 控制当前图片消失
		opa -= 0.1;
		if (opa <= 0) {
			clearInterval(time1);
			opa = 0;
			index--; //上张图片的index
			if (index < 0) { //如果索引值小与0，那就从图片的最后一个重新开始
				index = banners.length - 1;
			}
			fadeIn(); //此时显示的就是上张图片
		}
		item.style.opacity = opa;
		item.src = banners[index];

		// btn按钮组样式重置
		for (var i = 0; i < btn.length; i++) {
			btn[i].style.backgroundColor = 'skyblue';
		}
		btn[index].style.backgroundColor = 'orange';
	}, 16.7)
}

// 通过点击点来控制图片的切换
for (var i = 0; i < btn.length; i++) {
	btn[i].index = i;
	btn[i].onclick = function () {
		// 切换下一张图片
		// 提前存储this
		var that = this;
		console.log(this.index, index);
		if (time1) {
			clearInterval(time1)
		}
		time1 = setInterval(function () {
			opa -= 0.1;
			if (opa <= 0) {
				clearInterval(time1);
				opa = 0;
				index = that.index;
				fadeIn();
			}
			item.src = banners[index];
			item.style.opacity = opa;
			// 对记录图片的点的样式进行重置
			for (var j = 0; j < btn.length; j++) {
				btn[j].style.backgroundColor = 'skyblue';
			}
			btn[index].style.backgroundColor = 'orange';
		}, 16.7)
	}
}
