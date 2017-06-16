<?php
include '../../lib/vendor/kint.php';
include '../../lib/config/constants.php';
$updated_contact_json = file_get_contents('php://input');
$updated_contact = json_decode($updated_contact_json, true);
if(!$updated_contact){
    echo PETTY;
    return false;
}
//d($updated_contact);

$contactsFile = CONTACT_FILE;

if(file_exists($contactsFile)){
    $current_contact_list_json = file_get_contents($contactsFile);
    $current_contact_list = json_decode($current_contact_list_json, true);
//d($current_contact_list);

    $updated_contact_list = array_replace_recursive($current_contact_list, $updated_contact);
    asort($updated_contact_list);
    $updated_contact_list_json = json_encode($updated_contact_list, JSON_PRETTY_PRINT);
//d($updated_contact_list);

    $json_data = $updated_contact_list_json;
} else{
    $json_data = $updated_contact_json;
}

file_put_contents($contactsFile,$json_data);
