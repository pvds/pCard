<?php
include '../../lib/vendor/kint.php';
include '../../lib/config/constants.php';
$delete_contact_json = file_get_contents('php://input');
$delete_contact = json_decode($delete_contact_json, true);
if(!$delete_contact){
    echo PETTY;
    return false;
} else {
    $delete_contact_id = key($delete_contact);
}

$contactsFile = CONTACT_FILE;

if(file_exists($contactsFile)) {
    $current_contact_list_json = file_get_contents($contactsFile);
    $current_contact_list = json_decode($current_contact_list_json, true);

    if(!empty($current_contact_list)){
        unset($current_contact_list[$delete_contact_id]);

        $updated_contact_list_json = json_encode($current_contact_list, 128);

        $json_data = $updated_contact_list_json;
        file_put_contents($contactsFile, $json_data);
    };
}
