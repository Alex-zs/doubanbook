



//这里是book_contain里面要替换的关于星星的js
var star_lock = false;
var total_star = 0;
var lock_click = 1;
var click_count = 0;
$(".book_comment_pinfen_star").mouseover(function(){
	if(star_lock == false){


	var total=$(this).index();
	for(var i=0;i<=total;i++)
	{
		$(".book_comment_pinfen_star").eq(i).find("img").attr('src','../images/star.png');

	}
	for(var j=4;j>total;j--)
	{
		$(".book_comment_pinfen_star").eq(j).find("img").attr('src','../images/stra.png');

	}
	}
})
$(".book_comment_pinfen").mouseleave(function(){
	if(total_star == 0)
	{
		for(var i=0;i<=4;i++)
	{
		
		$(".book_comment_pinfen_star").eq(i).find("img").attr('src','../images/stra.png');
	}
	}

});
//点击星星后记录个数
$(".book_comment_pinfen_star").click(function(){

	click_count++;
	if(click_count %2 != 0)
	{
		total_star = $(this).index() - 0 + 1;
		$(".total_star").val(total_star);
		for(var i=0;i<total_star;i++)
		{
			$(".book_comment_pinfen_star").eq(i).find("img").attr('src','../images/star.png');


		}
		for(var j=4;j>total_star;j--)	
		{
			$(".book_comment_pinfen_star").eq(j).find("img").attr('src','../images/stra.png');

		}
		star_lock = true;

	}
	else{
		total_star = 0;
		for(var i=0;i<=4;i++)
		{
			
			$(".book_comment_pinfen_star").eq(i).find("img").attr('src','../images/stra.png');
		}


		$(".total_star").val(total_star);
		star_lock = false
	}

});
//点击后的页body_book_grade_draw面定位
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
	if($(this).find("img").attr('src') == ("../images/love.png")) {
        $(this).find("img").attr('src', '../images/grade_love.png');
        var ur = $(".collect_sao_operation_collect").val();
        $(".collect_sao_operation").attr('src', ur);
    }
	else{
		$(this).find("img").attr('src','../images/love.png');
        var ur = $(".collect_sao_operation_uncollect").val();
        $(".collect_sao_operation").attr('src', ur);
	}

});


// var time_set=true;
// var now_page=0;
// var total_page=2;


// //下一页

// var time_set=true;
// $(".next_page").click(function(){
// 	if(now_page<total_page){
// 	now_page+=1;
// 	$(".body_commit_content_list").eq(now_page).css('display','block');
// 	$(".body_commit_content_list").eq(now_page).siblings().css('display','none');


// }
// else{

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

// //上一页

// $(".last_page").click(function(){
// 	if(now_page>0){
// 		now_page-=1;
// 		$(".body_commit_content_list").eq(now_page).css('display','block');
// 		$(".body_commit_content_list").eq(now_page).siblings().css('display','none');
// 	}
// 	else{

// 		if(time_set==true)
// 		{

// 			time_set=false;
// 			$(".first_page_tip").fadeIn();

// 			var time_1=setInterval(function(){
// 				console.log(time_set);

// 			},2000)

// 			$(".first_page_tip").delay(1000).fadeOut(function(){
// 				clearInterval(time_1);
// 				time_set=true;

// 			});

// 		}

// 		}

// 	});

// //首页
// $(".first_page").click(function(){
// if(now_page == 0){
// 		if(time_set==true)
// 		{

// 			time_set=false;
// 			$(".first_page_tip").fadeIn(function(){
// 			var time_1=setInterval(1500)
// 			});
// 			$(".first_page_tip").delay(1000).fadeOut(function(){
// 			time_set=true;
// 			// console.log(time_set);
// 			});

// 		}

// }
// now_page=0;
// $(".body_commit_content_list").eq(now_page).css({'display':'block'});
// $(".body_commit_content_list").eq(now_page).siblings().css({'display':'none'});


// });

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
	if($(".total_star").val() == "0" || $(".total_star").val() == "" )
	{
		return false;
	}
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
//动态改变图片的大小
var t_img; // 定时器
var isLoad = true; // 控制变量

// 判断图片加载状况，加载完成后回调
isImgLoad(function(){
    // 加载完成
$(".body_book_pic img").each(function(){
  if($(this).width()/$(this).height() >0.704)
 {
   $(this).css({'height':'399px','width':'auto'});
   var left = ($(this).width()/2 - $(".body_book_pic").width()/2);
 $(this).css('margin-left',-left);
 }
 else{
  $(this).css({'height':'auto','width':'281px'});
  var height = ($(this).height()/2 - $(".body_book_pic").height()/2);
 $(this).css('margin-top',-height);
 }
 
 
})
$(".book_author_pic img").each(function(){
  if($(this).width()/$(this).height() >0.768)
 {
   $(this).css({'height':'350px','width':'auto'});
   var left = ($(this).width()/2 - $(".book_author_pic").width()/2);
 	$(this).css('margin-left',-left);
 }
 else{
  $(this).css({'height':'auto','width':'269px'});
  var height = ($(this).height()/2 - $(".book_author_pic").height()/2);
 $(this).css('margin-top',-height);
 }
})



//控制个人头像大小
$(".body_comment_content_pic_div img").each(function(){
  if($(this).width()/$(this).height() >1)
 {
   $(this).css({'height':'73px','width':'auto'});
   var left = ($(this).width()/2 - $(".body_comment_content_pic_div").width()/2);
 	$(this).css('margin-left',-left);
 }
 else{
  $(this).css({'height':'auto','width2':'73px'});
  var height = ($(this).height()/2 - $(".body_comment_content_pic_div").height()/2);
 $(this).css('margin-top',-height);
 }
})



})

// 判断图片加载的函数
function isImgLoad(callback){
    // 注意我的图片类名都是cover，因为我只需要处理cover。其它图片可以不管。
    // 查找所有封面图，迭代处理
    $('.cover').each(function(){
        // 找到为0就将isLoad设为false，并退出each
        if(this.height === 0){
            isLoad = false;
            return false;
        }
    });
    // 为true，没有发现为0的。加载完毕
    if(isLoad){
        clearTimeout(t_img); // 清除定时器
        // 回调函数
        callback();
    // 为false，因为找到了没有加载完成的图，将调用定时器递归
    }else{
        isLoad = true;
        t_img = setTimeout(function(){
            isImgLoad(callback); // 递归扫描
        },300); // 我这里设置的是500毫秒就扫描一次，可以自己调整
    }
}
