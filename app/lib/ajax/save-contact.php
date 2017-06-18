<?php
include '../../lib/vendor/kint.php';
include '../../lib/config/constants.php';
$updated_contact_json = file_get_contents('php://input');
$updated_contact = json_decode($updated_contact_json, true);
if(!$updated_contact){
    echo PETTY;
    return false;
}

$contactsFile = CONTACT_FILE;

if(file_exists($contactsFile)){
    $current_contact_list_json = file_get_contents($contactsFile);
    $current_contact_list = json_decode($current_contact_list_json, true);

    if(empty($current_contact_list)){
        $json_data = $updated_contact_json;
    } else{
        $updated_contact_list = array_replace_recursive($current_contact_list, $updated_contact);
        function sort_by_name($a, $b){
            return strcasecmp($a["name"], $b["name"]);
        }
        usort($updated_contact_list,'sort_by_name');

        $updated_contact_list_json = json_encode($updated_contact_list, 128);

        $json_data = $updated_contact_list_json;
    }
} else{
    $json_data = $updated_contact_json;
}
file_put_contents($contactsFile,$json_data);
