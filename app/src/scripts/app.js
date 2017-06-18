/**
 * Fix
 * todo: resize images in PHP and save @2x version [128x128px] and normal version [64x64px]
 * todo: use FormData(form) for POST > change PHP logic in ajax/*.php files
 * todo: on document load if there are no contacts > initialise write mode
 * todo: switch to all contacts view when adding non favorite contact while in favorite filter
 * todo: update favorite filter to listen to removed/added favorite status on list item
 *
 * Extra functions
 * todo: export_contact
 * todo: contact_cookie
 * todo: fuzzy_search
 */

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
    pcard.form.fields.image.addEventListener('change', () => processImage(pcard.form.fields.image));
    pcard.list.searchInput.addEventListener('keyup', () => filterContactList());

    /**
     * Theme functions
     **/
    toggleListView();
    toggleBetweenContacts();
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
    window.viewportUnitsBuggyfill.init();
    mqClasses(pcard.vars.windowW);
    autogrow(pcard.form.fields.note);
});

window.addEventListener('resize', () => {
    // update window width
    pcard.vars.windowW = window.innerWidth;

    if (document.getElementById('patched-viewport')) {
        viewportUnitsBuggyfill.refresh();
    }
    mqClasses(pcard.vars.windowW);
    autogrow(pcard.form.fields.note);
});

window.addEventListener('scroll', () => {});
window.addEventListener('load', () => {});
