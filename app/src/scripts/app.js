document.addEventListener('DOMContentLoaded', () => {
    /**
     * Global variables
     **/
    pcard.initVars();

    /**
     * Theme listeners
     **/
    pcard.triggers.contact.edit.addEventListener('click', () => editContact(pcard.triggers.contact.select));
    pcard.triggers.contact.save.addEventListener('click', () => saveContact(pcard.triggers.contact.select));
    pcard.triggers.contact.delete.addEventListener('click', () => deleteContact(pcard.triggers.contact.select));
    pcard.triggers.list.add.addEventListener('click', () => addContact());
    pcard.form.fields.image.addEventListener('change', () => showImage(pcard.form.fields.image));
    pcard.list.searchInput.addEventListener('keyup', () => filterContactList());

    /**
     * Theme functions
     **/
    toggleListView();
    toggleContact();
    toggleFavorite();
    toggleToContactList();
    filterContactList();

    /**
     * Helper listeners
     **/
    pcard.form.fields.note.addEventListener('keyup', () => autogrow(pcard.form.fields.note, 20));

    /**
     * Helper functions
     **/
    autogrow(pcard.form.fields.note);
});

window.addEventListener('resize', () => {
    autogrow(pcard.form.fields.note);
});

window.addEventListener('scroll', () => {});
window.addEventListener('load', () => {});
