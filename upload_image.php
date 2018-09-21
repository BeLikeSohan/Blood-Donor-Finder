<?php
session_start();
if(isset($_FILES["file"]["type"]))
{
  $validextensions = array("jpeg", "jpg", "png");
  $temporary = explode(".", $_FILES["file"]["name"]);
  $file_extension = end($temporary);
  if ((($_FILES["file"]["type"] == "image/png") || ($_FILES["file"]["type"] == "image/jpg") || ($_FILES["file"]["type"] == "image/jpeg")) && ($_FILES["file"]["size"] < 1000000) && in_array($file_extension, $validextensions))
  {
    if ($_FILES["file"]["error"] > 0)
    {
    echo "Return Code: " . $_FILES["file"]["error"] . "<br/><br/>";
  }else{
    $sourcePath = $_FILES['file']['tmp_name'];
    $targetPath = "upload/".$_FILES['file']['name'];
    move_uploaded_file($sourcePath,$targetPath);
    echo 'DONE';
  }
  }
  $_SESSION['IMAGE_NAME'] = $_FILES['file']['name'];
}
?>
