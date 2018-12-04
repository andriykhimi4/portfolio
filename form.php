<?php
    error_reporting(0);
    $from = "Повідомлення-із-сайту";
    $recepient = 'andriykhimi4@gmail.com';
    $sitename = 'khimich';
  if (isset($_POST['name'])) {
    if (!empty($_POST['name'])){
    $name = strip_tags($_POST['name']);
    }
  }
  if (isset($_POST['message'])) {
    if (!empty($_POST['message'])){
    $text = strip_tags($_POST['message']);
    }
  }
  if (isset($_POST['email'])) {
    if (!empty($_POST['email'])){
    $email = strip_tags($_POST['email']);
    }
  }
    $pagetitle = 'Заявка зворотнього дзвінка ';
    $pagetitle .=  $sitename;
    $message = '<p><strong>Имя:</strong> ' .$name. '</p>
    <p><strong>Email:</strong> '.$email.'</p>
    <p><strong>Сообщение:</strong> '.$text.'</p>';
    
  mail($recepient, $pagetitle, $message, "From: $from\nContent-type: text/html; charset=utf-8 \r\n"); 
?>