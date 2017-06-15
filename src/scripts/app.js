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
    autogrow(pcard.theme.textarea);
});

window.addEventListener('resize', () => {
    /**
     * Set textarea height to content height
     **/
    autogrow(document.getElementById(pcard.theme.textareaId));
});

window.addEventListener('scroll', () => {
});

window.addEventListener('load', () => {
});
