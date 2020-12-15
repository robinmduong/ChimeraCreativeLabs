<?php

$db['db_host'] = "localhost";
$db['db_user'] = "root";
$db['db_pass'] = "";
$db['db_name'] = "cms";

foreach($db as $key => $value) {
    
    //make a constant, and we want constant to be uppercase
    //e.g, The key for now is db_host, and the value is localhost--then we do this for the other key-value pairs
    define(strtoupper($key), $value);
    
}

//Syntax: mysqli_connect('server', 'username', 'password', 'database name');
$connection = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);

if ($connection) {
//    echo "We are connected";
//} else {
//    echo "Connection failed";
}

?>