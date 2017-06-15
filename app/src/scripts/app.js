/**
 * Initialisation and global listeners
 */

document.addEventListener('DOMContentLoaded', () => {
    /**
     * Initialize global variables
     **/
    pcard.initVars();
    console.dir(pcard);
    getContactList();

    /**
     * Listen for triggers
     **/
    pcard.triggers.contact.edit.addEventListener('click', () => editContact(pcard.triggers.contact.select));
    pcard.triggers.contact.save.addEventListener('click', () => saveContact(pcard.triggers.contact.select));
    pcard.form.fields.note.addEventListener('keyup', () => autogrow(pcard.form.fields.note, 20));

    /**
     * Initialize favorite click listener
     **/
    toggleFavorite();

    /**
     * Initialize toggle between fav and all contacts
     **/
    toggleListView();

    /**
     * Initialize toggle between contact list and contact details
     **/
    toggleView();

    /**
     * Initialize favorite contact list filter
     **/
    filterContactList();

    /**
     * Set textarea height to content height
     **/
    autogrow(pcard.form.fields.note);
});

window.addEventListener('resize', () => {
    /**
     * Set textarea height to content height
     **/
    autogrow(pcard.form.fields.note);
});

window.addEventListener('scroll', () => {
});

window.addEventListener('load', () => {
});
