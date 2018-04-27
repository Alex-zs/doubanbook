//3、（字符）检查文件上传表单控件，如果含有[jpg,jpeg,gif,png]则显示“文件类型合法”，否则“显示文件类型错误”
 
function checkFileExt(filename)
{
 var flag = false; //状态
 var arr = ["jpg","png","gif"];
 //取出上传文件的扩展名
 var index = filename.value.lastIndexOf(".");
 var ext = filename.value.substr(index+1);
 //循环比较
 for(var i=0;i<arr.length;i++)
 {
  if(ext == arr[i])
  {
   flag = true; //一旦找到合适的，立即退出循环
   break;
  }
 }
 //条件判断
 if(flag)
 {
  // document.write("文件名合法");
 }else
 {
  alert("文件名不合法");
  filename.value = "";
  return false;
 }
}

// $(".personal_change_sign_input textarea").each(function(){

// 	var comment_length = $(this).val().length ;
// 	if( comment_length >30){
// 		$(this).val($(this).val().substring(0,30))

// 	}
// })
function checkenter(){
	$(".personal_change_sign_input textarea").keydown(function(event){

	if(event.keyCode == 13 || event.keyCode == 32)
	{
	window.event.returnValue = false;
	}
	else{
		var comment_length = $(".personal_change_sign_input textarea").val().length ;
	if( comment_length >25){
		$(this).val($(this).val().substring(0,25))
	}
	}
	})

	
}

// 	$(".personal_body_perinfo_write").click(function(){
// 	$(".personal_body_perinfo_words").removeAttr('disabled');
// 	$(".personal_body_perinfo_words").removeProp('border')
// 	console.log("666")
// 	$(".personal_body_perinfo_words").focus();

// });
// $(".personal_body_perinfo_words").blur(function(){
// 	$(this).attr('disabled','disabled');
// 	$(this).css({'border':'none'})
	
// });
$(".regist_form_name_input").keydown(function(){
	if($(this).val().length>7)
{
	$(".regist_form_name_input_tip").show();
	$(this).val($(this).val().substring(0,7))
}
else{
	$(".regist_form_name_input_tip").hide();
}

	
}
)

$(".regist_form_name_input").keyup(function(){
	if($(this).val().length<=7)
{
	$(".regist_form_name_input_tip").hide();
}

	
}
)
$(".regist_form_name_input").blur(function(){

	$(".regist_form_name_input_tip").hide();
	

	
}
)