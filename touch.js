window.onload = function() {
	var oSelect = document.getElementById('select');
	var oPhoto = document.getElementById('photo_list');
	var oRemove = document.getElementById('remove');
	var aSingle = oPhoto.getElementsByTagName('li');

	(function init (){
		createPhotos ()
		toPosition();
		removePhotos();
	})();

	//生成图片
	function createPhotos (){
		var photoList = [];
		var photoHtml = '';
		for (var i = 1; i <= 16; i++){
			photoList.push("./video/"+ i +".jpg");
		}
		for (var i = 0; i < photoList.length; i++){
			photoHtml += "<li style='background-image:url("+ photoList[i]+")'></li>";
		}
		oPhoto.innerHTML = photoHtml;
		
	};

	//删除照片
	function removePhotos(){
		
		var arr = [];
		oSelect.addEventListener('click', fnSelected, false);
		function fnSelected (){
			if(this.innerHTML == '取消'){
				this.innerHTML = '选择';
				for(var i = 0; i < aSingle.length; i++){
					aSingle[i].onclick = null;
					aSingle[i].style.opacity = '1';
				}
				arr = [];
				oRemove.style.display = 'none';
			}
			else{
				this.innerHTML = '取消';
				oRemove.style.display = 'block';
				for(var i = 0; i < aSingle.length; i++){
					aSingle[i].index = i;
					aSingle[i].onclick = function (){
						this.style.opacity = '0.2';
						arr.push(this.index);
					}
				}
			}
		}
		
		oRemove.addEventListener('click', fnRemove, false);
		function fnRemove(){
			arr.sort(function(a,b){
				return a-b;
			});

			while(arr.length){
				for(var i=0; i<arr.length; i++){
					aSingle[arr.pop()].remove();
					toPosition();
					for(var i = 0; i < aSingle.length; i++){
						aSingle[i].index = i;
					}
				}
			}
		}

	}
	//定位照片
	function toPosition(){
			for(var i=0; i<aSingle.length; i++){
				aSingle[i].style.left = i%3 + 'rem';
				aSingle[i].style.top = Math.floor(i/3) + 'rem';
			}
	}
};