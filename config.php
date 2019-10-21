<?php
    $db_servername = "localhost";
    $db_user = 'root';
    $db_pass = '';
    $db_name = 'zpk';

    // Create connection
    $connection = mysqli_connect($db_servername, $db_user, $db_pass, $db_name) or die("Connect failed: %s\n". $conn -> error);
?>