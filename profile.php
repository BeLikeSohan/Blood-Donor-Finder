<?php
session_start();
if((isset($_GET['id']) && is_numeric($_GET['id']) && $_GET['id'] == $_SESSION['doner_id'])) #DEBUG MODE = FALSE | ORIGINAL CODE: "(isset($_GET['id']) && is_numeric($_GET['id']) && $_GET['id'] == $_SESSION['doner_id'])"
{
	if((session_status()==2 && $_SESSION['doner_id']==$_GET['id'])) #DEBUG MODE = FALSE | ORIGINAL CODE: "(session_status()==2 && $_SESSION['doner_id']==$_GET['id'])"
	{
  $doner_id = $_SESSION['doner_id'];
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
		}
	}
	$dates = explode("-", $doner_birthdate);
	$doner_birth_year = $dates[0];
	$current_year = date("Y");
	$doner_age = ($current_year - $doner_birth_year);
	}else{
		session_unset();
		session_destroy();
		echo '<script> window.location.href="/"; </script>';
	}
}else{
	session_unset();
	session_destroy();
	echo '<script> window.location.href="/"; </script>';
}

?>

<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="./js/jquery-2.2.4.min.js" ></script>
    <link rel="stylesheet" href="./css/bootstrap.min.css" >
    <script src="./js/bootstrap.min.js" ></script>
    <link rel="stylesheet" href="./css/animate.min.css">

		<script src="./js/script.js"></script>
		<script src="./js/prev_img.js"></script>
    <script src="./js/profile.js"></script>
    <link rel="stylesheet" href="./css/style.css" />
    <title><?php echo $doner_name . ' - Lorem Ipsum '; ?> </title>
</head>

<body>
<div class="no-top-padding">
<div id="doner_page_top_bar">
<div id="doner_page_top_bar_title_text"><p>lorem ipsum</p></div>
</div>
</div>

<div class="container">
	<div class="container">
	    <img id="doner_profile_pic" class="img-circle" align="middle" data-toggle="modal" data-target="#account-setting-modal" src="resource/members/avatars/<?php
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


<p id="doner_name" onClick="edit_name()"><?php echo $doner_name.' '; ?></p>
<p id="doner_bloodgroup" class=""><?php echo $doner_bloodgroup.' '; ?></p>

<table align="center">
<tr>
<td><a href=<?php echo '"tel:'.$doner_phonenumber.'"'; ?> > <input type="button" class="btn btn-success" value="Call Now"></a></td>
<td style="padding-left:10px"><a href=<?php echo '"sms:'.$doner_phonenumber.'"'; ?> ><input type="button" class="btn btn-danger" value="Message"></a></td>
</tr>
</table>

<div id="doner_says_box" data-toggle="modal" data-target="#change_note_modal">
<p id="doner_says_text">One say's,</p>
<p id="doner_says_what"><?php echo $doner_note; ?></p>
</div>

<div class="panel panel-default">
<div class="panel-heading">About One</div>
<div class="panel-body">
<p><span class="glyphicon glyphicon-tint"></span> <?php echo $doner_bloodgroup; ?></p>
<p><span class="glyphicon glyphicon-leaf"></span> <?php echo $doner_age; ?></p>
<p><span class="glyphicon glyphicon-earphone"></span> <?php echo $doner_phonenumber; ?> </p>
<p><span class="glyphicon glyphicon-map-marker"></span> <?php echo $doner_upazilla.", ".$doner_zilla.", ".$doner_bivag; ?></p>
</div>
</div>

</div>
</div>

<!--
<div id="change_pic_modal" class="modal fade" role="dialog">
	<div class="modal-dialog">
		<div class="model-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title">Change Picture</h4>
			</div>
			<div class="modal-body">
				<p>lorem ipsum</p>
			</div>
			<div class="modal-footer">
				<button type="button" id="change_pic_btn" class="btn btn-default" data-dismiss="modal">Change</button>
			</div>
		</div>
	</div>
</div>
-->

<div id="account-setting-modal" class="modal fade">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Account Setting</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
				<ul class="nav nav-tabs">
					<li class="active"><a data-toggle="tab" href="#General">General</a></li>
					<li><a data-toggle="tab" href="#Picture">Picture</a></li>
					<li><a data-toggle="tab" href="#Security">Security</a></li>
					<li><a data-toggle="tab" href="#Support">Support</a></li>
				</ul>
				<div class="tab-content">
					<div id="General" class="tab-pane fade in active">
						<div style="height:10px"></div>
						<strong>Change name:</strong>
						<input type="text" class="form-control" id="change_name_box" value="<?php echo $doner_name; ?>"></input>
						<div style="height:10px"></div>
						<strong>Change phone number:</strong>
						<input type="text" class="form-control" id="change_phonenumber_box" value="<?php echo $doner_phonenumber; ?>"></input>
						<div style="height:10px"></div>
						<strong>Change bloodgroup:(<a id="show_alert_bloodgroup">Warning</a>)</strong>
						<select id="change_bloodgroup_box" class="form-control">
						<option>A Positive (A+)</option>
						<option>A Negitive (A-)</option>
						<option>B Positive (B+)</option>
						<option>B Negitive (B-)</option>
						<option>O Positive (O+)</option>
						<option>O Negitive (O-)</option>
						</select>
						<div class="hidden">
						<hr>
						<strong>Change address:</strong>
						<div style="height:10px"></div>
						<strong>Bivag:</strong>
						<select id="bivag_select" class="form-control" disabled>

						</select>
						<strong>Zilla:</strong>
						<select id="zilla_select" class="form-control" disabled>

					</select>
						<strong>Upazilla:</strong>
						<select id="upazilla_select" class="form-control" disabled></select>
					</div>
					</div>
					<div id="Picture" class="tab-pane fade">
						<div style="height:425;">
							<div style="height:10"></div>
							<strong>Choose a photo of yours:</strong>
							<form id="change_img" method="post" enctype="multipart/form-data" action="">
								<div style="height:10"></div>
								<input type="file" name="file" id="change_img_btn" required />
								<div style="height:10"></div>
								<strong>Preview:</strong>
								<hr style="margin:3px;">
								<div style="height:270px">
									<img id="prev_change_img" src="" class="" height="270px" width="100%"/>
								</div>
								<hr style="margin:7px">
								<input type="submit" class="btn btn-default" value="Upload"></input>
							</form>
						</div>
					</div>
					<div id="Security" class="tab-pane fade">
						<div style="height:300px">
							<div style="height:10px"></div>
							<strong>Security setting is unavailable in this beta release,<br>We hope that it will be available in the next version,<br>Thanks for supporting us!</strong>
							<hr>
							<div style="height:55px"></div>
							<p align="center"><a style="text-decoration:none;" href="/logout.php"><input type="button" class="btn btn-default" value="Logout"></input></a></p>
						</div>
					</div>
					<div id="Support" class="tab-pane fade">
							<div style="height:300px;"></div>
					</div>
      </div>
      <div class="modal-footer">
        <button type="submit" id="save_changes_btn" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
				</form>
      </div>
    </div>
  </div>
</div>
</div>

<div id="change_note_modal" class="modal fade">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Update note</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
			<textarea type="text" class="form-control" id="updated_note" style="margin:10px; width:97%;"><?php echo $doner_note; ?></textarea>
      <div class="modal-body">
				<div class="modal-footer">
	        <button type="submit" id="note_update_btn" class="btn btn-primary">Update</button>
	      </div>
	    </div>
	  </div>
	</div>
	</div>


<!--
TODO:
1.SET-UP FRONT-END AND BACK-END FOR ACCOUNT SETTINGS (DONE EXCEPT PROFILE PICTURE UPDATE OPTION)
2.MAKE IMAGE PREVIEW WHEN CHANGING LOOK DYNAMIC
3.REMOVE LOGOUT BUTTON FROM END OF THE PAGE (DONE)
NOTE:PROFILE.PHP IS CONFIGURED TO IGNORE ANY ERROR OR MISMATCH RELETED TO
COMPARING ID VAR FROM SESSION AND FROM GET REQUEST FOR DEBUGGING PURPOSE.
DO NOT FORGET TO RECODE IT BEFORE RELEASING ANY RELEASE. (CURRENTLY CONFIGURED CORRECTLY)
-->














</body>
</html>
