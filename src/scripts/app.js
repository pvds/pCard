/**
 * Main functions
 *  > get_contact_list
 *      - AJAX get contacts.json
 *  > show_contact_list
 *      - AJAX post contact_list view partial
 *  > search_contact_list
 *      - Filter current contact_list based on name fragments && toggle css classes
 *  > get_contact
 *      - AJAX get contacts.json & filter user_id
 *  > show_contact
 *      - AJAX post contact view partial
 *  > save_contact
 *      - AJAX post pCard object && PHP add to contacts.json
 *  > edit_contact
 *      - AJAX post pCard object && PHP modify/replace object in contacts.json
 *  > delete_contact
 *      - AJAX post user_id && PHP delete object with user_id from contacts.json
 *
 * Extra functions
 *  > export_contact
 *  > contact_cookie
 *  > fuzzy_search
 */

document.addEventListener('DOMContentLoaded', () => {
    /**
     * Initialize global variables
     **/
    pcard.init();
});

window.addEventListener('resize', () => {
});

window.addEventListener('scroll', () => {
});

window.addEventListener('load', () => {
});
