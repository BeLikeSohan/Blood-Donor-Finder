<?php
session_start();

$doner_name = $_POST['NAME'];
$doner_email = $_POST['EMAIL'];
$doner_image_url = $_POST['IMAGE'];
$doner_id_token = $_POST['ID_TOKEN'];


$server_name = "localhost";
$username = "root";
$password = "";
$database = "test";

$verify_url = "https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=".$doner_id_token;

$response = get_headers($verify_url);
if($response[0] == 'HTTP/1.0 200 OK'){

	$sql = "SELECT ID FROM DONERS_LOGIN_DATA WHERE EMAIL='".$doner_email."';";
	$connection = mysqli_connect($server_name, $username, $password, $database);

	if($connection === false){
		die("ERROR: " . mysqli_connect_error());
	}

	if($check = mysqli_query($connection, $sql)){
		if(mysqli_num_rows($check)>0) {
			while($row = mysqli_fetch_array($check)){
				$_SESSION['doner_id'] = $row['ID'];
				echo '<script> window.location.href="/profile.php?id='.$_SESSION['doner_id'].'"</script>';
			}
		}else{
			$_SESSION["EMAIL"] = $doner_email;
			echo '<script> window.location.href = "/join.html"; </script>';
		}
	}
}else{
	echo '<script>alert("Something went wrong, please retry");</script>';
}
?>
