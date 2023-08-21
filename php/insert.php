<?
           session_start();
?>
<meta charset="utf-8">
<?
  $id=$_POST['id'];
  $pass=$_POST['pass'];
  $name=$_POST['name'];
  // $nick=$_POST['nick'];
  $hp = $_POST['hp'];
  $email = $_POST['email'];

  $ip = $REMOTE_ADDR;

  include "dbconn.php";       
  mysqli_query($connect,'set names utf8');  

  $sql = "select * from join_mem where id='$id'";
  $result = mysqli_query( $connect,$sql);
  $exist_id = mysqli_num_rows($result);
  if($exist_id) {
    echo("
          <script>
            window.alert('해당 아이디가 존재합니다.')
            history.go(-1)
          </script>
        ");
        exit;
  }
  else{
    $sql = "insert into join_mem(id, pass, name, hp, email) ";
    $sql .= "values('$id', '$pass', '$name', '$hp', '$email')";
    mysqli_query( $connect,$sql); 
  }
  mysqli_close($connect);  

  echo "
  <script>
   location.href = '../index.html';
  </script>
";

?>

