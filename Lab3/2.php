<?php
        $jsonString = file_get_contents("2.json", JSON_UNESCAPED_UNICODE);
        $rrow = json_decode($jsonString);
        $s=0;
        $c = count($rrow->review);
        foreach ($rrow->review as $number => $item) {
            $s++;
            $name = $item->name;
            $email = $item->email;
            $new = $item->new;
            echo '<span><b>Ваше имя: </b></span>'.$name.'<br><span><b>Электронная почта: </b></span>'.$email.'<br><span><b>Отзыв: </b></span>'.$new.'<br><br>';  
            if($s==$c)break;
        }
?>