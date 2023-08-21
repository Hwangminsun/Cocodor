<meta charset="utf-8">
<?
$id=$_GET['id'];

//입력한 id를 get 방식으로 받아오고, 아이디 입력 안했으면 입력해달라고 하고, 입력했으면 중복체크
if(!$id) // ! 느낌표는 not, 부정의 의미. '아이디가 없다면'
{
  echo("아이디를 입력하세요.");
}
else{
  include "dbconn.php"; // db 접속
  mysqli_query($connect, 'set names utf8');
  $sql = "select * from join_mem where id='$id'";
  $result = mysqli_query( $connect,$sql);
  $num_record = mysqli_num_rows($result);
  if ($num_record)
  {
    echo "아이디가 중복됩니다!<br>";
    echo "다른 아이디를 사용하세요.<br>";
  }
  else
  {
    echo "사용가능한 아이디입니다.";
  }
    mysqli_close($connect);
}
?>