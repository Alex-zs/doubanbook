//手风琴

//选中框
// $("input").focus(function(){
// 	$(this).css('border-color','rgba(0,0,0,0.4)')
// });
// $("input").blur(function(){
// 	$(this).css('border-color','#D9D9D9')
// })

// $(".body_top_inner ul li").click(function(){
// 	$(".body_top_inner ul li").stop(true);
// 	$(this).animate({'width':"572px"},800).siblings().animate({'width':"106px"},800);
// });
//搜索框
// $(".search_box_input").click(function(){
// 	$(this).attr("value","");
// });
// $(".search_box_input").blur(function(){
// 	$(this).attr("value","请输入关键词");
// });



// var mar_left = $(".body_top_inner ul li").each(function(index){
// $(this).width();

// })
var mar_left = new Array();
 mar_left[0] = $(".body_top_sfq_pic_1 ").width()/2;
 mar_left[1] = $(".body_top_sfq_pic_2").width();
 mar_left[2] = $(".body_top_sfq_pic_3").width();
 mar_left[3] = $(".body_top_sfq_pic_4").width();
 mar_left[4] = $(".body_top_sfq_pic_5").width();

// $(".body_top_inner ul img").eq(0).css('margin-left',-mar_left[0]);


// (parseInt(this.parentNode.style.width) - this.width) /2 + 'px



//加入收藏

$(".body_hotbook_book_love").click(function(){
	if($(this).find("img").attr('src') == ("../images/love.png")){
		$(this).find("img").attr('src','../images/love_red2.png')
	}
	
	else{
		$(this).find("img").attr('src','../images/love.png')
	}

});





var json0 = { "width":106, "height":327, "top":0, "left":0 ,"z-index":0 ,"opacity":0.6 };

var json1 = { "width":106, "height":327, "top":0, "left":106 ,"z-index":10 ,"opacity":0.6}

var json2 = { "width":572, "height":327, "top":0, "left":212 ,"z-index":50 ,"opacity":1}

var json3 = { "width":106, "height":327, "top":0, "left":784 ,"z-index":10 ,"opacity":0.6}

var json4 = { "width":106, "height":327, "top":0, "left":890 ,"z-index":0 ,"opacity":0.6}

var json5 = { "width":106, "height":327, "top":0, "left":1000 ,"z-index":0 ,"opacity":0.6}





	
	
	function page_left(){
		// if(click_num) (num)
	if(!$(".body_top_inner_sfq li").is(":animated")){
	$(".body_top_sfq_pic_2").animate(json0,800);
	$(".body_top_sfq_pic_3").animate(json1,800);
	$(".body_top_sfq_pic_4").animate(json2,800);
	$(".body_top_sfq_pic_5").animate(json3,800);
	$(".body_top_sfq_pic_1").css(json4);
	// $(".body_top_sfq_pic_1").animate(json0,400);
	// $(".body_top_sfq_pic_1").attr("class","body_top_sfq_pic_5")
	$(".body_top_sfq_pic_2 ").attr("class","body_top_sfq_pic_1")
	$(".body_top_sfq_pic_3").attr("class","body_top_sfq_pic_2")
	$(".body_top_sfq_pic_4").attr("class","body_top_sfq_pic_3")
	$(".body_top_sfq_pic_5").attr("class","body_top_sfq_pic_4")
	if($(".body_top_sfq_pic_4").next().length != 0)
	{
		$(".body_top_sfq_pic_4").next().attr("class","body_top_sfq_pic_5")
	}
	else{
		
		$(".body_top_inner_sfq li:first").attr("class","body_top_sfq_pic_5");
		
	}




		$(".body_top_sfq_pic_3 div").fadeIn();
		
	

		$(".body_top_sfq_pic_3").siblings().find("div").fadeOut();
		$(".body_top_sfq_pic_3 img").css('z-index','51');
		$(".body_top_sfq_pic_3").siblings().find("img").css('z-index','0');
	
	}
	
	
	
	}
	$(".body_top_hover_left img").click(function(){
		page_left();
	})



	

	

	// $(".body_top_inner_sfq li:first").attr("class","body_top_sfq_pic_5")
	// $(".body_top_sfq_pic_2").attr("class","body_top_sfq_pic_1")

// $("")
//向右翻页


	
		function page_right(){
	

	// if(click_num) (num)
	if(!$(".body_top_inner_sfq li").is(":animated")){
	$(".body_top_sfq_pic_1").animate(json1,800);
	$(".body_top_sfq_pic_2").animate(json2,800);
	$(".body_top_sfq_pic_3").animate(json3,800);
	$(".body_top_sfq_pic_4").animate(json4,800);
	$(".body_top_sfq_pic_5").css(json0);
	// $(".body_top_sfq_pic_1").animate(json0,400);
	// $(".body_top_sfq_pic_1").attr("class","body_top_sfq_pic_5")
	$(".body_top_sfq_pic_4").attr("class","body_top_sfq_pic_5")
	$(".body_top_sfq_pic_3").attr("class","body_top_sfq_pic_4")
	$(".body_top_sfq_pic_2").attr("class","body_top_sfq_pic_3")
	$(".body_top_sfq_pic_1").attr("class","body_top_sfq_pic_2")
	if($(".body_top_sfq_pic_2").prev().length != 0)
	{
		$(".body_top_sfq_pic_2").prev().attr("class","body_top_sfq_pic_1")
	}
	else{
		
		$(".body_top_inner_sfq li:last").attr("class","body_top_sfq_pic_1");
		
	}
	

	$(".body_top_sfq_pic_3 div").fadeIn();
		
		$(".body_top_sfq_pic_3").siblings().find("div").fadeOut();
		$(".body_top_sfq_pic_3 img").css('z-index','51');
		$(".body_top_sfq_pic_3").siblings().find("img").css('z-index','0');
	}

	// $(".body_top_inner_sfq li:first").attr("class","body_top_sfq_pic_5")
	// $(".body_top_sfq_pic_2").attr("class","body_top_sfq_pic_1")
}

	$(".body_top_hover_right img").click(function(){
		page_right();
	})


//


function slash(){
	$(".body_top_hover_left,.body_top_hover_right").find("img").fadeIn().delay(100).fadeOut();
	// $(".body_top_hover_left,.body_top_hover_right").de
	// $(".body_top_hover_left,.body_top_hover_right").find("img");
}
	
//


//鼠标未移上去的时候闪烁


var time1 = setInterval(slash,2000);


$(".body_top_hover_left,.body_top_hover_right").mouseover(function(){

		clearInterval(time1);


	// console.log(sfq_in)
	$(".body_top_hover_left,.body_top_hover_right").find("img").fadeIn()
});

$(".body_top_hover_left,.body_top_hover_right").mouseout(function(){
	time1 = setInterval(slash,2000);
	
});


//轮播
var time2 = setInterval(page_right,3500);

$(".body_top_inner").mouseover(function(){
	clearInterval(time2);
})

$(".body_top_inner").mouseout(function(){
	time2 = setInterval(page_right,3500);
	
});


// if($(".body_top_sfq_word").html().length>12)
// {

// }
//

// $(".hotessey_essay_pic").each(function(){
// 	if($(this).width() > $(this).height())
// 	{
// 		$(this).css({'height':''})

// 	}
// })
//动态改变图片的大小
$(".hotessey_essay_pic").each(function(){
  if($(this).width()/$(this).height() >1.157)
 {
   $(this).css({'height':'146px','width':'auto'});
 }
 else{
  $(this).css({'height':'auto','width':'169px'});
 }
})

$(".hotessey_photoalbum_1_a_div img").each(function(){
  if($(this).width()/$(this).height() >1.533)
 {
   $(this).css({'height':'298px','width':'auto'});
 }
 else{
  $(this).css({'height':'auto','width':'457px'});
 }
})

$(".body_hotbook_a_1_div img").each(function(){
  if($(this).width()/$(this).height() >0.7107)
 {
   $(this).css({'height':'280px','width':'auto'});
 }
 else{
  $(this).css({'height':'auto','width':'199px'});
 }
})

// $(".body_top_sfq_pic_img").each(function(){
//   if($(this).width()/$(this).height() > 1.611)
//  {
//    $(this).css({'height':'327px','width':'auto'});
//  }
//  else{
//   $(this).css({'height':'auto','width':'527px'});
//  }
// })