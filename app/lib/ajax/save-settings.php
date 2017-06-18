<?php
include '../../lib/vendor/kint.php';
include '../../lib/config/constants.php';
$updated_settings_json = file_get_contents('php://input');
$updated_settings = json_decode($updated_settings_json, true);
if(!$updated_settings){
    echo PETTY;
    return false;
}

$settings_file = SETTINGS_FILE;

if(file_exists($settings_file)){
    $current_settings_json = file_get_contents($settings_file);
    $current_settings = json_decode($current_settings_json, true);

    $settings = array_merge($current_settings, $updated_settings);
    $settings_json = json_encode($settings, 128);

    //var_dump($settings);

    $json_data = $settings_json;
} else{
    $json_data = $updated_settings_json;
}
file_put_contents($settings_file,$json_data);
