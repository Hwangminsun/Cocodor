<?
// login_form.php 에서 post 방식으로 login.php 파일로 값을 받는다.
    session_start();
?>
<meta charset="utf-8">

<?

  $id=$_POST['id']; // 넘어온 id 값, post 방식.
  if(!$id) { //느낌표는 같지 않다, 아니다 라는 뜻
      echo("
            <script>
              window.alert('아이디를 입력하세요.')
              history.go(-1) // history.go(-1) : 이전페이지로
            </script>
          ");
          exit;
  }

  // 비밀번호 if 문도 써줘야. 비밀번호도 앞전 파일의 폼에 있고, 비밀번호 값을 받아와서 비교해서 로그인.
  $pass=$_POST['pass'];
  if(!$pass) {
    echo("
        <script>
        window.alert('비밀번호를 입력하세요.')
        history.go(-1)
        </script>
      ");
      exit;
  }

  include "dbconn.php";
  mysqli_query($connect,'set names utf8'); // 괄호 안 뒷부분은 한글이 깨지지 않게 하는 문구

  $sql = "select * from join_mem where id='$id'";
  $result = mysqli_query($connect,$sql);
  
  $num_match = mysqli_num_rows($result); //배열로 가져옴
 
  if(!$num_match)
  {
      echo("
        <script>
          window.alert('등록되지 않은 아이디입니다.')
          history.go(-1)
        </script>
      ");
  }
else
{
  $row = mysqli_fetch_array($result);

  $db_pass = $row['pass']; // 연관배열을 가져올 수 있다
  
  if($pass != $db_pass)
  {
      echo("
        <script>
          window.alert('비밀번호가 틀립니다.')
          history.go(-1)
        </script>
      ");

      exit;
  }
    else{

      $userid = $row['id'];
      $username = $row['name'];
      $usernick = $row['nick'];

      $_SESSION['userid'] = $userid;
      $_SESSION['username'] = $username;
      $_SESSION['usernick'] = $usernick;

      echo("
      <script>
        location.href = '../index.html'; 
      </script>
    ");
      // 로긴했으면 main.html 로 이동해라
    }
  }
?>