
//验证码切换
$(".login_form_verify_image").click(function(){

	$(".login_form_verify_image_img").attr('src','../images/book_list_logo.png');
})

//logo 变化


$(".logo_2").animate({'opacity':'1','margin-top':'48'},2000);
$(".body").find("h3").animate({'opacity':'1'},2000);


//input 
// $(".login_form_name_input").focus(function(){
//   $(this).attr("value","");
//   $(this).css({'color':'black'});

  
// });
// $(".login_form_name_input").blur(function(){
//   // $(this).attr("value","请输入正确的邮箱地址");
//    var content=$(this).val();
//   	if(content==""){
//   		$(this).css({'color':'#C9C9C9'});
//   		$(this).attr("value","example@xxx.com");
// 	}
// 	else{
// 		$(this).css({'color':'black'});
// 	}

// });


//错误提示
var name_wrong = false;
var code_wrong = false;
var jump = true;


if(name_wrong == true)
{
  $(".login_form_name_tip").show();
}
else
{
  $(".login_form_name_tip").hide();
}

if(code_wrong == true)
{
  $(".login_form_code_tip").show();
}
else
{
  $(".login_form_code_tip").hide();
}

$(".login_form_verify_button").click(function(){
  if(jump == true)
{
  window.location.href = "../html/shouye.html";
}

});


function validate_email(field,alerttxt)
{
with (field)
{
apos=value.indexOf("@")
dotpos=value.lastIndexOf(".")
if (apos<1||dotpos-apos<2) 

  { name_wrong = false;return false}
else {return true}
}
}


//选中框
$("input").focus(function(){
	$(this).css('border-color','rgba(0,0,0,0.4)')
});
$("input").blur(function(){
	$(this).css('border-color','#D9D9D9')
})