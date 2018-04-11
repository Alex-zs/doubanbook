
$(".personal_body_save_article_intro_1").each(function(){

	var comment_length = $(this).text().length ;
	if( comment_length >80){
		$(this).text($(this).text().substring(0,80))
		$(this).html($(this).html()+'...');
	}
})


$(".personal_body_save_article_title_1 a").each(function(){

	var comment_length = $(this).text().length ;
	if( comment_length >8){
		$(this).text($(this).text().substring(0,8))
		$(this).html($(this).html()+'...');
	}
})

	$(".personal_body_save_article_modify").click(function(){
		var ind = $(this).index();
		$(".personal_body_save_article_1").eq(0).remove();
	})
