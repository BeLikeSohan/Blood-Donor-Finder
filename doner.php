<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="./js/jquery-2.2.4.min.js" ></script>
    <link rel="stylesheet" href="./css/bootstrap.min.css" >
    <script src="./js/bootstrap.min.js" ></script>
    <link rel="stylesheet" href="./css/animate.min.css">
    <script src="./js/script.js"></script>
    <script src="./js/doner_profile.js"></script>
    <link rel="stylesheet" href="./css/style.css" />
</head>

<?php
if(!is_numeric($_GET['id'])){echo "<script> window.location.href='/'; </script>";}

if(isset($_GET['id'])){
	$doner_id = $_GET['id'];
	$server_name = "127.0.0.1";
	$username = "root";
	$password = "";
	$database = "test";

	$sql = 'SELECT * FROM DONERS WHERE ID='.$doner_id;
	$connection = mysqli_connect($server_name, $username, $password, $database);

	if($connection == false)
	{
		die("ERROR: " . mysqli_connect_error());
	}

	mysqli_query($connection, "SET NAMES utf8mb4");

	if($result = mysqli_query($connection, $sql))
	{

		if(mysqli_num_rows($result)>0){
			while($row = mysqli_fetch_array($result)){
				$doner_name = $row['NAME'];
				$doner_birthdate = $row['BIRTHDATE'];
				$doner_phonenumber = $row['PHONENUMBER'];
				$doner_bloodgroup = $row['BLOODGROUP'];
				$doner_upazilla = $row['UPAZILLA'];
				$doner_zilla = $row['ZILLA'];
				$doner_bivag = $row['BIVAG'];
        $doner_note = $row["NOTE"];
		}
  }else{echo "<script> window.location.href='/'; </script>";}
	}
	$dates = explode("-", $doner_birthdate);
	$doner_birth_year = $dates[0];
	$current_year = date("Y");
	$doner_age = ($current_year - $doner_birth_year);
}

?>

<title><?php echo $doner_name . ' - Roktozoddha '; ?> </title>

<body>

<div class="no-top-padding">
<div id="doner_page_top_bar">
<p id="doner_page_top_bar_title_text">lorem ipsum</p>
</div>
</div>

<div class="container">
    <img id="doner_profile_pic" class="img-circle" align="middle" src="resource/members/avatars/<?php
  if(file_exists('resource/members/avatars/'.$doner_id.'.png')){
    echo $doner_id.'.png';
  }
  elseif(file_exists('resource/members/avatars/'.$doner_id.'.jpg')){
    echo $doner_id.'.jpg';
  }
  elseif(file_exists('resource/members/avatars/'.$doner_id.'.jpeg')){
    echo $doner_id.'.jpeg';
  }
  ?>" height="110px" width="110px" alt="<?php echo $doner_name ?>"/>

  <div id = "doner_picture_model">>
    <span class="close">&times;</span>
    <img class="model_picture" id="doner_profile_pic_model">
    <div id="doner_name_model"></div>
  </div>

<p id="doner_name"><?php echo $doner_name; ?></p>
<p id="doner_bloodgroup" class="">O Positive (O+)</p>

<table align="center">
<tr>
<td><a href=<?php echo '"tel:0'.$doner_phonenumber.'"'; ?> > <input type="button" class="btn btn-success" value="Call Now"></a></td>
<td style="padding-left:10px"><a href=<?php echo '"sms:'.$doner_phonenumber.'"'; ?> ><input type="button" class="btn btn-danger" value="Message"></a></td>
</tr>
</table>

<div id="doner_says_box">
<p id="doner_says_text">Sohan say's,</p>
<p id="doner_says_what"><?php echo $doner_note; ?></p>
</div>

<div class="panel panel-default">
<div class="panel-heading">About One</div>
<div class="panel-body">
<p><span class="glyphicon glyphicon-tint"></span> <?php echo $doner_bloodgroup; ?></p>
<p><span class="glyphicon glyphicon-leaf"></span> <?php echo $doner_age ?> Year</p>
<p><span class="glyphicon glyphicon-earphone"></span> +880<?php echo $doner_phonenumber ?> </p>
<p><span class="glyphicon glyphicon-map-marker"></span> <?php echo $doner_upazilla.", ".$doner_zilla.", ".$doner_bivag; ?></p>
</div>
</div>

</div>
</div>

</body>

</html
