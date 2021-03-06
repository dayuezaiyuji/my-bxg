define(["jquery","util","template",'validate','form','datepicker','language'],function ($,util,template) {
	util.setMenu("/teacher/list");
	//添加讲师功能
	//获取参数中的tc_id
	var tcId=util.qs("tc_id",location.search);
	function submitForm(url){		
		$("#addTeacherForm").validate({
			sendForm:false,
			eachInvalidField:function(){
				console.log(1);
			},
			eachValidField:function(){
				console.log(2);
			},
			valid:function(){
				//所有信息全部有效
				//提交表单
				$(this).ajaxSubmit({
					type:"post",
					url:url,
					success:function(data){
						if(data.code==200){
							location.href="/teacher/list";
						}
					}

				});
			},
			description:{
				tcName:{
					required:"姓名必须填写",
					valid:"姓名格式正确",
				},
				tcPass:{
					required:"密码不能为空",
					pattern:"密码必须是六位数字",
					valid:"密码可以使用"
				},
				tcJoinDate:{
					required:"入职日期不能为空",
					valid:"日期可以使用"
				}
			}

		})
		// $("#addTeacherBtn").click(function(){
		// 	$.ajax({
		// 		type:"post",
		// 		url:url,
		// 		data:$("#addTeacherForm").serialize(),
		// 		dataType:"json",
		// 		success:function(data){
		// 			if(data.code==200){
		// 				location.href="/teacher/list";
		// 			}
		// 		}
		// 	})
		// });
	}
	
	
	if(tcId){
		//根据id查询数据
		$.ajax({
			type:"get",
			url:"/api/teacher/edit",
			data:{tc_id:tcId},
			dataType:"json",
			success:function(data){
				console.log(1213);
				$('#navFlag').html('讲师编辑');
				data.result.operateFlag = '编辑';
                var html = template('teacherFormTpl',data.result);
                $('#teacherFormInfo').html(html);
                submitForm("/api/teacher/update");

			}
		})
	}else{
		$('#navFlag').html('讲师添加');
        var html = template('teacherFormTpl',{operateFlag:"添加",tc_gender:1});
        $('#teacherFormInfo').html(html);
        submitForm("/api/teacher/add");
	}
	
})