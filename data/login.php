<?php


    header('Content-Type: application/json');

    include("conexion.php");

    $obj = new Conexion;
    $response = array();

    $json = file_get_contents('php://input');
    $jsonObj = json_decode($json, true);

    $usuario = $jsonObj["pUsuario"];
    $pass = $jsonObj["pPass"];

    $json = file_get_contents('php://input');


  $res = $obj->buscarUsuario($usuario,$pass);

    if($res == 1){
        $response = 1;
    }else{
        $response = 0;
    }

    echo json_encode($response, JSON_FORCE_OBJECT);
?>