<?php
set_include_path (ROOT_PATH.'/app');

// User settings
$settings = getSettings();
$lastContact = $settings["last-contact"] ?: false;

// Contact data
$contact = getContactDetails($lastContact);
