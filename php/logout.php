<?
  session_start();
  unset($_SESSION['userid']); //unset 은 로그아웃 한다는 뜻
  unset($_SESSION['username']);
  unset($_SESSION['usernick']);
 
  // 로그아웃 후 main.html 로 이동
  echo("
       <script>
          location.href = '../index.html'; 
         </script>
       ");
?>
