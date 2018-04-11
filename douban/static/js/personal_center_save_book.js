//出现删除和详情
$(".personal_body_save_book_1").mouseenter(function(){
	var num=$(this).index();
	$(".personal_body_save_book_more_1").eq(num).fadeIn();
	// $(".personal_body_save_book_more_1").eq(num).siblings().();
})
$(".personal_body_save_book_1").mouseleave(function(){
	var num=$(this).index();
	$(".personal_body_save_book_more_1").eq(num).fadeOut();


})
// $(".personal_body_save_book_2").mouseenter(function(){
// 	var num=$(this).index();
// 	$(".personal_body_save_book_more_1").eq(num).fadeIn();
// })
// $(".personal_body_save_book_2").mouseleave(function(){
// 	var num=$(this).index();
// 	$(".personal_body_save_book_more_1").eq(num).fadeOut();


// })
// $(".personal_body_save_book_3").mouseenter(function(){
// 	var num=$(this).index();
// 	$(".personal_body_save_book_more_1").eq(num).fadeIn();
// })
// $(".personal_body_save_book_3").mouseleave(function(){
// 	var num=$(this).index();
// 	$(".personal_body_save_book_more_1").eq(num).fadeOut();


// })
// $(".personal_body_save_book_4").mouseenter(function(){
// 	var num=$(this).index();
// 	$(".personal_body_save_book_more_1").eq(num).fadeIn();

// })
// $(".personal_body_save_book_4").mouseleave(function(){
// 	var num=$(this).index();
// 	$(".personal_body_save_book_more_1").eq(num).fadeOut();

// })




//删除图书
$(".personal_body_save_book_del_1").click(function(){
	var num=$(this).index();
	$(".personal_body_save_book_inner ul li").eq(num).remove();
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