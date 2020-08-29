<?php
$recepient = "kalashnykovad@gmail.com";
$sitename = "Hebrew Course";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$message = trim($_POST["message"]);
$message = "Имя: $name \nEmail: $email \nСообщение: $message";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $email");