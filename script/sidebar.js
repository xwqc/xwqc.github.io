			window.onload = function() {
				var div = document.getElementById("sidebar");
				var button = document.getElementById("expandButton");
				if (div.clientHeight > (window.innerHeight * 0.75)) { 
					// 如果内容高度超过75vh，则显示按钮
					button.style.display = "block";
					div.style.height = window.innerHeight * 0.75;
				} else {
					button.style.display = "none";
					div.style.height = "auto";
				}
			};

			function expandDiv() {
				var div = document.getElementById("sidebar");
				var button = document.getElementById("expandButton");
				div.style.height = "auto";
				button.style.display = "none"; // 点击按钮后隐藏按钮
			}

