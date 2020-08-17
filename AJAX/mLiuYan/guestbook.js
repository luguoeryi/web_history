window.onload = function(){
	//初始化
	var oUser = document.getElementById('user'); //退出
	var oReg = document.getElementById('reg'); //注册
	var Login = document.getElementById('login'); //登录
	
	var iNfo = document.getElementById('userinfo'); //登录后名
	var oList = document.getElementById('list');
	
	var ipage = 1 ;
	
	updatauserstatus();  //用户状态刷新
	function updatauserstatus(){
		var uId = getCookie('uid');
		var uSername = getCookie('username');
		if(uId){
			iNfo.innerHTML = uSername ;
			oReg.style.display = 'none';
			Login.style.display = 'none';
			oUser.style.display = 'block';
		}else{
			iNfo.innerHTML = '' ;
			oReg.style.display = 'block';
			Login.style.display = 'block';
			oUser.style.display = 'none';
		}
	}
	
	
	
	//用户名验证
	var Username1 = document.getElementById('username1');
	var vUserNameMsg = document.getElementById('verifyUserNameMsg');
	Username1.onblur = function(){
		//参数： m:index  a = verifyUserName 用户名
			ajax({
				'url':'guestbook/index.php',
				'data':'m=index&a=verifyUserName&username='+this.value,
				'success':fn1		
			});
	};
	
	function fn1(data){
		var d = JSON.parse(data);
		vUserNameMsg.innerHTML = d['message'] ;
		if(d['code']){
			vUserNameMsg.style.color = 'red';
		}else{
			vUserNameMsg.style.color = 'green';
		}
	};
	
	//注册
	var bTnReg = document.getElementById('btnReg');
	var pAssword1 = document.getElementById('password1');
	bTnReg.onclick = function(){
			ajax({
				'method':'post',
				'url':'guestbook/index.php',
				'data':'m=index&a=reg&username='+encodeURI(Username1.value)+'&password='+pAssword1.value,
				'success':fn2	
			});
	};
	
	function fn2(data){
		var d = JSON.parse(data) ;
		alert(d['message']) ;
	};
	
	//登录
	var Username2 = document.getElementById('username2');
	var pAssword2 = document.getElementById('password2');
	var oLogin = document.getElementById('btnLogin');
	
	oLogin.onclick = function(){
		ajax({
			'method':'post',
			'url':'guestbook/index.php',
			'data':'m=index&a=login&username='+encodeURI(Username2.value)+'&password='+pAssword2.value,
			'success':fn3
		});	
	};
	
	function fn3(data){
		var d = JSON.parse(data);
		alert(d['message']);
		if(!d['code']){
			updatauserstatus();
		}
	}
	
	//用户退出
	var Logout = document.getElementById('logout');
	Logout.onclick = function(){
		ajax({
			'url':'guestbook/index.php',
			'data':'m=index&a=logout',
			'success':fn4
		});	
		return false;
	};
	
	function fn4(data){
		var d = JSON.parse(data);
		alert(d['message'])
		if(!d['code']){
			updatauserstatus();
		}
	};
	
	//发表留言
	var oContent = document.getElementById('content');
	var bTnPost = document.getElementById('btnPost');
	var sHowMore = document.getElementById('showMore');
	
	bTnPost.onclick = function(){
		ajax({
			'method':'post',
			'url':'guestbook/index.php',
			'data':'m=index&a=send&content='+encodeURI(oContent.value),
			'success':function(data){
				var d = JSON.parse(data);
				alert(d['message']);
				if(!d['code']){
					createList(d['data'],true)
				}
			}
		});
	};
	
	
	function createList(data,insert){
		var aDl = document.createElement('dl');
		var aDt = document.createElement('dt');
		var aStrong = document.createElement('strong');
		aStrong.innerHTML = data['username'];
		
		aDt.appendChild(aStrong);
		
		var add1 = document.createElement('dd');
		add1.innerHTML =  data['content'];
		var add2 = document.createElement('dd');
		add2.className = 't';
		
		var oA1 = document.createElement('a');
		var oA2 = document.createElement('a');
		oA1.href = '';
		oA2.href = '';
		oA1.innerHTML = '顶(<span>'+data['support']+'</span>)' ;
		oA2.innerHTML = '踩(<span>'+data['oppose']+'</span>)' ;
		add2.appendChild(oA1);
		add2.appendChild(oA2);
		
		aDl.appendChild(aDt);
		aDl.appendChild(add1);
		aDl.appendChild(add2);
		
		if(insert && oList.children[0]){
			oList.insertBefore(aDl,oList.children[0]);
		}else{
			oList.appendChild(aDl);
		}
	}
	
	//初始化留言列表
	showList();
	
	function showList(){
		ajax({
			'url':'guestbook/index.php',
			'data':'m=index&a=getList&n=2&page='+ipage,
			'success':function(data){
				var d = JSON.parse(data) ;
				if(!d['code']){
					var arr = d['data']['list'] ;
					for(var i=0;i<arr.length;i++){
						createList(arr[i]);
					}
				}else{
					sHowMore.style.display = 'none' ;
					alert(d['message']);
					if(ipage == 1){
						oList.innerHTML = '现在还没有留言,快来抢沙发吧...';
					}
				}
			}
		});
	}
	
	
		
	
	sHowMore.onclick = function(){
		ipage++;
		showList();
	};
	
};

function getCookie(key){
	var arr1 = document.cookie.split('; ');
	for(var i=0;i<arr1.length;i++){
		var arr2 = arr1[i].split('=');
		if(arr2[0] == key){
			return encodeURI(arr2[1]);
		}
	}
}

