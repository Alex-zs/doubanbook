$(".personal_body_write_content").click(function(){
	$(".personal_body_write_content_tip").css('display', 'none');
	$(".personal_body_write_title_input").attr('value','#请在此添加标题');
	$(".personal_body_write_add_img_tip").css('display','block');
});
$(".personal_body_write_add_img").click(function(){
	$(".personal_body_write_add_img_tip").css('display', 'none');
	$(".personal_body_write_title_input").attr('value','#请在此添加标题');
	$(".personal_body_write_content_tip").css('display','block');

});
$(".personal_body_write_title_input").click(function(){
	$(".personal_body_write_content_tip").css('display', 'block');
	$(".personal_body_write_title_input").attr('value','');
	$(".personal_body_write_add_img_tip").css('display','block');
});

//编辑个性签名
$(".personal_body_perinfo_write").click(function(){
	$(".personal_body_perinfo_words").removeAttr('disabled');
	$(".personal_body_perinfo_words").removeProp('border')
	console.log("666")
	$(".personal_body_perinfo_words").focus();

});
$(".personal_body_perinfo_words").blur(function(){
	$(this).attr('disabled','disabled');
	$(this).css({'border':'none'})
	
});

function checkenter(){
	$(".personal_body_perinfo_words").keydown(function(event){

	if(event.keyCode == 13 || event.keyCode == 32)
	{
	window.event.returnValue = false;
	}
	else{
		var comment_length = $(".personal_body_perinfo_words").val().length ;
	if( comment_length >28){
		$(this).val($(this).val().substring(0,28))
	}
	}
	})

	
}
