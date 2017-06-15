<!--todo: separate in partials-->
<!--todo: load contact list and contact details from json file-->
<!--todo: add svg icon for back button-->
<!--todo: form: disable autocomplete and use appropriate autocapitalize-->
<!--todo: add aria-->

<!doctype html>
<html class="no-js" lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- SEO -->
    <title>pCard | Your contact app reïmagined</title>
    <meta name="description" content="">
    <meta name="keywords" content="contact, address, vcard"/>
    <meta name="author" content="pCard">

    <!-- Stylesheets -->
    <link rel="stylesheet" href="dist/styles/app.css">

    <!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script>window.html5 || document.write('<script src="vendor/html5shiv.js"><\/script>')</script>
    <![endif]-->
</head>
<?php
require "lib/vendor/kint.php";
require "lib/functions/contacts.php";
require "lib/config/constants.php";
require "lib/config/main.php";
require "lib/config/contacts.php";
?>
<body class="<?=ENV?>">

<!-- Header  -->
<?php include "views/header.php" ?>
<main>
    <!-- contact list -->
    <div id="contact-list-wrap" class="view list-view">
        <?php
        include "views/search.php";
        include "views/contact-list.php";
        include "views/contact-list-actions.php";
        ?>
    </div>
    <section id="contact-details-wrap" class="view details-view" data-id="<?=$contact['contact_id']?>">
        <?php
        include "views/contact-details-menu.php";
        include "views/contact-details.php";
        include "views/contact-details-actions.php";
        ?>
    </section>
</main>

    <!-- Javascript -->
    <script src="dist/scripts/app.js"></script>

</body>
</html>
