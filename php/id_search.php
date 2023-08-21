<?
  session_start(); //받는 작업을 하기 때문에 세션을 적어준다
?>
<meta charset="utf-8">
<?

include "dbconn.php";
mysqli_query($connect,'set names utf8');

$name=$_POST['name'];
$hp=$_POST['hp'];

$sql = "select * from join_mem where name='$name' AND hp='$hp'";
$result = mysqli_query( $connect,$sql);
$num_match = mysqli_fetch_array($result);

if(!empty($num_match)){
    echo "<script>alert('회원님의 아이디는 $num_match[id]입니다. 로그인해주세요*^^*');
    location.href='login_form.php';</script>";
}
else{
    echo $hp."<script>alert('아이디 찾기 실패');</script>";
    }
mysqli_close($connect);
?>