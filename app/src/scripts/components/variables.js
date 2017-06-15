/**
 * pCard variables
 */
pcard.initVars = function () {
    /**
     * Global variables
     */

    // get document <html>
    this.vars.html = document.documentElement;

    // switch js detection class
    this.vars.html.classList.remove('no-js');
    this.vars.html.classList.add('js');

    // get document <body>
    this.vars.body = document.getElementsByTagName('body');

    // get animation elements
    this.vars.animateEl = document.querySelectorAll('.is-animate');

    // get window Width
    this.vars.windowW = window.innerWidth;

    // get window height
    this.vars.windowH = window.innerHeight;

    // get window scroll top
    this.vars.windowScrollTop = window.pageYOffset;

    // detect device type
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        this.vars.mobile = true;
        this.vars.html.classList.add('mobile');
    } else {
        this.vars.mobile = false;
        this.vars.html.classList.add('desktop');
    }

    /**
     * pCard vars
     */
    // Contact detail triggers
    this.triggers.contact.select = document.querySelectorAll(pcard.triggers.contact.selectQuery);
    this.triggers.contact.call = document.getElementById(pcard.triggers.contact.callId);
    this.triggers.contact.mail = document.getElementById(pcard.triggers.contact.mailId);
    this.triggers.contact.edit = document.getElementById(pcard.triggers.contact.editId);
    this.triggers.contact.save = document.getElementById(pcard.triggers.contact.saveId);
    this.triggers.contact.delete = document.getElementById(pcard.triggers.contact.deleteId);

    // Contact list triggers
    this.triggers.list.select = document.querySelectorAll(pcard.triggers.list.selectQuery);
    this.triggers.list.all = document.getElementById(pcard.triggers.list.allId);
    this.triggers.list.fav = document.getElementById(pcard.triggers.list.favId);
    this.triggers.list.add = document.getElementById(pcard.triggers.list.addId);

    // Form fields
    this.form.element = document.getElementById(pcard.form.elementId);
    this.form.fields.select = document.querySelectorAll(pcard.form.fields.selectQuery);
    this.form.fields.note = document.getElementById(pcard.form.fields.noteId);
};
