<?php
include '../../lib/vendor/kint.php';
include '../../lib/config/constants.php';
$new_contact_json = file_get_contents('php://input');
$new_contact = json_decode($new_contact_json, true);
if(!$new_contact){
    echo PETTY;
    return false;
}

$contactsFile = CONTACT_FILE;

if(file_exists($contactsFile)) {
    $current_contact_list_json = file_get_contents($contactsFile);
    $current_contact_list = json_decode($current_contact_list_json, true);

    if(empty($current_contact_list)){
        $json_data = $new_contact_json;
    } else{
        $updated_contact_list = $current_contact_list + $new_contact;
        asort($updated_contact_list);
        $updated_contact_list_json = json_encode(asort($updated_contact_list), 128);

        $json_data = $updated_contact_list_json;
    }
} else {
    $json_data = $new_contact_json;
}
file_put_contents($contactsFile,$json_data);
