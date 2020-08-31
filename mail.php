<?php
$recepient = "liamdakedar@gmail.com";
$sitename = "Liam Magic";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$message = trim($_POST["message"]);
$message = "Name: $name \nEmail: $email \nMessage: $message";

$pagetitle = "New application from the site \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $email");