<?php
    error_reporting(0);
    $from = "Повідомлення із сайту";
    $recepient = 'andriykhimi4@gmail.com';
    $sitename = 'khimich';
  if (isset($_POST['mainForm'])) {    
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $text = $_POST['message'];
    $pagetitle = 'Заявка зворотнього дзвінка ';
    $pagetitle .=  $sitename;
    $message = '<p><strong>Телефон:</strong> '.$_POST['mainForm'].'</p>';
    mail($recepient, $pagetitle, $message, "From: $from\nContent-type: text/html; charset=utf-8 \r\n");
    mail('andriykhimich4@gmail.com', $pagetitle, $message, "From: $from\nContent-type: text/html; charset=utf-8 \r\n");
  }
?>