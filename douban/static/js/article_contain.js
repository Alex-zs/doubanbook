var time_set=true;
var now_page=0;
var total_page=2;
//下一页
var time_set=true;
$(".next_page").click(function(){
	if(now_page<total_page){

	now_page+=1;

	$(".body_comment_contentout ul").eq(now_page).css({'display':'block'});
	$(".body_comment_contentout ul").eq(now_page).siblings().css({'display':'none'});
	}
	else{
		
		if(time_set==true)
		{

			time_set=false;
			$(".last_page_tip").fadeIn();

			var time_1=setInterval(function(){
				console.log(time_set);
				
			},2000)	
	
			$(".last_page_tip").delay(1000).fadeOut(function(){
				clearInterval(time_1);
				time_set=true;
			
			});
		
		}	
	
		}

});

//上一页

$(".last_page").click(function(){
	if(now_page>0){	
		now_page-=1;
		$(".body_comment_contentout ul").eq(now_page).css({'display':'block'});
		$(".body_comment_contentout ul").eq(now_page).siblings().css({'display':'none'});
	}
	else{
		
		if(time_set==true)
		{

			time_set=false;
			$(".first_page_tip").fadeIn();

			var time_1=setInterval(function(){
				console.log(time_set);
				
			},2000)	
	
			$(".first_page_tip").delay(1000).fadeOut(function(){
				clearInterval(time_1);
				time_set=true;
			
			});
		
		}	
	
		}

	});
	
//首页
$(".first_page").click(function(){
if(now_page == 0){
		if(time_set==true)
		{

			time_set=false;
			$(".first_page_tip").fadeIn(function(){
			var time_1=setInterval(1500)	
			});
			$(".first_page_tip").delay(1000).fadeOut(function(){
			time_set=true;
			// console.log(time_set);
			});
		
		}	

}
now_page=0;
$(".body_comment_contentout ul").eq(now_page).css({'display':'block'});
$(".body_comment_contentout ul").eq(now_page).siblings().css({'display':'none'});


});

//关于点赞

	
$(".body_comment_good_pic").click(function(){
	var index = $(".body_comment_good_pic").index(this);

		console.log(index);
		var num = parseInt($(".body_comment_good_amount").html()); 
	if($(this).find("img").attr('src') == ('../images/goog.png')){
		$(this).find("img").attr('src','../images/good_red.png');
		var pre=$(".body_comment_good_amount").eq(index).html();
		$(".body_comment_good_amount").eq(index).html(pre-0+1);
	}
	else{
		$(this).find("img").attr('src','../images/goog.png');
		var pre=$(".body_comment_good_amount").eq(index).html();
		$(".body_comment_good_amount").eq(index).html(pre-0-1);
	}
})
	
	
//收藏
$(".body_article_author_love").click(function(){
	if($(".body_article_author_love").find("img").attr('src') == ('../images/author_article_love.png'))
	{
		$(this).find("img").attr('src','../images/love_red2.png');
	}
	else
	{
		$(this).find("img").attr('src','../images/author_article_love.png');
	}
})


// })
// if(praise_img.attr("src") == ("Images/yizan.png")

//搜索框
// $(".search_box_input").focus(function(){
//   $(this).attr("value","");
//   $(this).css({'color':'black'});
// });
// $(".search_box_input").blur(function(){
// 	var content = $(this).val();
// 	if(content == ""){
		
// 		 $(this).attr("value","请输入图书名称/作者");
// 		// $(this).attr("value",);
// 		$(this).css({'color':'#C9C9C9'});
// 	}

// });

//时间热度标签的切换
// $(".book_comment_nav_hot").click(function(){
// 	$(this).css({'background-color':'#02c39a'});
// 	$(".body_comment_contentout").css('display','none');
// 	$(".hot").css('display','block');
// })

// $(".book_comment_nav_time").click(function(){
// 	$(this).css({'background-color':'#02c39a'});

// 	$(".body_comment_contentout").css('display','none');
// 	$(".time").css('display','block');
// })

//评论框字数统计
var comment_commit = true;
function count_comment(){

	var comment_length = $(".book_writecomment_input").val().length ;

		if( comment_length >140){
		// $(this).val($(this).val().substring(0,140))
		$(".book_writecomment_count_tip_more").show();
		$(".book_writecomment_count_tip_less").hide();
		$(".book_writecomment input").css('color','#e81a33');
		comment_commit = true;

		}
		else if(comment_length == 0){
			$(".book_writecomment input").css('color',' #C9C9C9');
			 $(".book_writecomment_count_tip_more").hide();
			$(".book_writecomment_count_tip_less").hide();
			comment_commit = true;
			
		}
		else if(comment_length <15)
		{
			$(".book_writecomment_count_tip_more").hide();
			$(".book_writecomment_count_tip_less").show();
			$(".book_writecomment input").css('color','#e81a33');
			comment_commit = true;
		}

		else{
			
			 $(".book_writecomment input").css('color',' #C9C9C9');
			 $(".book_writecomment_count_tip_more").hide();
			$(".book_writecomment_count_tip_less").hide();
			comment_commit = false;
		}
	
	$(".book_writecomment_count input").val(comment_length-0);

}
function comment(){
	if(comment_commit == true)
		return false;
}

//判断是否登陆
if($(".book_writecomment_login").length>0)
{
	$(".book_writecomment_input").attr('disabled','true');
}
else{
	$(".book_writecomment_input").removeAttr('disabled')
}

//热门、时间切换
$(".book_comment_nav div").each(function(){
	$(this).click(function(){
		$(this).addClass('comment_hot_time');
		$(this).siblings('').removeClass('comment_hot_time')
	})
})


//选中框
// $("input").focus(function(){
// 	$(this).css('border-color','rgba(0,0,0,0.4)')
// });
// $("input").blur(function(){
// 	$(this).css('border-color','#D9D9D9')
// })



//控制个人头像大小
$(".body_comment_content_pic img").each(function(){
  if($(this).width()/$(this).height() >1)
 {
   $(this).css({'height':'73px','width':'auto'});
   var left = ($(this).width()/2 - $(".body_comment_content_pic").width()/2);
 	$(this).css('margin-left',-left);
 }
 else{
  $(this).css({'height':'auto','width2':'73px'});
  var height = ($(this).height()/2 - $(".body_comment_content_pic").height()/2);
 $(this).css('margin-top',-height);
 }
})



$(".body_article_author_pic img").each(function(){
  if($(this).width()/$(this).height() >1)
 {
   $(this).css({'height':'50px','width':'auto'});
   var left = ($(this).width()/2 - $(".body_article_author_pic").width()/2);
 	$(this).css('margin-left',-left);
 }
 else{
  $(this).css({'height':'auto','width':'50px'});
  var height = ($(this).height()/2 - $(".body_article_author_pic").height()/2);
 $(this).css('margin-top',-height);
 
 }
})