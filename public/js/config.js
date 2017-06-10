requirejs.config({
	//设置模块加载的基准路径
	baseUrl:"/public/assets",
	paths:{//给模块路径起一个别名
		jquery:"jquery/jquery.min",
		bootstrap:"bootstrap/js/bootstrap.min",
		template:"artTemplate/template-web",
		cookie:"jquery-cookie/jquery.cookie",
		nprogress:"nprogress/nprogress",
		validate : 'validate/jquery-validate',
        form : 'jquery-form/jquery.form',
        datepicker : 'bootstrap-datepicker/js/bootstrap-datepicker.min',
        language : 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
		index:"../js/index",
		util:"../js/util",
		teaList:"../js/teacherList",
		common:"../js/common",
		login:"../js/login",
		teaadd:"../js/teacherAdd",
		settings : '../js/settings'
	},
	shim:{
		//兼容非标准模块
		bootstrap:{
			deps:["jquery"]//传递依赖参数
		},
		validate : {
            deps : ['jquery']
        },
        language : {
            deps : ['jquery','datepicker']
        }
	}
});