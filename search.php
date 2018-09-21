<?php

$server_name = "localhost";
$username = "root";
$password = "";
$database = "test";

$blood_group = $_POST['bloodgroup'];
$upazilla = $_POST['upazilla'];
$zilla = $_POST['zilla'];
$bivag = $_POST['bivag'];
$from = $_POST['from'];
$to = $_POST['to'];

$sql = 'SELECT ID, name, phonenumber, bloodgroup FROM DONERS WHERE bloodgroup = "' . $blood_group . '" AND upazilla = "' . $upazilla . '" AND zilla = "' . $zilla . '" AND bivag = "' . $bivag . '" AND IS_APPROVED="YES" ' . ' LIMIT ' . $from .', '.$to.';';
$check_count = 'SELECT ID, name, phonenumber, bloodgroup FROM DONERS WHERE bloodgroup = "' . $blood_group . '" AND upazilla = "' . $upazilla . '" AND zilla = "' . $zilla . '" AND bivag = "' . $bivag . '" AND IS_APPROVED="YES";';
$connection = mysqli_connect($server_name, $username, $password, $database);

if($connection === false){
	die("ERROR: " . mysqli_connect_error());
}

$connection->query("SET NAMES 'utf8'");
if($check = mysqli_query($connection, $check_count)){
	$count = mysqli_num_rows($check);
}

if($result = mysqli_query($connection, $sql)){
	if(mysqli_num_rows($result)>0){

		echo '<ul class="list-group">';
		echo '<p class="hide" id="count">'.$count.'</p>';
		while($row = mysqli_fetch_array($result)){

			if(file_exists('resource/members/avatars/'.$row['ID'].'.png')){
				$image_extentsion = '.png';
			}elseif(file_exists('resource/members/avatars/'.$row['ID'].'.jpg')){
				$image_extentsion = '.jpg';
			}elseif(file_exists('resource/members/avatars/'.$row['ID'].'.jpeg')){
				$image_extentsion = '.jpeg';
				}

			echo '<a href="/doner.php?id=' . $row['ID'] . '" class="list-group-item"> <table><tr><td><img src="resource/members/avatars/' . $row['ID'].$image_extentsion. '" height="53" width="53"/></td> <td style="padding-left:5px"><p class="list_text">' . $row['name'] . '<br>' . $row['bloodgroup'] . '</p></td></tr></table></a>';
		}
		echo '</ul>';
		mysqli_free_result($result);
	}
}



mysqli_close($connection);
?>
