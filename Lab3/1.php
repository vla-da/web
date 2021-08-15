<?php
$tek=$_GET["tek"];
$jsonString = file_get_contents("1.json");
$rrow = json_decode($jsonString);
$s=0;
foreach ($rrow->news->new as $number => $item) {
    $s++;
    $zag = $item->zag;
    $text = $item->text;
    $img = $item->img;
    $lin = $item->lin;
    echo '<br><h3>'.$zag.'</h3><p>'.$text.'</p><a href="'.$lin.'">Подробнее...</a><br><img src="'.$img.'" width=400px><br>';  
    echo "<br>";
    if($s==$tek)break;
}
?>