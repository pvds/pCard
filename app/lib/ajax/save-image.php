<?php
include '../../lib/vendor/kint.php';
include '../../lib/config/constants.php';

$image_tmp_location = $_FILES['contact-image']['tmp_name'];
$image_new_location = '../../avatars/';
$image_info = pathinfo($_FILES["contact-image"]["name"]);
$image_extension = $image_info["extension"];
$image_name = $_POST['image-name'];
$image_target = $image_new_location.$image_name.".".$image_extension;

if(is_array($_FILES)) {
    if(is_uploaded_file($image_tmp_location)) {
        move_uploaded_file($image_tmp_location, $image_target);
    }
} else{
    echo PETTY;
    return false;
}
