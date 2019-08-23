export let cookie={
		setCookie:function(cname,cvalue,exdays){
		    var d = new Date();
		    d.setTime(d.getTime()+(exdays*24*60*60*1000));
		    var expires = "expires="+d.toGMTString();
		    document.cookie = cname+"="+cvalue+"; "+expires;
		},
		getCookie:function(cname){
		    var name = cname + "=";
		    var ca = document.cookie.split(';');
		    for(var i=0; i<ca.length; i++) {
		        var c = ca[i].trim();
		        if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
		    }
		    return "";
		}

	/*保存cookie 模拟用户登录*/
	//初步保存一个cookie值。模拟缓存的用户信息
}

