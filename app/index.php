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
require "lib/config/constants.php";
require "lib/config/main.php";
?>
<body class="<?=ENV?>">

<!-- Header  -->
<header id="main-header">
    <nav id="menu-primary-desktop" class="hidden-md-down">
        <ul>
            <li>
                <button id="contact-list-all" class="active">
                    <svg class="icon-user-outline" data-name="User outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>icons</title><g id="MlyRVG.tif"><path d="M14.647,30.045a12.139,12.139,0,0,1-1.17-1.817,27.174,27.174,0,0,0-2.33-4.094,6.6,6.6,0,0,1-1.012-5.153,1.8,1.8,0,0,1,.4-0.883,1.461,1.461,0,0,0,.381-1.165,25.8,25.8,0,0,1,.177-3.8,7.868,7.868,0,0,1,6.7-6.639,13.35,13.35,0,0,1,7.4.572,4.972,4.972,0,0,1,3.264,3.4,0.831,0.831,0,0,0,.2.327,4.062,4.062,0,0,1,1.1,2.836c0.01,0.925.04,1.849,0.071,2.774a0.619,0.619,0,0,0,.1.409,2.869,2.869,0,0,1,.883,2.474,8.009,8.009,0,0,1-1.864,4.955,6.541,6.541,0,0,0-1.03,1.879,12.082,12.082,0,0,1-2.382,3.937c0.2,0.114.378,0.222,0.561,0.31,2.9,1.39,5.755,2.871,8.7,4.139a8.955,8.955,0,0,1,5.316,6.739,30.347,30.347,0,0,1,.494,3.669,0.932,0.932,0,0,1-.74,1.172,28.5,28.5,0,0,1-6.638,1.7,85.514,85.514,0,0,1-15.058.88A66.329,66.329,0,0,1,4,47.088C2.9,46.818,1.837,46.4.758,46.046A0.881,0.881,0,0,1,.1,45.07a15.6,15.6,0,0,1,3.346-9.232A6,6,0,0,1,5.81,34.005C8,33.058,10.2,32.113,12.383,31.148,13.15,30.809,13.891,30.415,14.647,30.045ZM1.686,44.684c0.221,0.091.385,0.168,0.556,0.226,0.343,0.116.687,0.23,1.035,0.33A55.961,55.961,0,0,0,16.385,47a88.011,88.011,0,0,0,15.862-.685,32.384,32.384,0,0,0,6.3-1.43,0.534,0.534,0,0,0,.444-0.628,14.833,14.833,0,0,0-.8-4.061,6.225,6.225,0,0,0-3.38-3.869c-0.543-.237-1.062-0.53-1.6-0.788-2.819-1.362-5.644-2.713-8.455-4.092a0.714,0.714,0,0,0-.873.048,5.9,5.9,0,0,1-4.716,1.136,7.8,7.8,0,0,1-3.221-1.449c-1.1.537-2.153,1.087-3.236,1.57-2.091.933-4.214,1.8-6.292,2.758a5.127,5.127,0,0,0-1.657,1.215A13.546,13.546,0,0,0,1.686,44.684Zm27.5-26.368a0.9,0.9,0,0,1-.948-1.115c-0.037-1.155-.013-2.312-0.081-3.465a2.487,2.487,0,0,0-.38-1.442,6.719,6.719,0,0,1-1.129-2.062,3.288,3.288,0,0,0-1.985-1.692,12.07,12.07,0,0,0-6.914-.41,6.2,6.2,0,0,0-5.158,5.847c-0.118,1.295-.071,2.605-0.09,3.909a1.054,1.054,0,0,1-.863,1.326,6.744,6.744,0,0,0,2,5.673,2.209,2.209,0,0,1,.484.829A8.15,8.15,0,0,0,16.5,29.642a5.225,5.225,0,0,0,7.369-.064A10.708,10.708,0,0,0,26.7,24.784a2.613,2.613,0,0,1,.546-0.96A6.859,6.859,0,0,0,29.19,18.316Z" fill="#fff"/><path d="M33.582,26.3a6.968,6.968,0,0,1-3.024,1.423,5.237,5.237,0,0,1-.935.068,0.736,0.736,0,0,1-.767-0.738,0.744,0.744,0,0,1,.676-0.832c2.561-.114,4.1-1.7,5.3-3.72A25,25,0,0,0,36,19.787a3.033,3.033,0,0,1,.477-0.835,6.78,6.78,0,0,0,1.982-5.538,1.017,1.017,0,0,1-.959-1.286c-0.029-1.271-.044-2.542-0.1-3.811A1.955,1.955,0,0,0,36.6,6.8a0.933,0.933,0,0,1-.358-0.559,2.962,2.962,0,0,0-1.461-2.183,6.7,6.7,0,0,0-3.069-1.008,13.093,13.093,0,0,0-5.011.235,6.759,6.759,0,0,0-2.953,1.636,0.8,0.8,0,0,1-1.254.067,0.839,0.839,0,0,1,.15-1.226,8.517,8.517,0,0,1,4.893-2.279,13.639,13.639,0,0,1,6.78.59,5.055,5.055,0,0,1,3.442,3.472,0.8,0.8,0,0,0,.2.33A4.117,4.117,0,0,1,39.065,8.8c0.014,0.875.011,1.751,0.034,2.625a0.712,0.712,0,0,0,.157.486,2.452,2.452,0,0,1,.809,1.845,8.319,8.319,0,0,1-2.21,6.064,2.35,2.35,0,0,0-.4.718,12.816,12.816,0,0,1-2.291,4.184c-0.1.125-.2,0.257-0.351,0.454,1.45,0.721,2.853,1.44,4.274,2.122,1.857,0.891,3.711,1.793,5.6,2.614a7.5,7.5,0,0,1,3.932,4.051A15.378,15.378,0,0,1,49.9,40.216a0.92,0.92,0,0,1-.674.921,28.582,28.582,0,0,1-5.519,1.506c-0.323.063-.645,0.136-0.971,0.186a0.807,0.807,0,1,1-.282-1.576c1.76-.42,3.517-0.856,5.28-1.263a0.639,0.639,0,0,0,.548-0.839,13.013,13.013,0,0,0-1.457-5.3,5.511,5.511,0,0,0-2.491-2.32q-4.383-2.062-8.746-4.169C34.921,27.046,34.28,26.67,33.582,26.3Z" fill="#fff"/></g></svg>
                    <span class="title">all contacts</span>
                </button>
            </li>
            <li>
                <button id="contact-list-favorite">
                    <svg class="icon-star-outline" data-name="Star outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>icons</title><path d="M39.916,47.6L25.071,39.8,10.226,47.6l2.835-16.53L1.052,19.366l16.6-2.412L25.071,1.915l7.423,15.039,16.6,2.412L37.081,31.073ZM25.071,37.975l12.7,6.678L35.347,30.51,45.623,20.493l-14.2-2.064L25.071,5.56,18.719,18.429l-14.2,2.064L14.794,30.51,12.369,44.653Z" fill="#FFF"/></svg>
                    <span class="title">favorites</span>
                </button>
            </li>
        </ul>
    </nav>
</header>
<main>
    <!-- contact list -->
    <div id="contact-list-wrap" class="view list-view">
        <form id="contact-list-search">
            <input id="contact-list-search-field" type="search" placeholder="search" data-filter="contact-list-overview"/>
        </form>
        <section id="contact-list-overview">
            <ul>
                <li>
                    <img src="dist/images/avatar-1.jpg" width="64" height="64" alt="" srcset="dist/images/avatar-1@2x.jpg 2x"/>
                    <h2 class="name">Ben Highcastle</h2>
                    <svg class="icon-arrow-right" data-name="Arrow right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>icons</title><path d="M20.394,37.469l11.9-11.9L31.721,25l-11.9,11.9a0.807,0.807,0,1,0,1.141,1.141l11.9-11.9-0.57-.57Z" fill="#676767"/><path d="M20.394,12.531l11.9,11.9,0.57-.57-11.9-11.9A0.807,0.807,0,1,0,19.823,13.1L31.721,25l0.571-.571Z" fill="#676767"/><rect x="31.888" y="24.597" width="0.807" height="0.807" transform="translate(-8.22 30.156) rotate(-45)" fill="#676767"/><rect x="32.459" y="25.167" width="0.807" height="0.807" transform="translate(-8.456 30.73) rotate(-45.005)" fill="#676767"/><rect x="33.029" y="24.597" width="0.807" height="0.807" transform="translate(-7.886 30.959) rotate(-44.995)" fill="#676767"/><rect x="32.459" y="24.026" width="0.807" height="0.807" transform="translate(-7.649 30.392) rotate(-45)" fill="#676767"/></svg>
                </li>
                <li data-fav="true">
                    <img src="dist/images/avatar-2.jpg" width="64" height="64" srcset="dist/images/avatar-2@2x.jpg 2x"/>
                    <h2 class="name">Jane Fiddle</h2>
                    <svg class="icon-arrow-right" data-name="Arrow right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>icons</title><path d="M20.394,37.469l11.9-11.9L31.721,25l-11.9,11.9a0.807,0.807,0,1,0,1.141,1.141l11.9-11.9-0.57-.57Z" fill="#676767"/><path d="M20.394,12.531l11.9,11.9,0.57-.57-11.9-11.9A0.807,0.807,0,1,0,19.823,13.1L31.721,25l0.571-.571Z" fill="#676767"/><rect x="31.888" y="24.597" width="0.807" height="0.807" transform="translate(-8.22 30.156) rotate(-45)" fill="#676767"/><rect x="32.459" y="25.167" width="0.807" height="0.807" transform="translate(-8.456 30.73) rotate(-45.005)" fill="#676767"/><rect x="33.029" y="24.597" width="0.807" height="0.807" transform="translate(-7.886 30.959) rotate(-44.995)" fill="#676767"/><rect x="32.459" y="24.026" width="0.807" height="0.807" transform="translate(-7.649 30.392) rotate(-45)" fill="#676767"/></svg>
                    <svg class="icon-star-filled" data-name="Star filled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>icons</title><path d="M39.986,47.6L25.141,39.8,10.3,47.6l2.835-16.53L1.122,19.366l16.6-2.412L25.141,1.915l7.423,15.039,16.6,2.412L37.151,31.073Z" fill="#676767"/></svg>
                </li>
                <li>
                    <img src="dist/images/avatar-3.jpg" width="64" height="64" srcset="dist/images/avatar-3@2x.jpg 2x"/>
                    <h2 class="name">Mark Berger</h2>
                    <svg class="icon-arrow-right" data-name="Arrow right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>icons</title><path d="M20.394,37.469l11.9-11.9L31.721,25l-11.9,11.9a0.807,0.807,0,1,0,1.141,1.141l11.9-11.9-0.57-.57Z" fill="#676767"/><path d="M20.394,12.531l11.9,11.9,0.57-.57-11.9-11.9A0.807,0.807,0,1,0,19.823,13.1L31.721,25l0.571-.571Z" fill="#676767"/><rect x="31.888" y="24.597" width="0.807" height="0.807" transform="translate(-8.22 30.156) rotate(-45)" fill="#676767"/><rect x="32.459" y="25.167" width="0.807" height="0.807" transform="translate(-8.456 30.73) rotate(-45.005)" fill="#676767"/><rect x="33.029" y="24.597" width="0.807" height="0.807" transform="translate(-7.886 30.959) rotate(-44.995)" fill="#676767"/><rect x="32.459" y="24.026" width="0.807" height="0.807" transform="translate(-7.649 30.392) rotate(-45)" fill="#676767"/></svg>
                </li>
                <li>
                    <img src="dist/images/avatar-4.jpg" width="64" height="64" srcset="dist/images/avatar-4@2x.jpg 2x"/>
                    <h2 class="name">Jon Mulla</h2>
                    <svg class="icon-arrow-right" data-name="Arrow right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>icons</title><path d="M20.394,37.469l11.9-11.9L31.721,25l-11.9,11.9a0.807,0.807,0,1,0,1.141,1.141l11.9-11.9-0.57-.57Z" fill="#676767"/><path d="M20.394,12.531l11.9,11.9,0.57-.57-11.9-11.9A0.807,0.807,0,1,0,19.823,13.1L31.721,25l0.571-.571Z" fill="#676767"/><rect x="31.888" y="24.597" width="0.807" height="0.807" transform="translate(-8.22 30.156) rotate(-45)" fill="#676767"/><rect x="32.459" y="25.167" width="0.807" height="0.807" transform="translate(-8.456 30.73) rotate(-45.005)" fill="#676767"/><rect x="33.029" y="24.597" width="0.807" height="0.807" transform="translate(-7.886 30.959) rotate(-44.995)" fill="#676767"/><rect x="32.459" y="24.026" width="0.807" height="0.807" transform="translate(-7.649 30.392) rotate(-45)" fill="#676767"/></svg>
                </li>
                <li>
                    <img src="dist/images/avatar-5.jpg" width="64" height="64" srcset="dist/images/avatar-5@2x.jpg 2x"/>
                    <h2 class="name">Denise Ahn-Joe</h2>
                    <svg class="icon-arrow-right" data-name="Arrow right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>icons</title><path d="M20.394,37.469l11.9-11.9L31.721,25l-11.9,11.9a0.807,0.807,0,1,0,1.141,1.141l11.9-11.9-0.57-.57Z" fill="#676767"/><path d="M20.394,12.531l11.9,11.9,0.57-.57-11.9-11.9A0.807,0.807,0,1,0,19.823,13.1L31.721,25l0.571-.571Z" fill="#676767"/><rect x="31.888" y="24.597" width="0.807" height="0.807" transform="translate(-8.22 30.156) rotate(-45)" fill="#676767"/><rect x="32.459" y="25.167" width="0.807" height="0.807" transform="translate(-8.456 30.73) rotate(-45.005)" fill="#676767"/><rect x="33.029" y="24.597" width="0.807" height="0.807" transform="translate(-7.886 30.959) rotate(-44.995)" fill="#676767"/><rect x="32.459" y="24.026" width="0.807" height="0.807" transform="translate(-7.649 30.392) rotate(-45)" fill="#676767"/></svg>
                </li>
                <li data-fav="true">
                    <img src="dist/images/avatar-6.jpg" width="64" height="64" srcset="dist/images/avatar-6@2x.jpg 2x"/>
                    <h2 class="name">Sammy White</h2>
                    <svg class="icon-arrow-right" data-name="Arrow right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>icons</title><path d="M20.394,37.469l11.9-11.9L31.721,25l-11.9,11.9a0.807,0.807,0,1,0,1.141,1.141l11.9-11.9-0.57-.57Z" fill="#676767"/><path d="M20.394,12.531l11.9,11.9,0.57-.57-11.9-11.9A0.807,0.807,0,1,0,19.823,13.1L31.721,25l0.571-.571Z" fill="#676767"/><rect x="31.888" y="24.597" width="0.807" height="0.807" transform="translate(-8.22 30.156) rotate(-45)" fill="#676767"/><rect x="32.459" y="25.167" width="0.807" height="0.807" transform="translate(-8.456 30.73) rotate(-45.005)" fill="#676767"/><rect x="33.029" y="24.597" width="0.807" height="0.807" transform="translate(-7.886 30.959) rotate(-44.995)" fill="#676767"/><rect x="32.459" y="24.026" width="0.807" height="0.807" transform="translate(-7.649 30.392) rotate(-45)" fill="#676767"/></svg>
                    <svg class="icon-star-filled" data-name="Star filled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>icons</title><path d="M39.986,47.6L25.141,39.8,10.3,47.6l2.835-16.53L1.122,19.366l16.6-2.412L25.141,1.915l7.423,15.039,16.6,2.412L37.151,31.073Z" fill="#676767"/></svg>
                </li>
                <li>
                    <img src="dist/images/avatar-7.jpg" width="64" height="64" srcset="dist/images/avatar-7@2x.jpg 2x"/>
                    <h2 class="name">Rick Ash</h2>
                    <svg class="icon-arrow-right" data-name="Arrow right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>icons</title><path d="M20.394,37.469l11.9-11.9L31.721,25l-11.9,11.9a0.807,0.807,0,1,0,1.141,1.141l11.9-11.9-0.57-.57Z" fill="#676767"/><path d="M20.394,12.531l11.9,11.9,0.57-.57-11.9-11.9A0.807,0.807,0,1,0,19.823,13.1L31.721,25l0.571-.571Z" fill="#676767"/><rect x="31.888" y="24.597" width="0.807" height="0.807" transform="translate(-8.22 30.156) rotate(-45)" fill="#676767"/><rect x="32.459" y="25.167" width="0.807" height="0.807" transform="translate(-8.456 30.73) rotate(-45.005)" fill="#676767"/><rect x="33.029" y="24.597" width="0.807" height="0.807" transform="translate(-7.886 30.959) rotate(-44.995)" fill="#676767"/><rect x="32.459" y="24.026" width="0.807" height="0.807" transform="translate(-7.649 30.392) rotate(-45)" fill="#676767"/></svg>
                </li>
            </ul>
        </section>
        <div id="contact-list-actions" class="menu-list has-stacked-icons">
            <ul>
                <li class="hidden-lg">
                    <button id="contact-list-actions-all" class="active">
                        <svg class="icon-user-outline" data-name="User outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>icons</title><g id="MlyRVG.tif"><path d="M14.647,30.045a12.139,12.139,0,0,1-1.17-1.817,27.174,27.174,0,0,0-2.33-4.094,6.6,6.6,0,0,1-1.012-5.153,1.8,1.8,0,0,1,.4-0.883,1.461,1.461,0,0,0,.381-1.165,25.8,25.8,0,0,1,.177-3.8,7.868,7.868,0,0,1,6.7-6.639,13.35,13.35,0,0,1,7.4.572,4.972,4.972,0,0,1,3.264,3.4,0.831,0.831,0,0,0,.2.327,4.062,4.062,0,0,1,1.1,2.836c0.01,0.925.04,1.849,0.071,2.774a0.619,0.619,0,0,0,.1.409,2.869,2.869,0,0,1,.883,2.474,8.009,8.009,0,0,1-1.864,4.955,6.541,6.541,0,0,0-1.03,1.879,12.082,12.082,0,0,1-2.382,3.937c0.2,0.114.378,0.222,0.561,0.31,2.9,1.39,5.755,2.871,8.7,4.139a8.955,8.955,0,0,1,5.316,6.739,30.347,30.347,0,0,1,.494,3.669,0.932,0.932,0,0,1-.74,1.172,28.5,28.5,0,0,1-6.638,1.7,85.514,85.514,0,0,1-15.058.88A66.329,66.329,0,0,1,4,47.088C2.9,46.818,1.837,46.4.758,46.046A0.881,0.881,0,0,1,.1,45.07a15.6,15.6,0,0,1,3.346-9.232A6,6,0,0,1,5.81,34.005C8,33.058,10.2,32.113,12.383,31.148,13.15,30.809,13.891,30.415,14.647,30.045ZM1.686,44.684c0.221,0.091.385,0.168,0.556,0.226,0.343,0.116.687,0.23,1.035,0.33A55.961,55.961,0,0,0,16.385,47a88.011,88.011,0,0,0,15.862-.685,32.384,32.384,0,0,0,6.3-1.43,0.534,0.534,0,0,0,.444-0.628,14.833,14.833,0,0,0-.8-4.061,6.225,6.225,0,0,0-3.38-3.869c-0.543-.237-1.062-0.53-1.6-0.788-2.819-1.362-5.644-2.713-8.455-4.092a0.714,0.714,0,0,0-.873.048,5.9,5.9,0,0,1-4.716,1.136,7.8,7.8,0,0,1-3.221-1.449c-1.1.537-2.153,1.087-3.236,1.57-2.091.933-4.214,1.8-6.292,2.758a5.127,5.127,0,0,0-1.657,1.215A13.546,13.546,0,0,0,1.686,44.684Zm27.5-26.368a0.9,0.9,0,0,1-.948-1.115c-0.037-1.155-.013-2.312-0.081-3.465a2.487,2.487,0,0,0-.38-1.442,6.719,6.719,0,0,1-1.129-2.062,3.288,3.288,0,0,0-1.985-1.692,12.07,12.07,0,0,0-6.914-.41,6.2,6.2,0,0,0-5.158,5.847c-0.118,1.295-.071,2.605-0.09,3.909a1.054,1.054,0,0,1-.863,1.326,6.744,6.744,0,0,0,2,5.673,2.209,2.209,0,0,1,.484.829A8.15,8.15,0,0,0,16.5,29.642a5.225,5.225,0,0,0,7.369-.064A10.708,10.708,0,0,0,26.7,24.784a2.613,2.613,0,0,1,.546-0.96A6.859,6.859,0,0,0,29.19,18.316Z" fill="#fff"/><path d="M33.582,26.3a6.968,6.968,0,0,1-3.024,1.423,5.237,5.237,0,0,1-.935.068,0.736,0.736,0,0,1-.767-0.738,0.744,0.744,0,0,1,.676-0.832c2.561-.114,4.1-1.7,5.3-3.72A25,25,0,0,0,36,19.787a3.033,3.033,0,0,1,.477-0.835,6.78,6.78,0,0,0,1.982-5.538,1.017,1.017,0,0,1-.959-1.286c-0.029-1.271-.044-2.542-0.1-3.811A1.955,1.955,0,0,0,36.6,6.8a0.933,0.933,0,0,1-.358-0.559,2.962,2.962,0,0,0-1.461-2.183,6.7,6.7,0,0,0-3.069-1.008,13.093,13.093,0,0,0-5.011.235,6.759,6.759,0,0,0-2.953,1.636,0.8,0.8,0,0,1-1.254.067,0.839,0.839,0,0,1,.15-1.226,8.517,8.517,0,0,1,4.893-2.279,13.639,13.639,0,0,1,6.78.59,5.055,5.055,0,0,1,3.442,3.472,0.8,0.8,0,0,0,.2.33A4.117,4.117,0,0,1,39.065,8.8c0.014,0.875.011,1.751,0.034,2.625a0.712,0.712,0,0,0,.157.486,2.452,2.452,0,0,1,.809,1.845,8.319,8.319,0,0,1-2.21,6.064,2.35,2.35,0,0,0-.4.718,12.816,12.816,0,0,1-2.291,4.184c-0.1.125-.2,0.257-0.351,0.454,1.45,0.721,2.853,1.44,4.274,2.122,1.857,0.891,3.711,1.793,5.6,2.614a7.5,7.5,0,0,1,3.932,4.051A15.378,15.378,0,0,1,49.9,40.216a0.92,0.92,0,0,1-.674.921,28.582,28.582,0,0,1-5.519,1.506c-0.323.063-.645,0.136-0.971,0.186a0.807,0.807,0,1,1-.282-1.576c1.76-.42,3.517-0.856,5.28-1.263a0.639,0.639,0,0,0,.548-0.839,13.013,13.013,0,0,0-1.457-5.3,5.511,5.511,0,0,0-2.491-2.32q-4.383-2.062-8.746-4.169C34.921,27.046,34.28,26.67,33.582,26.3Z" fill="#fff"/></g></svg>
                        <span class="title">contacts</span>
                    </button>
                </li>
                <li class="hidden-lg">
                    <button id="contact-list-actions-favorite" data-filter="contact-list-overview">
                        <svg class="icon-star-outline" data-name="Star outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>icons</title><path d="M39.916,47.6L25.071,39.8,10.226,47.6l2.835-16.53L1.052,19.366l16.6-2.412L25.071,1.915l7.423,15.039,16.6,2.412L37.081,31.073ZM25.071,37.975l12.7,6.678L35.347,30.51,45.623,20.493l-14.2-2.064L25.071,5.56,18.719,18.429l-14.2,2.064L14.794,30.51,12.369,44.653Z" fill="#FFF"/></svg>
                        <span class="title">favorites</span>
                    </button>
                </li>
                <li>
                    <button id="contact-list-actions-add">
                        <svg class="icon-plus" data-name="Add" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>icons</title><path d="M24.666,43.44a0.807,0.807,0,0,1-.807-0.807V7.367a0.807,0.807,0,0,1,1.614,0V42.634A0.807,0.807,0,0,1,24.666,43.44Z" fill="#fff"/><line x1="7.032" y1="25" x2="42.299" y2="25" fill="#fff"/><path d="M42.3,25.807H7.032a0.807,0.807,0,0,1,0-1.614H42.3A0.807,0.807,0,0,1,42.3,25.807Z" fill="#fff"/></svg>
                        <span class="title">add <span class="hidden-md-down">contact</span></span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
    <section id="contact-details-wrap" class="view details-view">
        <nav id="menu-contextual-contact-details" class="hidden-md-up">
            <ul>
                <li>
                    <button id="contact-details-back" class="back-button">< back</button>
                </li>
            </ul>
        </nav>
        <form id="contact-details" class="read-mode">
            <header id="contact-details-header">
                <div class="form-control has-image">
                    <label for="contact-details-image-field">
                        <!-- By Google, Chromium project [BSD (http://opensource.org/licenses/bsd-license.php)], via Wikimedia Commons -->
                        <!--<img src="dist/images/avatar-placeholder.jpg" width="64" height="64" srcset="dist/images/avatar-placeholder@2x.jpg 2x"/> -->
                        <img src="dist/images/avatar-1.jpg" width="64" height="64" alt="" srcset="dist/images/avatar-1@2x.jpg 2x"/>
                        <span id="edit-image-field" class="is-hidden">add<br/>photo</span>
                    </label>
                    <input disabled hidden id="contact-details-image-field" type="file"/>
                </div>
                <div class="form-control has-name">
                    <input disabled id="contact-details-name-field" type="text" title="contact name" value="Ben Highcastle"/>
                </div>
                <div class="form-control has-favorite">
                    <label for="contact-details-favorite-field">
                        <svg class="icon-star-outline unchecked" data-name="Star outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>icons</title><path d="M39.916,47.6L25.071,39.8,10.226,47.6l2.835-16.53L1.052,19.366l16.6-2.412L25.071,1.915l7.423,15.039,16.6,2.412L37.081,31.073ZM25.071,37.975l12.7,6.678L35.347,30.51,45.623,20.493l-14.2-2.064L25.071,5.56,18.719,18.429l-14.2,2.064L14.794,30.51,12.369,44.653Z" fill="#FFF"/></svg>
                        <svg hidden class="icon-star-filled checked" data-name="Star filled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>icons</title><path d="M39.986,47.6L25.141,39.8,10.3,47.6l2.835-16.53L1.122,19.366l16.6-2.412L25.141,1.915l7.423,15.039,16.6,2.412L37.151,31.073Z" fill="#676767"/></svg>
                    </label>
                    <input disabled hidden id="contact-details-favorite-field" name="contact-details-favorite" type="checkbox"/>
                </div>
            </header>
            <div id="contact-details-phone" class="form-section">
                <div class="form-control">
                    <div class="label-wrapper">
                        <label for="contact-details-phone-work-field">work</label>
                    </div>
                    <div class="element-wrapper">
                        <input disabled id="contact-details-phone-work-field" type="tel" value="(085) 760 0233"/>
                    </div>
                </div>
                <div class="form-control">
                    <div class="label-wrapper">
                        <label for="contact-details-phone-mobile-field">mobile</label>
                    </div>
                    <div class="element-wrapper">
                        <input disabled id="contact-details-phone-mobile-field" type="tel" value="(06) 1337 1337"/>
                    </div>
                </div>
            </div>
            <div id="contact-details-mail" class="form-section">
                <div class="form-control">
                    <div class="label-wrapper">
                        <label for="contact-details-mail-work-field">work</label>
                    </div>
                    <div class="element-wrapper">
                        <input disabled id="contact-details-mail-work-field" type="email" value="ben@highcastle.biz"/>
                    </div>
                </div>
                <div class="form-control">
                    <div class="label-wrapper">
                        <label for="contact-details-mail-private-field">private</label>
                    </div>
                    <div class="element-wrapper">
                        <input disabled id="contact-details-mail-private-field" type="email" value="ben@owned.net"/>
                    </div>
                </div>
            </div>
            <div id="contact-details-address" class="form-section">
                <div class="form-control">
                    <div class="label-wrapper">
                        <label for="contact-details-address-field-line-1">home</label>
                    </div>
                    <div class="element-wrapper">
                        <input disabled id="contact-details-address-field-line-1" title="street and housenumber" type="text" value="Castleroad 1"/>
                    </div>
                    <div class="element-wrapper">
                        <input disabled id="contact-details-address-field-line-2" title="city" type="text" value="Kingdom 7"/>
                    </div>
                    <div class="element-wrapper">
                        <input disabled id="contact-details-address-field-line-3" title="country" type="text" value="United Kingdoms"/>
                    </div>
                </div>
            </div>
            <div id="contact-details-note" class="form-section">
                <div class="label-wrapper">
                    <label for="contact-details-note-field">note</label>
                </div>
                <div class="element-wrapper">
                    <textarea disabled id="contact-details-note-field">
Being the richest man in the cemetery doesn't matter to me.
Going to bed at night saying we've done something wonderful, that's what matters to me.

Innovation distinguishes between a leader and a follower.

Sometimes when you innovate, you make mistakes.
It is best to admit them quickly, and get on with improving your other innovations.

Be a yardstick of quality. Some people aren't used to an environment where excellence is expected.

It's really hard to design products by focus groups.
A lot of times, people don't know what they want until you show it to them.

Design is not just what it looks like and feels like. Design is how it works.

I want to put a ding in the universe.

My favorite things in life don't cost any money.
It's really clear that the most precious resource we all have is time.

Sometimes life is going to hit you in the head with a brick. Don't lose faith.

I'm convinced that about half of what separates the successful entrepreneurs from the non-successful ones is pure perseverance.
                    </textarea>
                </div>
            </div>
        </form>
        <div id="contact-details-actions" class="menu-list has-stacked-icons">
            <ul>
                <li>
                    <a href="tel:(06) 1337 1337" id="contact-details-actions-call" class="button">
                        <svg class="icon-phone" data-name="Call" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>icons</title><path d="M36.43,47.2a4.2,4.2,0,0,1-.736-0.065l-0.542-.091c-0.5-.083-1.025-0.168-1.543-0.306a47.2,47.2,0,0,1-16.423-8.2A42.95,42.95,0,0,1,6.233,26.261,44.811,44.811,0,0,1,2.27,17.453L2.229,17.33l0.012-1.639a11.642,11.642,0,0,1,1.464-3.935,26.147,26.147,0,0,1,5.51-6.415C9.36,5.214,9.492,5.1,9.629,4.988a2.467,2.467,0,0,1,3.436.186,72.6,72.6,0,0,1,6.989,8.275,2.21,2.21,0,0,1-.429,3.022,24.714,24.714,0,0,0-4.092,4.17,0.577,0.577,0,0,0-.057.856,39.065,39.065,0,0,0,13.1,12.388c0.535,0.3,1.11.589,1.709,0.873,0.467,0.222.514,0.168,0.737-.091,0.771-.9,1.506-1.869,2.217-2.808l0.083-.11c0.247-.326.47-0.677,0.705-1.048l0.258-.4a2.379,2.379,0,0,1,3.417-.8c0.548,0.33,1.082.683,1.616,1.036,0.26,0.172.52,0.344,0.781,0.513l1.363,0.882q2.428,1.571,4.865,3.13a3.094,3.094,0,0,1,1.388,1.51L47.771,36.7v1.133l-0.163.288a3.477,3.477,0,0,1-.192.322,26.449,26.449,0,0,1-7.444,7.4A6.554,6.554,0,0,1,36.43,47.2ZM3.843,17.071a43.137,43.137,0,0,0,3.778,8.368A41.345,41.345,0,0,0,18.166,37.259a45.6,45.6,0,0,0,15.862,7.923c0.44,0.117.9,0.193,1.385,0.272l0.565,0.1c1.075,0.189,1.933-.3,3.119-1.063a24.884,24.884,0,0,0,6.992-6.959c0.025-.037.048-0.076,0.069-0.115V37.02a1.93,1.93,0,0,0-.691-0.6q-2.445-1.556-4.875-3.136L39.229,32.4c-0.267-.172-0.531-0.347-0.8-0.522-0.515-.34-1.03-0.681-1.558-1a0.783,0.783,0,0,0-1.231.3l-0.249.39c-0.243.383-.494,0.778-0.781,1.157l-0.084.11c-0.725.958-1.476,1.949-2.278,2.885a2,2,0,0,1-2.654.5c-0.628-.3-1.233-0.607-1.8-0.919a40.63,40.63,0,0,1-13.648-12.88,2.15,2.15,0,0,1,.1-2.759,26.335,26.335,0,0,1,4.358-4.443,0.606,0.606,0,0,0,.139-0.814,71.065,71.065,0,0,0-6.835-8.093,0.859,0.859,0,0,0-1.274-.065c-0.121.1-.237,0.2-0.353,0.3A24.62,24.62,0,0,0,5.1,12.574,10.061,10.061,0,0,0,3.843,15.9v1.173Z" fill="#fff"/></svg>
                        <span class="title">call</span>
                    </a>
                </li>
                <li>
                    <a href="mailto:ben@owned.net" id="contact-details-actions-mail" class="button">
                        <svg class="icon-envelope" data-name="Mail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>icons</title><path d="M1.513,36.568V15.721a0.949,0.949,0,0,0,.021-0.114,4.642,4.642,0,0,1,.309-1.386,5.3,5.3,0,0,1,4.929-3.339q18.233,0.007,36.466,0a5.33,5.33,0,0,1,.77.051,5.147,5.147,0,0,1,2.758,1.286,4.928,4.928,0,0,1,1.721,3.8q0,10.149,0,20.3a4.887,4.887,0,0,1-1.372,3.406,5.189,5.189,0,0,1-3.89,1.675q-9.439,0-18.879,0-8.754,0-17.509,0A5.7,5.7,0,0,1,5.9,41.331a5.2,5.2,0,0,1-3.13-1.742,4.875,4.875,0,0,1-1.2-2.557C1.55,36.877,1.533,36.722,1.513,36.568ZM25,12.672q-9.072,0-18.144,0a3.435,3.435,0,0,0-1.519.308,3.253,3.253,0,0,0-2.028,3.115q0,10.1,0,20.2a3.076,3.076,0,0,0,.862,2.181A3.47,3.47,0,0,0,6.8,39.608h15.3q10.54,0,21.08,0a3.419,3.419,0,0,0,1.614-.361A3.239,3.239,0,0,0,46.695,36.2q0-10.11,0-20.219a3.065,3.065,0,0,0-.813-2.122,3.509,3.509,0,0,0-2.716-1.192H25Z" fill="#fff"/><path d="M25,30.553a0.759,0.759,0,0,1-.593-0.209q-3.455-2.681-6.919-5.351-6.418-4.959-12.834-9.921a1.03,1.03,0,0,1-.435-0.867,0.57,0.57,0,0,1,.084-0.295A1.108,1.108,0,0,1,5.2,13.4a0.6,0.6,0,0,1,.4.137Q7.358,14.9,9.115,16.266L24.522,28.217c0.126,0.1.257,0.191,0.377,0.3a0.133,0.133,0,0,0,.2,0q1.662-1.3,3.33-2.587L44.281,13.636a2.053,2.053,0,0,1,.2-0.155,0.676,0.676,0,0,1,.548-0.055,1.246,1.246,0,0,1,.608.392,0.65,0.65,0,0,1,.122.635,1.163,1.163,0,0,1-.414.625L25.652,30.3a0.846,0.846,0,0,0-.085.066A0.648,0.648,0,0,1,25,30.553Z" fill="#fff"/><path d="M8.773,35.081a0.974,0.974,0,0,1-.859-0.51,0.66,0.66,0,0,1-.028-0.621A1.214,1.214,0,0,1,8.3,33.392q2.811-2.105,5.62-4.214a0.584,0.584,0,0,0,.054-0.041,0.7,0.7,0,0,1,.867-0.1,1.7,1.7,0,0,1,.416.3,0.641,0.641,0,0,1,.137.691,1.166,1.166,0,0,1-.424.607L9.36,34.839a0.82,0.82,0,0,1-.392.225C8.9,35.071,8.838,35.076,8.773,35.081Z" fill="#fff"/><path d="M41.206,35.075a0.729,0.729,0,0,1-.52-0.2C39.861,34.245,39.029,33.626,38.2,33c-1.064-.8-2.132-1.592-3.191-2.4a1.033,1.033,0,0,1-.433-0.877,0.543,0.543,0,0,1,.137-0.358,1.137,1.137,0,0,1,.862-0.434,0.6,0.6,0,0,1,.372.128Q37.184,30,38.423,30.931c1.105,0.831,2.216,1.655,3.316,2.492a1,1,0,0,1,.425.935,0.494,0.494,0,0,1-.081.227A0.977,0.977,0,0,1,41.206,35.075Z" fill="#fff"/></svg>
                        <span class="title">email</span>
                    </a>
                </li>
                <li>
                    <button id="contact-details-actions-edit">
                        <svg class="icon-pen" data-name="Edit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>icons</title><path d="M8.98,44.5l-1.022-.034A2.479,2.479,0,0,1,6.351,42.98l-0.065-.152,0.009-.971L6.4,41.148c0.079-.514.159-1.027,0.23-1.542l0.3-2.188c0.221-1.636.442-3.271,0.682-4.9a2.475,2.475,0,0,1,.658-1.257C8.875,30.62,9.5,30,10.122,29.383l5.211-5.206q7.3-7.3,14.592-14.6A5.506,5.506,0,0,1,32.866,7.8l0.14-.012L34.119,7.8a5.7,5.7,0,0,1,2.992,1.873C38.4,11,39.74,12.339,41.087,13.648a5.7,5.7,0,0,1,1.9,3.016L43,16.817l-0.012,1.1a5.587,5.587,0,0,1-1.827,2.99C34.436,27.611,27.273,34.76,20.122,41.963a4.586,4.586,0,0,1-2.889,1.378c-1.993.238-4.018,0.518-5.977,0.79l-2.118.295ZM8.325,42.884h0.3a0.961,0.961,0,0,1,.193-0.046l2.212-.3c1.966-.273,4-0.554,6.006-0.794a2.991,2.991,0,0,0,1.936-.913C26.131,33.621,33.3,26.47,40.02,19.763A4.216,4.216,0,0,0,41.386,17.7V16.9a4.386,4.386,0,0,0-1.423-2.094c-1.358-1.32-2.707-2.669-4.009-4.01a4.219,4.219,0,0,0-2.07-1.4h-0.8a4.014,4.014,0,0,0-2.014,1.315q-7.288,7.312-14.594,14.607l-5.216,5.211c-0.612.607-1.225,1.215-1.819,1.839a0.894,0.894,0,0,0-.231.379C8.969,34.375,8.749,36,8.529,37.634l-0.3,2.192C8.159,40.35,8.079,40.872,8,41.394l-0.1.644v0.441A0.841,0.841,0,0,0,8.325,42.884Z" fill="#fff"/><rect x="30.779" y="12.77" width="1.613" height="12.908" transform="translate(-4.287 28.188) rotate(-45.356)" fill="#fff"/></svg>
                        <span class="title">edit</span>
                    </button>
                </li>
                <li class="is-hidden">
                    <button id="contact-details-actions-delete">
                        <svg class="icon-cross" data-name="Close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>icons</title><line x1="37.509" y1="12.531" x2="12.572" y2="37.469" fill="#fff"/><path d="M12,38.039A0.807,0.807,0,0,1,12,36.9L36.939,11.961A0.807,0.807,0,0,1,38.08,13.1L13.142,38.039A0.807,0.807,0,0,1,12,38.039Z" fill="#fff"/><line x1="12.572" y1="12.531" x2="37.509" y2="37.469" fill="#fff"/><path d="M36.938,38.039L12,13.1a0.807,0.807,0,0,1,1.141-1.141L38.079,36.9A0.807,0.807,0,1,1,36.938,38.039Z" fill="#fff"/></svg>
                        <span class="title">delete</span>
                    </button>
                </li>
                <li class="is-hidden">
                    <button id="contact-details-actions-favorite">
                        <svg class="icon-star-outline" data-name="Star outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>icons</title><path d="M39.916,47.6L25.071,39.8,10.226,47.6l2.835-16.53L1.052,19.366l16.6-2.412L25.071,1.915l7.423,15.039,16.6,2.412L37.081,31.073ZM25.071,37.975l12.7,6.678L35.347,30.51,45.623,20.493l-14.2-2.064L25.071,5.56,18.719,18.429l-14.2,2.064L14.794,30.51,12.369,44.653Z" fill="#FFF"/></svg>
                        <span class="title">favorite</span>
                    </button>
                </li>
                <li class="is-hidden">
                    <button id="contact-details-actions-save">
                        <svg class="icon-checkmark" data-name="Check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>icons</title><path d="M22.541,39.967a0.807,0.807,0,0,1-.624-0.3L8.78,23.63a0.807,0.807,0,1,1,1.248-1.023L22.459,37.787l17.457-27.38a0.807,0.807,0,0,1,1.361.867L23.221,39.594a0.807,0.807,0,0,1-.633.371Z" fill="#fff"/></svg>
                        <span class="title">save</span>
                    </button>
                </li>
            </ul>
        </div>
    </section>
</main>

    <!-- Javascript -->
    <script src="dist/scripts/app.js"></script>

</body>
</html>
