define(['jquery','template',"util","bootstrap"],function ($,template,util) {
	//设置侧边栏对应的背景色
	var pathname=location.pathname;//获取地址栏对应路径
	util.setMenu(pathname);
	$.ajax({
		type:"get",
		url:"/api/teacher",
		dataType:"json",
		success:function(data){
			//渲染数据列表
			var html=template("teacherListTpl",{list:data.result});
			$("#teacherListInfo").html(html);
			//编辑讲师查看功能
			viewTeacher();
			//编辑讲师注销和启用功能
			enableTeacher()
		}
	});
	// 讲师查看
	function viewTeacher(){
		$("#teacherListInfo").find(".preview").click(function(){
			var td=$(this).closest("td");
			var tcId=td.attr("data-id");
			$.ajax({
				type:"get",
				url:"/api/teacher/view",
				data:{tc_id:tcId},
				dataType:"json",
				success:function(data){
					// data.result.tc_hometown=data.result.tc_hometown.split("|").join(" ");
					// data.result.tc_hometown=data.result.tc_hometown.replace(/\|/g," ");
					data.result.tc_hometown=data.result.tc_hometown.replace(/[|]/g," ");
					//渲染数据列表
					var html=template("teacherModalTpl",data.result);
					$("#teacherInfo").html(html);
					$("#teacherModal").modal();
				}
			});
		})
	}
	// 讲师启用和注销
	function enableTeacher(){
		$("#teacherListInfo").find(".edteacher").click(function(){
			var that=this;
			var td=$(this).closest("td");
			var tcId=td.attr("data-id");
			var tcStatus=td.attr("data-status");
			$.ajax({
				type:"post",
				url:"/api/teacher/handle",
				data:{tc_id:tcId,tc_status:tcStatus},
				dataType:"json",
				success:function(data){
					if(data.code==200){
						td.attr("data-status",data.result.tc_status);
						if(data.result.tc_status==1){
							$(that).text("启用");
						}else{
							$(that).text("注销");
						}
					}

				}
			});
		})
	}
})