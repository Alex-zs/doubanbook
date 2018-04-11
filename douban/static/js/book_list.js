

//选中框
// $("input").focus(function(){
//   $(this).css('border-color','rgba(0,0,0,0.4)')
// });
// $("input").blur(function(){
//   $(this).css('border-color','#D9D9D9')
// })


//评分

	$(".body_middle_book_grade_star").each(function(index){

	var grade_1=$(".body_middle_book_grade_num").eq(index).html();
	
	grade_1=(grade_1-0)/2;
	var grade_1_star1=Math.floor(grade_1)

	for(var i=0;i<grade_1_star1;i++)
	{

		$(".body_middle_book_grade_star").eq(index).append("<li class='body_middle_book_grade_star_inside'><img src='../images/whole_star.png'/></li>");

	}

	var grade_1_star2=grade_1-0-grade_1_star1;
	
	if(grade_1_star2!=0){
		$(".body_middle_book_grade_star").eq(index).append("<li class='body_middle_book_grade_star_inside'><img src='../images/half_star.png'/></li>");
		
	}
	})
	



//点赞变红
$(".body_middle_book_like").each(function(index){
	var love=0;
	// console.log("999");
	$(this).click(function(index){
		// console.log("666");
  	love+=1;
  if(love%2!=0)
  {
    $(this).find("img").attr({'src':'../images/grade_love.png'});
    var time_set2 = true;
  
       
        if(time_set2 == true)
        {

          time_set2 = false;
          $(".article_save_tip").fadeIn();
          var time_3 = setInterval(2000);
          
          $(".article_save_tip").delay(1000).fadeOut(function(){
            clearInterval(time_3);
            time_set2 = true;

            });
        }

    
  }
  else{
    $(this).find("img").attr({'src':'../images/love_white.png'});
    

    // $(".article_save_tip").html("您已取消收藏")

  }
})
});
//点赞提示



//头部固定
$(document).ready(function(){  
    var a,b,c;  
    a = $(window).height();    //浏览器窗口高度  
    var group = $(".body_middle_book_list");  
    $(window).scroll(function(){  
        b = $(this).scrollTop();   //页面滚动的高度  
        c = group.offset().top;

          //元素距离文档（document）顶部的高度
          // console.log("a="+a);
          // console.log("b="+b);
          // console.log("c="+c);  
        if(b>c){  
           $(".body_top").css("position","fixed");
           $(".body_top").css("top","0");
           $(".body_top").css("z-index","99");
           // $(".container").height(1916);


        }else{  
           $(".body_top").css("position","static"); 
           // $(".container").height(2000);
           $(".body_top").css("z-index","auto");
        }  
    });  
}); 




//导航栏鼠标
var nav_now=0;
$(".body_top_nav_list li").mouseenter(function(){
  $(this).find("div").css('display', 'block');
  $("body_top_nav").eq(nav_now).find("div").css('display', 'block');
});
$(".body_top_nav_list li").mouseleave(function(){
  $(this).find("div").css('display', 'none');
  $(".body_top_nav").eq(nav_now).find("div").css('display', 'block');
});

$(".body_top_nav_list li").click(function(){
  $(this).find("div").css('display', 'block');
  $(this).siblings('').find("div").css('display', 'none');
})

//搜索框
$(".search_box_input").focus(function(){
  $(this).attr("value","");
  $(this).css({'color':'black'});
});
$(".search_box_input").blur(function(){
	var content = $(this).val();
	if(content == ""){
		
		 $(this).attr("value","请输入关键词");
		// $(this).attr("value",);
		$(this).css({'color':'#C9C9C9'});
	}

});


$(".body_middle_book_left_img img").each(function(){
  if($(this).width()/$(this).height() >0.867)
 {
   $(this).css({'height':'173px','width':'auto'});
 }
 else{
  $(this).css({'height':'auto','width':'124px'});
 }
})


$(".body_middle_book_info").each(function(){

  var comment_length = $(this).text().length ;
  if( comment_length >80){
    $(this).text($(this).text().substring(0,80))
    $(this).html($(this).html()+'...');
  }
})

