



var star_lock = false;
var total_star = 0;
var lock_click = 1;
$(".book_comment_pinfen_star").hover(function(){
	if(star_lock == false){

	
	var total=$(this).index();
	for(var i=0;i<=total;i++)
	{
		$(".book_comment_pinfen_star").eq(i).find("img").attr('src','../images/star.png');

	}
	for(var j=4;j>total;j--)	
	{
		$(".book_comment_pinfen_star").eq(j).find("img").attr('src','../images/stra.png');
// console.log(i);
	}
	}
})
//点击星星后记录个数
$(".book_comment_pinfen_star").click(function(){
	if( star_lock == false)
{
	total_star = $(this).index() - 0 + 1;
	$(".total_star").html(total_star);
	star_lock = true;

}
else{

	star_lock = false;
	for(var j=5;j>0;j--)	
	{
		$(".book_comment_pinfen_star").eq(j).find("img").attr('src','../images/stra.png');
// console.log(i);
	}

}
	
});
//点击后的页面定位
$(".body_book_comment").click(function(){
	// window.location.hash = "#abc";
	 location.href = "#firstAnchor";      
});




//关于点赞
// var click_a=0;
// $(".body_comment_good_pic").click(function(){
// 	var index = $(".body_comment_good_pic").index(this);

// 	click_a=click_a-0+1;
// 	if((click_a-0)%2!=0){
// 		$(this).find("img").attr('src','../images/good_red.png');
// 		var pre=$(".body_comment_good_amount_1").html();
// 		$(".body_comment_good_amount_1").html(pre-0+1);
// 	}
// 	else{
// 		$(this).find("img").attr('src','../images/good_white.png');
// 		var pre=$(".body_comment_good_amount_1").html();
// 		$(".body_comment_good_amount_1").html(pre-0-1);
// 	}
	
// })
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


//收藏该书
$(".body_book_grade_love").click(function(){
	if($(this).find("img").attr('src') == ("../images/love.png")){
		$(this).find("img").attr('src','../images/grade_love.png')
	}
	
	else{
		$(this).find("img").attr('src','../images/love.png')
	}

});


var time_set=true;
var now_page=0;
var total_page=2;


//下一页

var time_set=true;
$(".next_page").click(function(){
	if(now_page<total_page){
	now_page+=1;
	$(".body_commit_content_list").eq(now_page).css('display','block');
	$(".body_commit_content_list").eq(now_page).siblings().css('display','none');


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
		$(".body_commit_content_list").eq(now_page).css('display','block');
		$(".body_commit_content_list").eq(now_page).siblings().css('display','none');
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
$(".body_commit_content_list").eq(now_page).css({'display':'block'});
$(".body_commit_content_list").eq(now_page).siblings().css({'display':'none'});


});

// $(".next_page").click(function(){
// 	if(now_page<total_page){

// 	now_page+=1;
// console.log($(".body_comment_content_list").eq(0).css('display'));
// 	$(".body_comment_content_list").eq(0).css({'display':'none'});

// 	// $(".body_comment_content_list").eq(now_page).siblings().css({'display':'none'});
// 	}
// 	else{
		
// 		if(time_set==true)
// 		{

// 			time_set=false;
// 			$(".last_page_tip").fadeIn();

// 			var time_1=setInterval(function(){
// 				console.log(time_set);
				
// 			},2000)	
	
// 			$(".last_page_tip").delay(1000).fadeOut(function(){
// 				clearInterval(time_1);
// 				time_set=true;
			
// 			});
		
// 		}	
	
// 		}

// });
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



$(".book_writecomment_input").keyup(function(){

	var comment_length = $(".book_writecomment_input").val().length ;
	if( comment_length >140){
		$(this).val($(this).val().substring(0,140))
	}
	else{
		$(".book_writecomment_count input").val(comment_length-0);
	}

	

});

//判断是否登陆
if($(".book_writecomment_login").css('display') != 'none')
{
	$(".book_writecomment_input").attr('disabled','true');
}
else{
	$(".book_writecomment_input").removeAttr('disabled')
}

//关于各个星级评分的人数

var total_people = 0;
var book_people = [];


// book_people[0]="2"
$(".body_book_grade_word").each(function(index){
	book_people[index] = $(".body_book_grade_word").eq(index).html();
	total_people += $(".body_book_grade_word").eq(index).html()-0;
});


for(var i = 0;i < 5;i ++)
{
$(".body_book_grade_draw").eq(i).width( book_people[i] / total_people * 217 )

}




//评分

	$(".body_comment_star").each(function(index){

	var grade=$(".body_comment_star_word").eq(index).html();
	
	for(var i=0;i<grade;i++)
	{

		$(".body_comment_star_list").eq(index).append("<li class='body_comment_stars'><img src='../images/star——3.png' alt=''></li>");

	}

	
	})


	
//选中框
// $("input").focus(function(){
// 	$(this).css('border-color','rgba(0,0,0,0.4)')
// });
// $("input").blur(function(){
// 	$(this).css('border-color','#D9D9D9')
// })

$(".body_book_pic img").each(function(){
  if($(this).width()/$(this).height() >0.704)
 {
   $(this).css({'height':'399px','width':'auto'});
 }
 else{
  $(this).css({'height':'auto','width':'281px'});
 }
})
$(".book_author_pic img").each(function(){
  if($(this).width()/$(this).height() >0.768)
 {
   $(this).css({'height':'350px','width':'auto'});
 }
 else{
  $(this).css({'height':'auto','width':'269px'});
 }
})