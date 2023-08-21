<?
    session_start();
?>
<meta charset="utf-8">
<?

/* 추가한곳*/
// $id = $_POST['id']; 
$userid=$_POST['id']; // post 나 get 으로 값을 받아줘야 한다. form action='' 은 거의 post 방식, ? 물음표는 get방식이라고 생각하면 됨
   $pass = $_POST['pass'];  
   $name = $_POST['name'];
   $nick = $_POST['nick'];
   $hp = $_POST['hp'];
   /*$hp2 = $_POST['hp2'];
   $hp3 = $_POST['hp3']; 
   $email1 = $_POST['email1'];*/
   $email = $_POST['email'];
/* 추가한곳 끝*/

  // $hp = $hp1."-".$hp2."-".$hp3;
 // $email = $email1."@".$email2;
/*
 $hp = $hp3;
$email = $email;
*/

    
   include "dbconn.php";      
   	     mysqli_query($connect,'set names utf8');  

    $sql = "update join_mem set pass='$pass', name='$name' , ";
    $sql .= "nick='$nick', hp='$hp', email='$email' where id='$_SESSION[userid]'";
	//위  문장 수정한것
//	 $sql .= "nick='$nick', hp='$hp', email='$email', regist_day='$regist_day' where id='$userid'"; 원본
 
//나중에 삭제할것
/*echo $sql;  //위의 결과 메시지확인하기
exit;// 위와 같이 작성*/
//나중에 삭제할 내용 끝



 $result = mysqli_query( $connect,$sql) ;

   mysqli_close($connect);                
   echo "
	   <script>
	    location.href = 'main.html';
	   </script>
	";
?>
