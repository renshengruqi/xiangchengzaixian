define(["jquery","cookie"],function($){
	$.ajax({
		type:"get",
		url:"/html/include/header.html",
		success:function(data){
			var _username=$.cookie("loginUser");
			if(_username){
				$(data).filter(".login")
					   .html(`<a href="#">${_username}</a> 欢迎您回来! <a href="#">退出</a>`)
					   .end().appendTo(".header");
			}else{
				$(data).appendTo(".header");
			}
		}
	});
});