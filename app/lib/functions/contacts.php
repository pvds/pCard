<?php
// TODO: set dynamic logic to grab last viewed contact (get from settings.json)
function getContactData($single_contact = false, $contact_id = 1){
    $jsondata = file_exists(CONTACT_FILE) ? file_get_contents(CONTACT_FILE) : false;
    if($jsondata){
        $data = json_decode($jsondata, true);
        if($single_contact){
            if(isset($data[$contact_id])){
                $contact_data = $data[$contact_id];
                $contact_data['contact_id'] = $contact_id;
            } else{
                $contact_data = false;
            }
        } else{
            $contact_data = $data;
        }
        return $contact_data;
    }

    return false;
}

function getContactList(){
    return getContactData();
}

function showContactList(){
    $contacts_raw = getContactList();
    $contacts_empty = "<p id='contact-list-empty'>It's kind of lonely here</p>";

    if($contacts_raw){
        foreach ($contacts_raw as $contact_id => $contact){
            $data_contact_id = "data-id='$contact_id'";
            $image = $contact['image'];
            $name = $contact['name'];
            $data_fav = $contact['favorite'] ? "data-fav='true'" : "";
            $svg_fav = $contact['favorite'] ? '' : 'hidden';

            $contact = "
           <li $data_contact_id $data_fav>
            <img src='avatars/$image' width='64' height='64' srcset='avatars/$image 2x'/>
            <h2 class='name'>$name</h2>
            <svg class='icon-arrow-right' data-name='Arrow right' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'><title>icons</title><path d='M20.394,37.469l11.9-11.9L31.721,25l-11.9,11.9a0.807,0.807,0,1,0,1.141,1.141l11.9-11.9-0.57-.57Z' fill='#676767'/><path d='M20.394,12.531l11.9,11.9,0.57-.57-11.9-11.9A0.807,0.807,0,1,0,19.823,13.1L31.721,25l0.571-.571Z' fill='#676767'/><rect x='31.888' y='24.597' width='0.807' height='0.807' transform='translate(-8.22 30.156) rotate(-45)' fill='#676767'/><rect x='32.459' y='25.167' width='0.807' height='0.807' transform='translate(-8.456 30.73) rotate(-45.005)' fill='#676767'/><rect x='33.029' y='24.597' width='0.807' height='0.807' transform='translate(-7.886 30.959) rotate(-44.995)' fill='#676767'/><rect x='32.459' y='24.026' width='0.807' height='0.807' transform='translate(-7.649 30.392) rotate(-45)' fill='#676767'/></svg>
            <svg $svg_fav class='icon-star-filled' data-name='Star filled' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'><title>icons</title><path d='M39.986,47.6L25.141,39.8,10.3,47.6l2.835-16.53L1.122,19.366l16.6-2.412L25.141,1.915l7.423,15.039,16.6,2.412L37.151,31.073Z' fill='#676767'/></svg>
        </li>
        ";
            echo $contact;
        }
    } else{
        echo $contacts_empty;
    }
}

function getContactDetails(){
    $contact = getContactData(true);

    if($contact){
        $image = $contact['image'];
        if(!empty($contact['image'])){
            $contact['image-html'] = "
            <img id='contact-details-image' src='avatars/$image' width='64' height='64' alt='' srcset='avatars/$image 2x'/>
            <span id='edit-image-field' class='is-hidden'><span id='edit-image-field-action'>change</span><br/>photo</span>
        ";
        } else{
            $contact['image-html'] = false;
        }

        $contact['phone']['action'] = !empty($contact['phone']['private']) ? $contact['phone']['private'] : $contact['phone']['work'];
        $contact['phone']['status'] = empty($contact['phone']['action']) ? 'disabled' : '';
        $contact['mail']['action'] = !empty($contact['mail']['private']) ? $contact['mail']['private'] : $contact['mail']['work'];
        $contact['mail']['status'] = empty($contact['mail']['action']) ? 'disabled' : '';

        $contact['note-formatted'] = str_replace (array('\r\n', '\r', '\n'), "\r\n", $contact['note']);
    }

    return $contact;
}
