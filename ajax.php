<?php
    if(isset($_GET["akarmi"]))
    {
        $decoded = json_decode($_GET['akarmi'],true);
        var_dump($decoded);
        echo $decoded["kulcs2"]; 
    }
    if(isset($_POST["lehetjo"]))
    {
        $decoded = json_decode($_POST["lehetjo"],true);
        var_dump($decoded);    
    }
?>