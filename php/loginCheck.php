<?php
	session_start();
	
	require("./db_conn/mysql.php");
	
	$mail = $_POST["mail"];
	$passwd = $_POST["password"];
	
	$registered_user=mysql_fetch_array(mysql_query("select E_mail, Password from Utente where E_mail='$mail'"));
	
	if(($mail==$registered_user[0]) && ($passwd==$registered_user[1])) {
		$_SESSION['b-login-connected']=$mail;
		echo "Utente connesso con successo!";
	} else {
		echo "Utente non esistente!";
	}
	
	mysql_close($conn);
?>