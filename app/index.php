<!--todo: add svg icon for back button-->
<!--todo: form: disable autocomplete, use appropriate autocapitalize, add placeholders-->
<!--todo: add aria-->

<!doctype html>
<html class="no-js" lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- SEO -->
    <title>pCard | Your contact app reïmagined</title>
    <meta name="description" content="">
    <meta name="keywords" content="contact, address, vcard"/>
    <meta name="author" content="pCard">

    <!-- favicons -->
    <!-- Favicons -->
    <link rel="apple-touch-icon" sizes="180x180" href="dist/images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="dist/images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="dist/images/favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">
    <link rel="mask-icon" href="dist/images/safari-pinned-tab.svg" color="#666666">
    <meta name="apple-mobile-web-app-title" content="pCard">
    <meta name="application-name" content="pCard">
    <meta name="theme-color" content="#f3f3f3">

    <!-- Stylesheets -->
    <link rel="stylesheet" href="dist/styles/app.css">

    <!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script>window.html5 || document.write('<script src="vendor/html5shiv.js"><\/script>')</script>
    <![endif]-->
</head>
<?php
include "env.php";
require "lib/vendor/kint.php";
require "lib/functions/contacts.php";
require "lib/config/constants.php";
require "lib/config/main.php";
?>
<body class="<?=ENV?>">

<!-- list menu -->
<?php include "views/list-menu.php" ?>
<main>
    <!-- contact list -->
    <div id="list-wrap" class="view list-view">
        <?php
        include "views/list-search.php";
        include "views/list.php";
        include "views/list-actions.php";
        ?>
    </div>
    <!-- contact -->
    <section id="contact-wrap" class="view contact-view" data-id="<?=$contact['contact_id'] ? $contact['contact_id'] : 1 ?>">
        <?php
        include "views/contact-menu.php";
        include "views/contact.php";
        include "views/contact-actions.php";
        ?>
    </section>
</main>

    <!-- Javascript -->
    <script src="vendor/viewport-units-buggyfill.js"></script>
    <script src="dist/scripts/app.js"></script>

</body>
</html>
