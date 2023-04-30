<?php
$to="aakristkarki@gmail.com";
$sub="testing the mail";
$var = "HB";
$msg = "";
$hed = 'MIME-Version: 1.0' . "\r\n"
$hed .= 'Content-type: text/html; charset-iso=8859-1' . "\r\n";
mail($to,$sub,$msg,$hed);
?>