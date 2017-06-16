/**
 * Initialisation and global listeners
 */

document.addEventListener('DOMContentLoaded', () => {
    /**
     * Initialize global variables
     **/

    pcard.initVars();

    /**
     * Listen for triggers
     **/

    pcard.triggers.contact.edit.addEventListener('click', () => editContact(pcard.triggers.contact.select));
    pcard.triggers.contact.save.addEventListener('click', () => saveContact(pcard.triggers.contact.select));
    pcard.triggers.contact.delete.addEventListener('click', () => deleteContact(pcard.triggers.contact.select));
    pcard.triggers.list.add.addEventListener('click', () => addContact());
    pcard.form.fields.note.addEventListener('keyup', () => autogrow(pcard.form.fields.note, 20));

    /**
     * Initialize theme functions
     **/

    // toggle between fav and all contacts
    toggleListView();

    // toggle between contacts
    toggleContact();

    // toggleFavorite();
    toggleFavorite();

    // toggle to contact list
    toggleToContactList();

    // favorite contact list filter
    filterContactList();

    // Set textarea height to content height
    autogrow(pcard.form.fields.note);
});

window.addEventListener('resize', () => {
    // Set textarea height to content height
    autogrow(pcard.form.fields.note);
});

window.addEventListener('scroll', () => {
});

window.addEventListener('load', () => {
});
