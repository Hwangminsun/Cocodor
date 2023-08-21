	<div id="top_login">
  
	  
	  <?
    if(!$_SESSION['userid'] )
	{
?>
          <a href="login_form.php">로그인</a> | <a href="member_form.php">회원가입</a> | <a href="board/list.php">가입인사</a>| <a href="qna/list.php">Q&A</a>
<?
	}
	else
	{
?>
		<?=$_SESSION['usernick']?> | 
		<a href="logout.php">로그아웃</a> | <a href="member_form_modify.php">정보수정</a>
<?
	}
?>
	  
     </div>
  
