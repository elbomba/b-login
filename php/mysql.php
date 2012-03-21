<?php
	$host="localhost";
	$user="root";
	$passwd="root";
	$db="MoneyBox";

	$connnect=mysql_connect($host, $user, $passwd)
	or die("Impossibile contattare il server");
	$db_select=mysql_select_db($db)
	or die("Impossibile contattare il database");
?>