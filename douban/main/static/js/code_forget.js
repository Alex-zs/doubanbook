

//选中框
$("input").focus(function(){
  $(this).css('border-color','rgba(0,0,0,0.4)')
});
$("input").blur(function(){
  $(this).css('border-color','#D9D9D9')
})

//logo 变化


$(".logo_2").animate({'opacity':'1','margin-top':'48'},2000);
$(".body").find("h3").animate({'opacity':'1'},2000);
//

//input 
$(".regist_form_verify_input").focus(function(){
  $(this).attr("value","");
  $(this).css({'color':'black'});

  
});
$(".regist_form_verify_input").blur(function(){
  // $(this).attr("value","请输入正确的邮箱地址");
  $(this).css({'color':'#C9C9C9'});

});

//input name
$(".regist_form_name_input").focus(function(){
  $(this).attr("value","");
  $(this).css({'color':'black'});

  
});
$(".regist_form_name_input").blur(function(){

    var content=$(this).val();
  	if(content==""){
  		$(this).css({'color':'#C9C9C9'});
  		$(this).attr("value","example@xxx.com");
	}
	else{
		$(this).css({'color':'black'});
	}

});

//input code


$(".regist_form_code_again_input").focus(function(){
	console.log("666");
  $(this).attr("value","");
  $(this).css({'color':'black'});

  
});
$(".regist_form_code_again_input").blur(function(){
  //判断用户是否输入，如果没有输入继续显示提示部分
  var content=$(this).val();
  if(content==""){
  		$(this).css({'color':'#C9C9C9'});
  		// $(this).attr("value","请再次输入密码");
	}
	else{
		$(this).css({'color':'black'});
	}

});


//错误提示
var name_wrong = false;
var code_wrong = false;
var jump = true;
if(name_wrong == true)
{
  $(".regist_form_name_tip").show();
}
else
{
  $(".regist_form_name_tip").hide();
}

if(code_wrong == true)
{
  $(".regist_form_code_again_input_tip").show();
}
else
{
  $(".regist_form_code_again_input_tip").hide();
}

// $(".regist_form_verify_button").click(function(){
//   if(jump == true)
// {
//   window.location.href = "../html/login.html";
// }

// });

var empty_wrong = false;

//验证两次密码是否一致
  function check_code(){
  var input1 = $(".regist_form_code_input").val();
  var input2 = $(".regist_form_code_again_input").val();
  if(input1 != input2)
  {
    code_wrong = true;
    input1.value = ""; 
    input2.value = ""; 
    $(".regist_form_code_again_input_tip").show();
    // $(".regist_form_code_input").val("");
    // $(".regist_form_code_again_input").val("");

    // $(".regist_form_name_input_tip").show();
  }
  else
  {
    code_wrong = false;
    $(".regist_form_code_again_input_tip").hide();
  }
}
$(".regist_form_code_again_input").blur(function(){
  check_code();

})
//验证密码长度是否符合要求
$(".regist_form_code_input").blur(function(){
  if($(".regist_form_code_input").val().length<6)
  {
    $(".regist_form_code_word_tip").show();
    code_wrong = true;
  }
  else{
    $(".regist_form_code_word_tip").hide();
    code_wrong = false;
  }
})

//验证邮箱是否符合规范
function test_you(obj){
//对电子邮件的验证

var email = $(".regist_form_name_input").val();

  var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

  if(!myreg.test(email))
 {
      // alert('提示\n\n请输入有效的E_mail！');
      $(".regist_form_name_input_tip").show();
      name_wrong = true;
      // myreg.focus();
      // return false;
 }
  else{
    $(".regist_form_name_input_tip").hide();
    name_wrong = false;
}

//   var apos=email.indexOf("@")
//   var dotpos=email.lastIndexOf(".")

// if (apos<1||dotpos-apos<2) 
// {
//    $(".regist_form_name_input_tip").show();
//    name_wrong = true;
// }
// else{
//     $(".regist_form_name_input_tip").hide();
//     name_wrong = false;
// }

}
$(".regist_form_name_input").blur(function(obj){
  test_you(obj);
});

//验证表单是否为空
  function mycheck(){
  var name_input = $(".regist_form_name_input").val();
  var code1_input = $(".regist_form_code_input").val();
  var code2_input = $(".regist_form_code_again_input").val();
  if( (name_input == '' || name_input == "example@xxx.com")|| code1_input == '' || code2_input == ''){
      // $(".regist_form_verify_button").attr('disabled','true');
      // $(".regist_form_verify_button").css('background-color','#C9C9C9')
      alert('表单不能为空');
      return false;
      // empty_wrong = true;
    }
    else if( name_wrong == true || code_wrong == true){
      return false;
    }
    else{
      // empty_wrong =false;
      // $(".regist_form_verify_button").removeAttr('disabled')
      // window.location.href = "../html/login.html";

      return true;
    }
    
    
  
}
