<?php
session_start();
if(true) // DEBUG MODE = TRUE | ORIGINAL NODE: session_status()==2;
{
	$doner_id = $_SESSION['doner_id'];
	$new_note = $_POST['b'];

	$server_name = "127.0.0.1";
	$username = "root";
	$password = "";
	$database = "test";

	$sql = 'SELECT * FROM DONERS WHERE ID='.$doner_id;
	$sql_change = 'UPDATE DONERS SET NOTE="'.$new_note.'"';
	$connection = mysqli_connect($server_name, $username, $password, $database);

	if($connection == false)
	{
		die("ERROR: " . mysqli_connect_error());
	}

	mysqli_query($connection, "SET NAMES utf8mb4");
	if($result = mysqli_query($connection, $sql))
	{

		if(mysqli_num_rows($result)>0){
			mysqli_query($connection, $sql_change);
			echo '<script> window.location.href="/profile.php?id='.$doner_id.'"; </script>';
		}
	}
}

?>
