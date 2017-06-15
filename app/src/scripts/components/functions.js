/**
 * Main functions
 *  > todo: get_contact_list
 *      - AJAX get contacts.json
 *  > todo: show_contact_list
 *      - AJAX post contact_list view partial
 *  > search_contact_list
 *      - Filter current contact_list based on name fragments && toggle css classes
 *  > todo: get_contact
 *      - AJAX get contacts.json & filter user_id
 *  > todo: show_contact
 *      - AJAX post contact view partial
 *  > todo: save_contact
 *      - AJAX post pCard object && PHP add to contacts.json
 *  > todo: edit_contact
 *      - AJAX post pCard object && PHP modify/replace object in contacts.json
 *  > todo: delete_contact
 *      - AJAX post user_id && PHP delete object with user_id from contacts.json
 *
 * Extra functions
 *  > todo: export_contact
 *  > todo: contact_cookie
 *  > todo: fuzzy_search
 */
const contacts = ajaxGet('/data/contacts.demo.json');

const toggleContactTriggers = (triggers) => {
    triggers.forEach((trigger) => {
        trigger.parentNode.classList.toggle('is-hidden');
    });
};

const toggleReadWrite = (editFields) => {
    // Toggle readonly field attribute
    pcard.form.fields.select.forEach((field) => {
        if (editFields) {
            field.removeAttribute('disabled');
        } else {
            field.setAttribute('disabled', '');
        }
    });

    // Toggle readonly form class
    pcard.form.element.classList.toggle('write-mode');
    pcard.form.element.classList.toggle('read-mode');
};

const toggleFavorite = () => {
    const favTrigger = document.getElementById('contact-details-actions-favorite');
    const favInput = document.getElementById('contact-details-favorite-field');
    const favIconChecked = document.querySelector('.has-favorite svg.checked');
    const favIconUnchecked = document.querySelector('.has-favorite svg.unchecked');

    favTrigger.addEventListener('click', () => {
        favInput.click();
    });

    favInput.addEventListener('click', () => {
        if (favInput.checked) {
            favIconUnchecked.setAttribute('hidden', '');
            favIconChecked.removeAttribute('hidden');
        } else {
            favIconChecked.setAttribute('hidden', '');
            favIconUnchecked.removeAttribute('hidden');
        }
    });
};

/**
 * Contact list functions
 **/

// TODO: rename to all 'add' instances to 'create'
const addContact = () => {
    console.log('adding new contact!');
};

const showContact = () => {
    console.log('showing contact!');
};

const getContact = () => {
    console.log('getting contact!');
    showContact();
};

const showContactList = () => {
    console.log('showing contact list!');
};

const getContactList = () => {
    console.log('getting contact list!');

    contacts.then((data) => {
        console.log(JSON.parse(data));
    });

    // showContactList();
};

function onViewChange(evt, contactTrigger) {
    console.log('change view!');
    console.log(evt);
    // TODO: enhance class toggle logic for devices which use sm and md/lg media queries
    // TODO: use js media query class and contactTrigger argument for logic
    const container = document.querySelector('main');
    container.classList.toggle('view-change');

    // TODO: get contact if contactTrigger argument is passed
    if (contactTrigger) {
        getContact(contactTrigger);
    }
}

/**
 * Smallscreen view toggle
 **/
function toggleView() {
    const listItems = document.querySelectorAll('#contact-list-overview li');

    // When you click a list item, bring on the details view.
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener('click', e => onViewChange(e, listItems[i]), false);
    }

    // And switch it back again when you click the back button
    const backButton = document.querySelector('.back-button');
    backButton.addEventListener('click', e => onViewChange(e, false));
}

/**
 * Contact functions
 **/

function filterContactList() {
    const inputFilter = document.getElementById('contact-list-search-field');
    inputFilter.addEventListener('keyup', function () {
        const inputValue = this.value;
        const filterList = document.getElementById(this.dataset.filter);
        const filterItems = filterList.querySelectorAll('li');

        filterItems.forEach((filterItem) => {
            const titleTag = filterItem.querySelector('h2');
            const phrase = titleTag.innerText;

            // TODO: implement keyword search
            if (phrase.search(new RegExp(inputValue, 'i')) < 0) {
                filterItem.classList.add('is-hidden');
            } else {
                filterItem.classList.remove('is-hidden');
            }
        });
        striped(filterList);
    });
}

function toggleFavoriteList(isFav, favButton, favButtonAlt, allButton, allButtonAlt) {
    const filterList = document.getElementById(favButton.dataset.filter);
    const filterItems = filterList.querySelectorAll('li');

    favButton.classList.toggle('active');
    allButton.classList.toggle('active');

    if (favButton.classList.contains('active')) {
        favButtonAlt.classList.add('active');
    } else {
        favButtonAlt.classList.remove('active');
    }

    if (allButton.classList.contains('active')) {
        allButtonAlt.classList.add('active');
    } else {
        allButtonAlt.classList.remove('active');
    }

    filterItems.forEach((filterItem) => {
        if (isFav) {
            const isFavorite = filterItem.getAttribute('data-fav');
            if (isFavorite) {
                filterItem.classList.remove('is-hidden-fav');
            } else {
                filterItem.classList.add('is-hidden-fav');
            }
        } else {
            filterItem.classList.remove('is-hidden-fav');
        }
    });

    striped(filterList);
}

function toggleListView() {
    // TODO: add to pcard options and variables
    const favTrigger = document.getElementById('contact-list-actions-favorite');
    const favTriggerAlt = document.getElementById('contact-list-favorite');

    const allTrigger = document.getElementById('contact-list-actions-all');
    const allTriggerAlt = document.getElementById('contact-list-all');

    allTriggerAlt.addEventListener('click', () => {
        allTrigger.click();
    });

    allTrigger.addEventListener('click', () => {
        toggleFavoriteList(false, favTrigger, favTriggerAlt, allTrigger, allTriggerAlt);
    });

    favTriggerAlt.addEventListener('click', () => {
        favTrigger.click();
    });

    favTrigger.addEventListener('click', () => {
        toggleFavoriteList(true, favTrigger, favTriggerAlt, allTrigger, allTriggerAlt);
    });
}

/**
 * Contact functions
 **/

const editContact = (triggers) => {
    // console.log('edit contact!');
    toggleContactTriggers(triggers);
    toggleReadWrite(true);
};

const saveContact = (triggers) => {
    // console.log('saving contact!');
    toggleContactTriggers(triggers);
    toggleReadWrite(false);
};

const deleteContact = () => {
    // console.log('deleting contact!');
};
