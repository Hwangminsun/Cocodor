<?
  session_start(); //받는 작업을 하기 때문에 세션을 적어준다
?>

<!doctype html>
<html lang="ko">
	<head>
		<meta charset="utf-8">
		<title>html5문서</title>
		<link rel="stylesheet" href="css/reset.css">
		<link rel="stylesheet" href="css/base.css">
		<link rel="stylesheet" href="css/member.css">
	<!--  <link rel="stylesheet" href="css/common.css">-->
<style>
body{font-size:0.8em;}
		#top_login span {padding:0 10px;}
		#top_login {float:right;margin-right:0;margin-top:-15px;}
		#header {margin:10px 10px 0 0;}
		#top_login a {text-decoration:none; color:#999;font-size: "NGothic";}
	#top_login a:hover { color:#666; }
	.clear { clear:both; }
			</style>
<script>
  function check_id()
	{
		window.open("check_id.php?id=" + document.member_form.id.value, 
		// 새창으로 띄워라, get 방식으로 member_form 파일의 id 값을 가져옴?.. ? 물음표는 get 방식....?
				"IDcheck",
				"left=200,top=200,width=200,height=60,scrollbars=no,resizable=yes");
	}

	function check_nick()
	{
		window.open("check_nick.php?nick=" + document.member_form.nick.value,
				"NICKcheck",
				"left=200,top=200,width=200,height=60,scrollbars=no,resizable=yes");
	}

	function check_input()
	{
	if (!document.member_form.pass.value)
	{
			alert("비밀번호를 입력하세요");
			document.member_form.pass.focus(); //해당 칸에 커서 깜빡이는 것
			return;
	}

	if (!document.member_form.pass_confirm.value)
	{
		alert("비밀번호확인을 입력하세요");
		document.member_form.pass_confirm.focus();
		return;
	}

	if (!document.member_form.name.value)
	{
		alert("이름을 입력하세요");
		document.member_form.name.focus();
		return;
	}

	if (!document.member_form.nick.value)
	{
		alert("닉네임을 입력하세요");
		document.member_form.nick.focus();
		return;
	}

	if (!document.member_form.hp.value)
	{
		alert("휴대폰번호를 입력하세요");
		document.member_form.hp.focus();
		return;
	}

	if (!document.member_form.email.value)
	{
		alert("이메일을 입력하세요");
		document.member_form.email.focus();
		return;
	}

	if (document.member_form.pass.value !=
			document.member_form.pass_confirm.value)
	{
		alert("비밀번호가 일치하지 않습니다.\n다시 입력해주세요.");
		document.member_form.pass.focus();
		document.member_form.pass.select();
		return;
	}

	  document.member_form.submit();
}

function reset_form()
   {
      document.member_form.id.value = "";
      document.member_form.pass.value = "";
      document.member_form.pass_confirm.value = "";
      document.member_form.name.value = "";
      document.member_form.nick.value = "";
      document.member_form.hp.value = "";
      document.member_form.email.value = "";
	  
      document.member_form.id.focus();

      return;
   }
</script>
</head>
<body>
	  
</body>
</html>