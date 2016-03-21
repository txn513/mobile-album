window.onload = function() {
	//生成图片
	(function createPhotos (){
		var oPhoto = document.getElementById('photo_list');
		var photoList = [];
		var photoHtml = '';
		for (var i = 1; i <= 16; i++){
			photoList.push("./video/"+ i +".jpg");
		}
		for (var i = 0; i < photoList.length; i++){
			photoHtml += "<li style='background-image:url("+ photoList[i]+")'></li>";
		}
		oPhoto.innerHTML = photoHtml;
	})();

	//删除照片
	(function removePhotos(){
		var oSelect = document.getElementById('select');
		var oPhoto = document.getElementById('photo_list');
		var oRemove = document.getElementById('remove');
		var aSingle = oPhoto.getElementsByTagName('li');
		var arr = [];
		oSelect.addEventListener('click', fnSelected, false);
		function fnSelected (){
			if(this.innerHTML == '取消'){
				this.innerHTML = '选择';
				for(var i = 0; i < arr.length; i++){
					aSingle[arr[i]].style.border = '2px solid #000';
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
						this.style.border = '5px solid #fff';
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
					for(var i = 0; i < aSingle.length; i++){
						aSingle[i].index = i;
					}
				}
			}
		}

	})()
};