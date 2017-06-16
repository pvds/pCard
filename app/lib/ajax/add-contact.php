<?php
include '../../lib/vendor/kint.php';
include '../../lib/config/constants.php';
$new_contact_json = file_get_contents('php://input');
$new_contact = json_decode($new_contact_json, true);
if(!$new_contact){
    echo PETTY;
    return false;
}
//d($new_contact);

$contactsFile = "../../data/contacts.demo.json";
$current_contact_list_json = file_get_contents($contactsFile);
$current_contact_list = json_decode($current_contact_list_json, true);
//d($current_contact_list);

$updated_contact_list = $current_contact_list + $new_contact;
//d($updated_contact_list);
asort($updated_contact_list);

$updated_contact_list_json = json_encode(asort($updated_contact_list), JSON_PRETTY_PRINT);
//d($updated_contact_list);

file_put_contents($contactsFile,$updated_contact_list_json);
