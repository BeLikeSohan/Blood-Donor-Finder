<?php
session_start();
if(true) // DEBUG MODE = TRUE | ORIGINAL NODE: session_status()==2;
{
	$doner_id = $_SESSION['doner_id'];
	$new_name = $_POST['b'];
	$new_phonenumber = $_POST['a'];
	$new_bloodgroup = $_POST['c'];
	//$new_bivag = $_POST['NEW_BIVAG'];
	//$new_zilla = $_POST['NEW_ZILLA'];
	//$new_upazilla = $_POST['NEW_UPAZILLA'];
	//$is_profile_picture_changed = $_POST['is_profile_picture_changed'];


	$server_name = "127.0.0.1";
	$username = "root";
	$password = "";
	$database = "test";

	$sql = 'SELECT * FROM DONERS WHERE ID='.$doner_id;
	$sql_change = 'UPDATE DONERS SET NAME="'.$new_name.'", BLOODGROUP="'.$new_bloodgroup.'", PHONENUMBER="'.$new_phonenumber.'";';
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
