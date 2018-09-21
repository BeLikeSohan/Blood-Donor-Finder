<?php
session_start();
if(isset($_SESSION['EMAIL']))
{
  $NAME = $_POST['NAME'];
  $PHONENUMBER = $_POST['PHONENUMBER'];
  $BIRTHDATE = $_POST['BIRTHDATE'];
  $BIVAG = $_POST['BIVAG'];
  $ZILLA = $_POST['ZILLA'];
  $UPAZILLA = $_POST['UPAZILLA'];
  $BLOODGROUP = $_POST['BLOODGROUP'];

  $EMAIL = $_SESSION['EMAIL'];

  $server_name = "127.0.0.1";
  $username = "root";
  $password = "";
  $database = "test";

  $check_email = 'SELECT * FROM members_login_data WHERE EMAIL="'.$EMAIL.'";';
  $create_profile = 'INSERT INTO members_login_data(NAME, EMAIL) VALUES("'.$NAME.'", "'.$EMAIL.'");';
  $get_id = 'SELECT * FROM members_login_data WHERE EMAIL="'.$EMAIL.'";';
  $connection = mysqli_connect($server_name, $username, $password, $database);
  $create_doner_profile = 'INSERT INTO members(NAME, BIRTHDATE, PHONENUMBER, BLOODGROUP, BIVAG, ZILLA, UPAZILLA) VALUES("'.$NAME.'", "'.$BIRTHDATE.'", "'.$PHONENUMBER.'", "'.$BLOODGROUP.'", "'.$BIVAG.'", "'.$ZILLA.'", "'.$UPAZILLA.'");';
  $check_profile = 'SELECT * FROM members WHERE EMAIL="'.$EMAIL.'";';


  if($connection == false)
  {
    die("ERROR: " . mysqli_connect_error());
  }

  mysqli_query($connection, "SET NAMES utf8mb4");

  if($result = mysqli_query($connection, $check_email))
  {
    if(mysqli_num_rows($result)>0) die("EMAIL EXIST, BUG FOUND, PLEASE REPORT TO THE ADMINSTERTOR");
  }

  mysqli_query($connection, $create_profile);

  if($result = mysqli_query($connection, $get_id))
  {
    if(mysqli_num_rows($result)>0)
    {
      while($row = mysqli_fetch_array($result))
      //CREATE PROFILE DONE
        $reg_id = $row['ID'];
      }
    }else{
      die("CREATE PROFILE FAILED");
    }
  }else{
  die("NO EMAIL OBJECT FOUND ON POST REQUEST");
}


mysqli_close($connection);
unset($result);

$connection = mysqli_connect($server_name, $username, $password, $database);
if($connection == false)
{
  die("ERROR 01: " . mysqli_connect_error());
}s

mysqli_query($connection, "SET NAMES utf8mb4");

$check_id = 'SELECT * FROM members_login_data WHERE ID='.$reg_id;
$check_doner_id = 'SELECT * FROM members WHERE ID='.$reg_id;


if($result = mysqli_query($connection, $check_id))
{
  echo '1';
  if(mysqli_num_rows($result)>0)
  {
    echo '2';
    while($row = mysqli_fetch_array($result))
    {
      echo '3';
      if($row['ID'] == $reg_id && $row['EMAIL'] == $_SESSION['EMAIL'])
      {
        echo '4';
        mysqli_query($connection, $create_doner_profile);
        echo 'HA';
        if($doner_profile = mysqli_query($connection, $check_doner_id))
        {
          echo '5';
          if(mysqli_num_rows($doner_profile)>0)
          {
            echo '6';
            while($doner_data = mysqli_fetch_array($doner_profile))
            {
              echo '7';
              if($doner_data['ID'] == $reg_id && $doner_data['NAME'] == $NAME)
              {
                echo 'AT';
                echo $_SESSION['IMAGE_NAME'];
              //  echo '<script> window.location.href="/doner.php?doner='.$doner_data['ID'].'"; </script>';
              }else{
                die("SOMETHING WENT WRONG [ERROR CODE: 01101]");
              }
            }
          }
        }
      }else{
        die("SOMETHING WENT WRONG");
      }
    }
  }
}
echo 'SCRIPT END';
?>
