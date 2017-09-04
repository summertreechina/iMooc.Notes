{
	// alert('这相当于一个自执行匿名函数')

	// 模拟json传入的数据
	var json = {
		title : [
			'效果1',
			'效果2',
			'效果3',
			'效果4',
			'效果5',
			'效果6',
			'效果7',
			'效果8',
			'效果9',
			'效果10',
			'效果11',
			'效果12',
			'效果13',
			'效果14',
			'效果15',
			'效果16',
			'效果17',
			'效果18',
			'效果19',
			'效果20',
			'效果21',
			'效果22',
			'效果23',
			'效果24',
			'效果25',
			'效果26',
			'效果27',
			'效果28',
			'效果29',
			'效果30',
			'效果31',
			'效果32',
			'效果33',
			'效果34'
		]
	};

	page({
	
		id : 'paging',
		nowNum : 1,
		allNum : Math.ceil(json.title.length/12),
		callBack : function(now, all){
			let num = (now*12 < json.title.length) ? 12 : json.title.length - (now-1)*12;
			let oUl = document.querySelector('.items');
			let aLi = oUl.querySelectorAll('.item');
			
			if (oUl.innerHTML == ''){
				for ( let i=0; i<num; i++ ){
					let oLi = document.createElement('li');
					oLi.className = 'item';
					oLi.innerHTML = json.title[(now-1)*12 + i];
					oUl.appendChild(oLi);
				}
				
				for( let i=0; i<aLi.length; i++ ){
					arr.push( [aLi[i].offsetLeft,aLi[i].offsetTop] );
				}
				
				for(var i=0;i<aLi.length;i++){
					aLi[i].style.position = 'absolute';
					aLi[i].style.left = arr[i][0] + 'px';
					aLi[i].style.top = arr[i][1] + 'px';
					aLi[i].style.margin = 0;
				}
			} else {
				
				var timer = setInterval(function(){
					
					startMove(aLi[iNow],{left : 200 ,top : 250,opacity:0});
					
					if(iNow == 0){
						clearInterval(timer);
						
						iNow = num - 1;
						
						for(var i=0;i<num;i++){
							aLi[i].innerHTML = json.title[(now-1)*10 + i];
						}
						
						var timer2 = setInterval(function(){
							
							startMove(aLi[iNow],{left : arr[iNow][0] ,top : arr[iNow][1] , opacity:100});
							
							if(iNow == 0){
								clearInterval(timer2);
								iNow = num - 1;
							}
							else{
								iNow--;
							}
							
						},100);
						
					}
					else{
						iNow--;
					}
					
				},100);
				
			}	
		
		}
	});

	// function page(opt){

	// 	if(!opt.id){ return false };
		
	// 	var obj = document.getElementById(opt.id);
		
	// 	var nowNum = opt.nowNum || 1;
	// 	var allNum = opt.allNum || 5;
	// 	var callBack = opt.callBack || function(){};
		
	// 	if( nowNum>=4 && allNum>=6 ){
		
	// 		var oA = document.createElement('a');
	// 		oA.href = '#1';
	// 		oA.innerHTML = '首页';
	// 		obj.appendChild(oA);
		
	// 	}
		
	// 	if(nowNum>=2){
	// 		var oA = document.createElement('a');
	// 		oA.href = '#' + (nowNum - 1);
	// 		oA.innerHTML = '上一页';
	// 		obj.appendChild(oA);
	// 	}
		
	// 	if(allNum<=5){
	// 		for(var i=1;i<=allNum;i++){
	// 			var oA = document.createElement('a');
	// 			oA.href = '#' + i;
	// 			if(nowNum == i){
	// 				oA.innerHTML = i;
	// 			}
	// 			else{
	// 				oA.innerHTML = '['+ i +']';
	// 			}
	// 			obj.appendChild(oA);
	// 		}	
	// 	}
	// 	else{
		
	// 		for(var i=1;i<=5;i++){
	// 			var oA = document.createElement('a');
				
				
	// 			if(nowNum == 1 || nowNum == 2){
					
	// 				oA.href = '#' + i;
	// 				if(nowNum == i){
	// 					oA.innerHTML = i;
	// 				}
	// 				else{
	// 					oA.innerHTML = '['+ i +']';
	// 				}
					
	// 			}
	// 			else if( (allNum - nowNum) == 0 || (allNum - nowNum) == 1 ){
				
	// 				oA.href = '#' + (allNum - 5 + i);
					
	// 				if((allNum - nowNum) == 0 && i==5){
	// 					oA.innerHTML = (allNum - 5 + i);
	// 				}
	// 				else if((allNum - nowNum) == 1 && i==4){
	// 					oA.innerHTML = (allNum - 5 + i);
	// 				}
	// 				else{
	// 					oA.innerHTML = '['+ (allNum - 5 + i) +']';
	// 				}
				
	// 			}
	// 			else{
	// 				oA.href = '#' + (nowNum - 3 + i);
					
	// 				if(i==3){
	// 					oA.innerHTML = (nowNum - 3 + i);
	// 				}
	// 				else{
	// 					oA.innerHTML = '['+ (nowNum - 3 + i) +']';
	// 				}
	// 			}
	// 			obj.appendChild(oA);
				
	// 		}
		
	// 	}
		
	// 	if( (allNum - nowNum) >= 1 ){
	// 		var oA = document.createElement('a');
	// 		oA.href = '#' + (nowNum + 1);
	// 		oA.innerHTML = '下一页';
	// 		obj.appendChild(oA);
	// 	}
		
	// 	if( (allNum - nowNum) >= 3 && allNum>=6 ){
		
	// 		var oA = document.createElement('a');
	// 		oA.href = '#' + allNum;
	// 		oA.innerHTML = '尾页';
	// 		obj.appendChild(oA);
		
	// 	}
		
	// 	callBack(nowNum,allNum);
		
	// 	var aA = obj.getElementsByTagName('a');
		
	// 	for(var i=0;i<aA.length;i++){
	// 		aA[i].onclick = function(){
				
	// 			var nowNum = parseInt(this.getAttribute('href').substring(1));
				
	// 			obj.innerHTML = '';
				
	// 			page({
				
	// 				id : opt.id,
	// 				nowNum : nowNum,
	// 				allNum : allNum,
	// 				callBack : callBack
				
	// 			});
				
	// 			return false;
				
	// 		};
	// 	}
	// }

}