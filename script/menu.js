

var menuOptions;  // 声明menuOptions变量
var node;  // 声明node变量
function toggleMenu() {
	// var node = document.getElementsByClassName('nd-animation')[0];
	var node = document.querySelector('.nd-animation');
	menuOptions = document.querySelector('.menu-options');  
	if (node.classList.contains('is-open')) {
		node.classList.remove('is-open');
		// 关闭菜单选项
		menuOptions.style.display = 'none';
	} else {
		node.classList.add('is-open');
		// 打开菜单选项
		menuOptions.style.display = 'block';
	}
}

// 添加页面点击事件监听器
document.addEventListener('click', function(event) {
	var targetElement = event.target;  // 获取点击的元素
	var node = document.querySelector('.nd-animation');
	menuOptions = document.querySelector('.menu-options');  

	// 检查menuOptions是否存在
	if (menuOptions) {
		// 检查点击的元素是否是菜单选项框或其内部元素
		if (!menuOptions.contains(targetElement) && !node.contains(targetElement)) {
			// 如果不是菜单选项框以及其内部元素，关闭菜单
			node.classList.remove('is-open');
			menuOptions.style.display = 'none';
		}
	}
});


// 向上滑动隐藏导航栏
var originalY = window.scrollY;
var navBox = document.querySelector('nav');
var ndAnimation = document.querySelector('.nd-animation'); 

window.onscroll = function(){
	if (window.innerWidth <= 960) {
		var currentY = window.scrollY;
		var navBox = document.querySelector('nav');
		var ndAnimation = document.querySelector('.nd-animation');
		if (currentY - originalY >= 20 || currentY - originalY <= -20) {
			if (currentY > originalY && currentY !== 0) {
				navBox.classList.value = 'nav hidden';
				ndAnimation.style.opacity = '0'; // 隐藏 nd-animation
			} else {
				navBox.classList.value = 'nav';
				ndAnimation.style.opacity = '1'; // 显示 nd-animation
			}
			originalY = currentY;
			navBox.style.height = '60px'; // 恢复为原始高度
		} else if (currentY === 0) {
			navBox.style.height = '60px'; // 当滚动到顶部时，恢复导航栏的高度
			ndAnimation.style.opacity = '1'; // 当滚动到顶部时，显示 nd-animation
		}
	}
}


// /* 首先，定义页面顶部距离浏览器窗口顶部的原始距离 */
// var originalY = window.scrollY;
// /* 这里先缓存导航条的DOM节点，以便下一步操作 */
// var navBox = document.querySelector('nav');
// // 选择所有需要隐藏的图标元素
// var iconsToHide = document.querySelectorAll('.icon-to-hide'); 
// /* 接着，监听页面滚动事件 */
// window.onscroll = function(){
// 	// 仅在屏幕宽度小于等于960px时应用滚动隐藏导航栏的逻辑
// 	if (window.innerWidth <= 960) {
// 		var navBox = document.querySelector('nav');
// 		/* window.scrollY就是页面顶部距离浏览器窗口顶部的距离 */
// 		/* navBox.classList.value 就是你选定的DOM元素的类名*/
// 		var currentY = window.scrollY;
// 		if(currentY - originalY >=60 || currentY - originalY <= -60) {
// 			if(currentY > originalY && currentY !== 0){
// 				/* console.log('页面向上滑（即你的手指向上滑）'); */
// 				navBox.classList.value = 'nav hidden';
// 				hideIcons(iconsToHide); // 隐藏所有图标
// 			} else {
// 				/* console.log('页面向下滑（即你的手指向下滑）'); */
// 				navBox.classList.value = 'nav';
// 				showIcons(iconsToHide); // 显示所有图标
// 			}
// 			originalY = currentY;
// 			// 设置 nd-animation 的父容器 nav 的高度
// 			navBox.style.height = '60px'; // 恢复为原始高度
// 		}else if (currentY === 0) {
// 			// 当滚动到顶部时，恢复导航栏的高度
// 			navBox.style.height = '60px';
// 			showIcons(iconsToHide); // 当滚动到顶部时，显示所有图标
// 		}
// 	}
// }
// // 新增以下两个函数
// function hideIcons(icons) {
// 	icons.forEach(function(icon) {
// 		icon.style.opacity = '0';
// 	});
// }
// 
// function showIcons(icons) {
//     icons.forEach(function(icon) {
//         icon.style.opacity = '1';
//     });
// }
