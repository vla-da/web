<?php
$name=$_GET["name"];
$email=$_GET["email"];
$new=$_GET["new"];
$json = json_decode(file_get_contents("2.json", JSON_UNESCAPED_UNICODE), true);
$json['review'][] = [
  'name' => $name,
  'email' => $email,
  'new' => $new,
];
file_put_contents('2.json', json_encode($json, JSON_UNESCAPED_UNICODE)); 
$jsonString = file_get_contents("2.json");
$rrow = json_decode($jsonString);
$s=0;
$c = count($rrow->review);
foreach ($rrow->review as $number => $item) {
$s++;
$name = $item->name;
$email = $item->email;$new = $item->new;
echo '<span><b>Ваше имя: </b></span>'.$name.'<br><span><b>Электронная почта: </b></span>'.$email.'<br><span><b>Отзыв: </b></span>'.$new.'<br><br>';  
if($s==$c)break;}
?> 