define(["jquery"],function ($) {
	return {
		setMenu:function(pathname){
			$(".aside .navs a").removeClass("active");
			$(".aside .navs a[href='"+pathname+"']").addClass("active");
		},
		//根据传入的参数获取参数值
		qs:function(attr,param){
			//?abc=12&ksd=67
			var p=param.substring(1);
			var arr=p.split("&");
			var retValue="";
			arr.forEach(function(element,index){
				var kv=element.split("=");
				if(attr==kv[0]){
					retValue=kv[1];
					//退出forEach循环
					return;
				}
			});
			return retValue;
		}
	}
	
});