<?php
$name = $_POST['nombre'];
$mail = $_POST['email'];
$asunt = $_POST['asunto'];
$message = $_POST['mensaje'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $name . " \r\n";
$message .= "Su e-mail es: " . $mail . " \r\n";
$message .= "Asunto del mensaje: " . $asunt . " \r\n";
$message .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
$message .= "Enviado el: " . date('d/m/Y', time());

$para = 'robinzon.m.g.f@gmail.com';
$asunto = 'Mensaje que me envía un colega desde mi portafolio:';

mail($para, $asunto, utf8_decode($message), $header);

header("Location:contacto.html");
?>