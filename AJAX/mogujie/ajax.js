function ajax(json){ //method ,url, data, success
	var xhr = null;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = ActiveXObject('Microsoft.XMLHTTP');
    }
	
	var jdata = json['data'] || '' ;
	
	if(json['method'] != 'post'){
		json['method'] = 'get' ;
		json['url'] += '?' + jdata;
	}
    
	xhr.open(json['method'],json['url'],true);
	if(json['method'] != 'post'){
		xhr.send();
	}else{
		xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
		xhr.send(jdata);
	}
	
	
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                json['success'] && json['success'](xhr.responseText);
            }else{
                alert('出错了,Err:'+xhr.status);
            }
        }
    };
}