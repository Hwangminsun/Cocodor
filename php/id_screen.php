<?
	session_start(); //값을 받아오기 위해서
?>
<!doctype html>
<html lang="ko">
	<head>
		<meta charset="utf-8">
		<title>html5문서</title>
		<link rel="stylesheet" href="css/reset.css">
		<link rel="stylesheet" href="css/base.css">
	<!--	<link rel="stylesheet" href="css/member.css">-->
	   <link rel="stylesheet" href="css/common.css">
		<style>
		body,html {width:100%;height:100%;}
		body {background:url(image/back1.jpg) no-repeat center fixed;
background-size:cover;
}

#join_mem {width:240px;border:1px solid gray;height:100px; padding:10px 5px;
position:absolute;left:50%;top:50%;margin-left:-125px;margin-top:-60px;
/*background:rgba(255,255,255,0.1);*/ border-color:rgba(255,255,255,0.6);
background:transparent;
}



#join_mem  #join2 {
	margin-bottom:10px;

}

#join_mem #join2 li {
    width:100%;
	height:28px; 
	padding-left:8px;
	padding-top:6px;
color:#fff;
}

label.b2{ padding-right:7px;}
#a2 {padding-bottom:3px;}

#join_mem #form_join #join2 input {
    width:150px;
	height:18px;
	border:solid 1px #cccccc;
}


#join_mem #join2 input.hp {
    width:73%;
	height:18px;
	border:solid 1px #cccccc;
}

	
#write_button {text-align:center;}		
		
		
		p.center a {background:rgba(255,255,255,0.9);
  color: #000;  display:inline-block;
  font-weight: bold;
   width: 8em;
  padding: 6px 6px 6px 6px;
  margin-top: 10px;
  text-transform: uppercase;
  position:relative; top:6px;
  }
p.center a:hover{background-color: #000;  color:#fff;
  cursor: pointer;}
		</style>
		
		 
<script>

 </script>
		</head>
	<body>
<div id="join_mem">

        <form  name="member_form" method="post" action="id_search.php"> 
		
	
		
			<div id="join2">
			<ul>
			<li><label for="a1">이름 </label> <input type="text" name="name" width="140px" placeholder="이름" id="a1"></li>
			<li><label for="a2" class="b2">HP</label> 
			<input type="text" class="hp" name="hp"></li>
						</ul>
			</div>
					<div id="write_button"><input type="image" src="image/ok.png"></div>
			</form>
			</div>
  
  
</body>
</html>