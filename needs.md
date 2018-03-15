# 豆瓣读书管理系统
-------------------
### 豆瓣读书管理系统需求说明书
#### 目录

    1. 引言  
	    1.1 系统概述  
    	1.2 业务流程  
	2. 系统结构体系  
		2.1 模块描述  
			2.1.1 用户模块
			2.1.2 文章模块
			2.1.3 图书模块
			2.1.4 搜索功能
			2.1.5 评论功能
			2.1.6 后台管理
	3. 功能需求分析  
		3.1 用户模块
			3.1.1 注册  
			3.1.2 找回密码  
			3.1.3 登录  
			3.1.4 修改个人信息 
			3.1.5 退出登录   
		3.2 文章模块  
			3.2.1 写文章  
			3.2.2 浏览文章  
			3.2.3 修改、删除文章
		3.3 图书模块
			3.3.1 新增图书
			3.3.2 管理图书
			3.3.3 浏览图书
		3.4 搜索功能
			3.4.1 搜索文章
			3.4.2 搜索图书
		3.5 评论功能
			3.5.1 添加评论
			3.5.2 删除评论
		3.6 后台管理
			3.6.1 修改权限
	4.数据库设计
		

### 1. 引言
#### 1.1 系统概述
<pre >
豆瓣读书管理系统是为了使用户可以浏览各种热门文章以及图书信息，
用户可以通过搜索来获取自己想要的信息，同时用户可以发表文章。
后台可以方便的管理用户、文章以及更新图书信息。
</pre>

#### 1.2业务流程
<img width="800" height="600" src="https://github.com/Alex-zs/doubanbook/blob/master/liuchengtu.png?raw=true">

### 2. 系统结构体系

#### 2.1 模块描述
	2.1.1用户模块
<table>
	<tr>
	    <td>模块说明</td>
	    <td colspan="2">用于对网站使用者进行权限分级和信息管理的模块，包括登录注册忘记密码，用户个人信息修改</td>
	</tr>
	<tr>
	    <td rowspan="4"> 参与者</td>
	    <td>游客</td>
	    <td>可注册普通用户、忘记密码。可进行登录变为普通用户或管理员。拥有游客权限</td>
	</tr>
	<tr>
	    <td>普通用户</td>
	    <td>可编辑自身信息。拥有普通用户权限。退出后变为游客</td>
	</tr>
	<tr>
	    <td>管理员</td>
	    <td>可编辑网站信息。拥有管理员权限。退出后变为游客</td>
	</tr>
</table>
<br>

	2.1.2 文章模块
<table>
	<tr>
	    <td>模块说明</td>
	    <td colspan="2">用于对文章进行管理，包括文章内容的查看、添加和删改。文章以列表形式列出，点入后显示文章内容</td>
	</tr>
	<tr>
	    <td rowspan="4"> 参与者</td>
	    <td>游客</td>
	    <td>可浏览文章</td>
	</tr>
	<tr>
	    <td>普通用户</td>
	    <td>可创建文章，并对自己创建的文章拥有修改和删除的权限</td>
	</tr>
	<tr>
	    <td>管理员</td>
	    <td>对任何文章拥有删除权限</td>
	</tr>
</table>
<br>

	2.1.3 图书模块
<table>
	<tr>
	    <td>模块说明</td>
	    <td colspan="2">用于对图书进行管理，包括图书内容的查看、添加和删改。图书以列表形式列出，点入后显示详细信息</td>
	</tr>
	<tr>
	    <td rowspan="4"> 参与者</td>
	    <td>游客、普通用户</td>
	    <td>可浏览图书信息</td>
	</tr>
	<tr>
	    <td>管理员</td>
	    <td>可新建图书、编辑图书，并对图书信息进行删改</td>
	</tr>
</table>
<br>

	2.1.4 搜索功能
<table>
	<tr>
	    <td>模块说明</td>
	    <td colspan="2">使用页面上方的搜索框并选择类别可对站内信息进行搜索。在图书或文章列表显示的页面也可使用标签进行筛选</td>
	</tr>
	<tr>
	    <td rowspan="4"> 参与者</td>
	    <td>游客、普通用户</td>
	    <td>可在搜索框内选择图书或文章，然后搜索，也可在图书或文章列表页面使用标签搜索</td>
	</tr>
	<tr>
	    <td>管理员</td>
	    <td>可在搜索框内选择图书、文章或用户，然后搜索，也可在图书或文章列表页面使用标签搜索</td>
	</tr>
</table>
<br>

	2.1.5 评论功能
<table>
	<tr>
	    <td>模块说明</td>
	    <td colspan="2">用于管理评论的模块。文章和图书可以被评论</td>
	</tr>
	<tr>
	    <td rowspan="4"> 参与者</td>
	    <td>普通用户</td>
	    <td>在文章内容或图书详细信息页面下方可以添加评论。可以删除自己写的评论</td>
	</tr>
	<tr>
	    <td>管理员</td>
	    <td>可以删除任何评论</td>
	</tr>
</table>
<br>

	2.1.6 后台管理
<table>
	<tr>
	    <td>模块说明</td>
	    <td colspan="2">使用django的后台管理系统，能对各用户组的权限进行更改</td>
	</tr>
	<tr>
	    <td rowspan="4"> 参与者</td>
	    <td>超级管理员</td>
	    <td>可以更改游客、普通用户、管理员各用户组的权限，可以将普通用户提升为管理员</td>
	</tr>
</table>
<br>

### 3.功能需求分析
    3.1 用户模块
    
 <table>
    <tr>
    <td>模块说明</td>
    <td colspan="2">该模块的功能为提供注册登录，修改个人信息，忘记密码找回，退出登录</td>
    </tr>
    <tr>
    <td>流程举例
    <td width="90%">
    注册：</br>
    1、用户在主页点击注册按钮，跳转到注册页面<br>
    2、根据提示填写完个人信息，点击注册<br>
    3、收到验证码后输入验证码，提示注册成功<br>
    登录：<br>
    1、用户在主页点击登录，跳转到登录页面<br>
    2、按照提示输入个人信息和验证码<br>
    3、登录成功后进入个人主页<br>
    修改个人信息：</br>
    1、用户登录，进入个人主页</br>
    2、点击修改个人信息按钮</br>
    3、根据提示修改个人信息</br>
    4、点击保存</br>
    找回密码：</br>
    1、进入主页，点击登录</br>
    2、点击忘记密码</br>
    3、根据提示输入信息</br>
    4、收到验证码后输入验证码</br>
    5、进入修改密码页面修改密码</br>
    6、修改成功后进入主页</br>
    </tr>
</table>

    3.2 文章模块
<table>
<tr>
<td>
模块说明
</td>
<td width="90%">
该模块说明用户如何添加、修改文章
</td>
</tr>
<tr>
<td>
流程举例
</td>
<td>
添加文章:</br>
1、登录进入个人主页</br>
2、点击添加文章</br>
3、输入文章信息</br>
4、点击发布</br>
删除文章：</br>
1、进入个人主页</br>
2、选择文章</br>
3、选择删除</br>
修改文章：</br>
1、进入个人主页</br>
2、选择文章</br>
3、选择编辑</br>
4、点击保存</br>
</table>

    3.3 图书模块

<table>
<tr>
<td>
模块说明</td>
<td width="90%">
该模块说明管理员如何在后台管理图书
</td>
</tr>
<tr>
<td>流程举例
</td>
<td>
新增图书：</br>
1、进入后台</br>
2、选择图书模块</br>
3、点击增加</br>
4、输入图书信息</br>
5、点击保存</br>
删除图书：</br>
1、进入后台</br>
2、选择图书模块</br>
3、点击删除</br>
编辑图书</br>
1、进入后台</br>
2、选择图书模块</br>
3、点击编辑</br>
4、保存修改</br>
</td>
</table>

    3.4 搜索模块
<table>
<tr>
<td>
模块说明
</td>
<td width="90%">
该模块说明如何使用搜索功能
</td>
</tr>
<tr>
<td>
流程举例</td>
<td>
 1、选择搜索类别</br>
 2、输入有效信息</br>
 3、点击搜索</br>
 </td>
</table>

    3.5 评论模块
<table>
<tr>
<td>
模块说明
</td>
<td colspan="2" width="90%">
该模块说明与评论有关的功能
</td>
</tr>
<tr>
<td>
删除评论
</td>
<td width="20%">
管理员
</td>
<td>
进入后台，选择评论模块，选择删除选项，确认
</td>
</tr>
<tr>
<td>
添加评论
</td>
<td width="10">
用户
</td>
<td>
在文章或图书下方添加评论
</td>
</table>

    3.6 后台管理
<table>
<tr>
<td>
模块说明
</td>
<td width="90%">
说明与后台有关的操作
</td>
</tr>
<tr>
<td>
管理员
</td>
<td>
1、用户管理<br>
2、文章管理<br>
3、图书管理<br>
4、评论管理<br>
</table>
### 4. 数据库设计
<table>
	表 用户（user）
	<tr>
	    <td>序号</td>
	    <td>字段名（英文）</td>
	    <td>字段名（中文）</td>
		<td>字段类型</td>
		<td>建</td>
		<td>NULL</td>
		<td>默认值</td>
		<td>备注</td>	
	</tr>
	<tr>
	    <td>1</td>
	    <td>id</td>
	    <td>编号</td>
	    <td>INT</td>
	    <td>P</td>
	    <td>N</td>
	    <td></td>
	    <td></td>
	</tr>
	<tr>
		<td>2</td>
	    <td>username</td>
	    <td>用户名</td>
	    <td>VARCHAR(20)</td>
	    <td></td>
	    <td>N</td>
	    <td></td>
	    <td></td>
	</tr>
	<tr>
		<td>3</td>
	    <td>password</td>
	    <td>密码</td>
	    <td>VARCHAR(40)</td>
	    <td></td>
	    <td>N</td>
	    <td></td>
	    <td>将原密码md5后储存</td>
	</tr>
	<tr>
		<td>4</td>
	    <td>power</td>
	    <td>权限等级</td>
	    <td>INT</td>
	    <td></td>
	    <td></td>
	    <td></td>
	    <td></td>
	</tr>
	<tr>
		<td>5</td>
	    <td>nickname</td>
	    <td>昵称</td>
	    <td>VARCHAR(20)</td>
	    <td></td>
	    <td></td>
	    <td></td>
	    <td></td>
	</tr>
	<tr>
		<td>6</td>
	    <td>email</td>
	    <td>邮箱</td>
	    <td>VARCHAR(30)</td>
	    <td></td>
	    <td>N</td>
	    <td></td>
	    <td></td>
	</tr>
	<tr>
		<td>7</td>
	    <td>introduction</td>
	    <td>简介</td>
	    <td>VARCHAR(100)</td>
	    <td></td>
	    <td></td>
	    <td></td>
	    <td></td>
	</tr>
	<tr>
		<td>8</td>
	    <td>head</td>
	    <td>头像</td>
	    <td>VARCHAR(30)</td>
	    <td></td>
	    <td>N</td>
	    <td>默认头像链接</td>
	    <td>存储图像所在位置的链接</td>
	</tr>
</table><br>

<table>
	表 文章（article）
	<tr>
	    <td>序号</td>
	    <td>字段名（英文）</td>
	    <td>字段名（中文）</td>
		<td>字段类型</td>
		<td>建</td>
		<td>NULL</td>
		<td>默认值</td>
		<td>备注</td>	
	</tr>
	<tr>
	    <td>1</td>
	    <td>id</td>
	    <td>编号</td>
	    <td>INT</td>
	    <td>P</td>
	    <td>N</td>
	    <td></td>
	    <td></td>
	</tr>
	<tr>
		<td>2</td>
	    <td>title</td>
	    <td>标题</td>
	    <td>VARCHAR(20)</td>
	    <td></td>
	    <td>N</td>
	    <td></td>
	    <td></td>
	</tr>
	<tr>
		<td>3</td>
	    <td>content</td>
	    <td>内容</td>
	    <td>VARCHAR(500)</td>
	    <td></td>
	    <td>N</td>
	    <td></td>
	    <td>使用了富文本编辑器，存储的是一段html</td>
	</tr>
	<tr>
		<td>4</td>
	    <td>createTime</td>
	    <td>创建时间</td>
	    <td>DATETIME</td>
	    <td></td>
	    <td>N</td>
	    <td></td>
	    <td></td>
	</tr>
	<tr>
		<td>5</td>
	    <td>lastEditTime</td>
	    <td>最后修改时间</td>
	    <td>DATETIME</td>
	    <td></td>
	    <td>N</td>
	    <td></td>
	    <td></td>
	</tr>
	<tr>
		<td>6</td>
	    <td>owner</td>
	    <td>所有者</td>
	    <td>INT</td>
	    <td></td>
	    <td>N</td>
	    <td></td>
	    <td>存储编辑文章的人</td>
	</tr>
	<tr>
		<td>7</td>
	    <td>label</td>
	    <td>分类标签</td>
	    <td>INT</td>
	    <td></td>
	    <td></td>
	    <td></td>
	    <td></td>
	</tr>
</table><br>

<table>
	表 图书（book）
	<tr>
	    <td>序号</td>
	    <td>字段名（英文）</td>
	    <td>字段名（中文）</td>
		<td>字段类型</td>
		<td>建</td>
		<td>NULL</td>
		<td>默认值</td>
		<td>备注</td>	
	</tr>
	<tr>
	    <td>1</td>
	    <td>id</td>
	    <td>编号</td>
	    <td>INT</td>
	    <td>P</td>
	    <td>N</td>
	    <td></td>
	    <td></td>
	</tr>
	<tr>
		<td>2</td>
	    <td>bookname</td>
	    <td>书名</td>
	    <td>VARCHAR(20)</td>
	    <td></td>
	    <td>N</td>
	    <td></td>
	    <td></td>
	</tr>
	<tr>
		<td>3</td>
	    <td>introduction</td>
	    <td>介绍</td>
	    <td>VARCHAR(500)</td>
	    <td></td>
	    <td>N</td>
	    <td></td>
	    <td>使用了富文本编辑器，存储的是一段html</td>
	</tr>
	<tr>
		<td>4</td>
	    <td>createTime</td>
	    <td>创建时间</td>
	    <td>DATETIME</td>
	    <td></td>
	    <td>N</td>
	    <td></td>
	    <td></td>
	</tr>
	<tr>
		<td>5</td>
	    <td>lastEditTime</td>
	    <td>最后修改时间</td>
	    <td>DATETIME</td>
	    <td></td>
	    <td>N</td>
	    <td></td>
	    <td></td>
	</tr>
	<tr>
		<td>6</td>
	    <td>owner</td>
	    <td>所有者</td>
	    <td>INT</td>
	    <td></td>
	    <td>N</td>
	    <td></td>
	    <td>存储编辑图书的管理员</td>
	</tr>
	<tr>
		<td>7</td>
	    <td>label</td>
	    <td>分类标签</td>
	    <td>INT</td>
	    <td></td>
	    <td></td>
	    <td></td>
	    <td></td>
	</tr>
	<tr>
		<td>8</td>
	    <td>cover</td>
	    <td>封面</td>
	    <td>VARCHAR(30)</td>
	    <td></td>
	    <td>N</td>
	    <td>默认无封面图片</td>
	    <td>存储图像所在位置的链接</td>
	</tr>
</table><br>

<table>
	表 评论（comment）
	<tr>
	    <td>序号</td>
	    <td>字段名（英文）</td>
	    <td>字段名（中文）</td>
		<td>字段类型</td>
		<td>建</td>
		<td>NULL</td>
		<td>默认值</td>
		<td>备注</td>	
	</tr>
	<tr>
	    <td>1</td>
	    <td>id</td>
	    <td>编号</td>
	    <td>INT</td>
	    <td>P</td>
	    <td>N</td>
	    <td></td>
	    <td></td>
	</tr>
	<tr>
		<td>2</td>
	    <td>type</td>
	    <td>类型</td>
	    <td>VARCHAR(20)</td>
	    <td></td>
	    <td>N</td>
	    <td></td>
	    <td>文章评论或是图书评论</td>
	</tr>
	<tr>
		<td>3</td>
	    <td>fatherId</td>
	    <td>父编号</td>
	    <td>INT</td>
	    <td></td>
	    <td>N</td>
	    <td></td>
	    <td>评论对象编号</td>
	</tr>
	<tr>
		<td>4</td>
	    <td>content</td>
	    <td>内容</td>
	    <td>VARCHAR(500)</td>
	    <td></td>
	    <td>N</td>
	    <td></td>
	    <td>评论正文</td>
	</tr>
	<tr>
		<td>5</td>
	    <td>createTime</td>
	    <td>创建时间</td>
	    <td>DATETIME</td>
	    <td></td>
	    <td>N</td>
	    <td></td>
	    <td></td>
	</tr>
	<tr>
		<td>6</td>
	    <td>owner</td>
	    <td>所有者</td>
	    <td>INT</td>
	    <td></td>
	    <td>N</td>
	    <td></td>
	    <td>发表评论者</td>
	</tr>
</table><br>

<table>
	表 标签（label）
	<tr>
	    <td>序号</td>
	    <td>字段名（英文）</td>
	    <td>字段名（中文）</td>
		<td>字段类型</td>
		<td>建</td>
		<td>NULL</td>
		<td>默认值</td>
		<td>备注</td>	
	</tr>
	<tr>
	    <td>1</td>
	    <td>id</td>
	    <td>编号</td>
	    <td>INT</td>
	    <td>P</td>
	    <td>N</td>
	    <td></td>
	    <td></td>
	</tr>
	<tr>
		<td>2</td>
	    <td>name</td>
	    <td>标签名</td>
	    <td>VARCHAR(10)</td>
	    <td></td>
	    <td>N</td>
	    <td></td>
	    <td></td>
	</tr>
	<tr>
		<td>3</td>
	    <td>type</td>
	    <td>类型</td>
	    <td>VARCHAR(20)</td>
	    <td></td>
	    <td>N</td>
	    <td></td>
	    <td>图书或是文章</td>
	</tr>
</table><br>

<table>
	表 权限（power）
	<tr>
	    <td>序号</td>
	    <td>字段名（英文）</td>
	    <td>字段名（中文）</td>
		<td>字段类型</td>
		<td>建</td>
		<td>NULL</td>
		<td>默认值</td>
		<td>备注</td>	
	</tr>
	<tr>
	    <td>1</td>
	    <td>id</td>
	    <td>编号</td>
	    <td>INT</td>
	    <td>P</td>
	    <td>N</td>
	    <td></td>
	    <td></td>
	</tr>
	<tr>
		<td>2</td>
	    <td>describe</td>
	    <td>描述</td>
	    <td>VARCHAR(30)</td>
	    <td></td>
	    <td>N</td>
	    <td></td>
	    <td>权限的文字描述</td>
	</tr>
	<tr>
		<td>3</td>
	    <td>level</td>
	    <td>等级</td>
	    <td>INT</td>
	    <td></td>
	    <td>N</td>
	    <td></td>
	    <td>使用该权限所需等级</td>
	</tr>
</table>
