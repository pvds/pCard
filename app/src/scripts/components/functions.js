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

const toggleContactTriggers = (triggers) => {
    triggers.forEach((trigger) => {
        trigger.parentNode.classList.toggle('is-hidden');
    });
};

const toggleReadWrite = (editFields) => {
    // console.log(editFields);
    // Toggle readonly field attribute
    pcard.form.fields.select.forEach((field) => {
        if (editFields) {
            field.removeAttribute('disabled');
        } else {
            field.setAttribute('disabled', '');
        }
    });

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
    // console.log('adding new contact!');
};

const showContact = (contactData, contactId) => {
    // console.log(`showing contact ${contactId}!`);
    // console.dir(contactData);

    /**
     * Prepare contact data
     * */
    const detailsWrap = document.getElementById('contact-details-wrap');
    const contactDataProcessed = {};
    contactDataProcessed.image = contactData.image !== '' ? contactData.image : 'avatar-placeholder';
    contactDataProcessed.imageAction = contactData.image !== '' ? 'edit' : 'add';
    contactDataProcessed.favoriteChecked = contactData.favorite ? 'checked' : '';
    // TODO: check why double newline character is not replaced by the first replace method
    contactDataProcessed.note = contactData.note.replace('\\n', '&#xA;').replace('\\n\\n', '&#xA;&#xA;');

    /**
     * Update contact data
     * */
    detailsWrap.setAttribute('data-id', contactId);

    pcard.form.fields.imageTag.setAttribute('src', `dist/images/${contactDataProcessed.image}.jpg`);
    pcard.form.fields.imageTag.setAttribute('srcset', `dist/images/${contactDataProcessed.image}@2x.jpg 2x`);
    pcard.form.fields.imageEdit.text = contactDataProcessed.imageAction;
    pcard.form.fields.name.value = contactData.name;
    // pcard.form.fields.image = '';
    if (contactData.favorite) {
        pcard.form.fields.favoriteIconFalse.setAttribute('hidden', '');
        pcard.form.fields.favoriteIconTrue.removeAttribute('hidden');
    } else {
        pcard.form.fields.favoriteIconTrue.setAttribute('hidden', '');
        pcard.form.fields.favoriteIconFalse.removeAttribute('hidden');
    }
    pcard.form.fields.favorite.checked = contactData.favorite;
    pcard.form.fields.phoneWork.value = contactData.phone.work;
    pcard.form.fields.phonePrivate.value = contactData.phone.private;
    pcard.form.fields.mailWork.value = contactData.mail.work;
    pcard.form.fields.mailPrivate.value = contactData.mail.private;
    pcard.form.fields.addressStreet.value = contactData.address.street;
    pcard.form.fields.addressCity.value = contactData.address.city;
    pcard.form.fields.addressCountry.value = contactData.address.country;
    pcard.form.fields.note.value = contactDataProcessed.note;

    /**
     * Update current form actions
     * */
    const formActionCall = document.getElementById('contact-details-actions-call');
    if (contactData.phone.private !== '') {
        formActionCall.href = `tel:${contactData.phone.private}`;
        formActionCall.removeAttribute('disabled');
    } else {
        formActionCall.href = '';
        formActionCall.setAttribute('disabled', '');
    }

    const formActionMail = document.getElementById('contact-details-actions-mail');
    if (contactData.mail.private !== '') {
        formActionMail.href = `tel:${contactData.mail.private}`;
        formActionMail.removeAttribute('disabled');
    } else {
        formActionMail.removeAttribute('href');
        formActionMail.setAttribute('disabled', '');
    }
};

const getContact = (contactTrigger) => {
    const contactId = contactTrigger.getAttribute('data-id');
    // console.log(`getting contact ${contactId}!`);
    const contacts = ajaxGet('/data/contacts.demo.json');

    contacts.then((data) => {
        const jsonData = JSON.parse(data);
        const contactData = jsonData[contactId];
        // console.log(contactData);

        showContact(contactData, contactId);
    });
};

const showContactList = () => {
    // console.log('showing contact list!');
};

const addContactToList = (id, name, image, favorite) => {
    // console.log('adding contact to list');

    const listItemMarkup = `
        <img src="dist/images/${image}.jpg" width="64" height="64" srcset="dist/images/${image}@2x.jpg 2x">
        <h2 class="name">${name}</h2>
        <svg class="icon-arrow-right" data-name="Arrow right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>icons</title><path d="M20.394,37.469l11.9-11.9L31.721,25l-11.9,11.9a0.807,0.807,0,1,0,1.141,1.141l11.9-11.9-0.57-.57Z" fill="#676767"></path><path d="M20.394,12.531l11.9,11.9,0.57-.57-11.9-11.9A0.807,0.807,0,1,0,19.823,13.1L31.721,25l0.571-.571Z" fill="#676767"></path><rect x="31.888" y="24.597" width="0.807" height="0.807" transform="translate(-8.22 30.156) rotate(-45)" fill="#676767"></rect><rect x="32.459" y="25.167" width="0.807" height="0.807" transform="translate(-8.456 30.73) rotate(-45.005)" fill="#676767"></rect><rect x="33.029" y="24.597" width="0.807" height="0.807" transform="translate(-7.886 30.959) rotate(-44.995)" fill="#676767"></rect><rect x="32.459" y="24.026" width="0.807" height="0.807" transform="translate(-7.649 30.392) rotate(-45)" fill="#676767"></rect></svg>
        <svg ${favorite ? '' : 'hidden'} class="icon-star-filled" data-name="Star filled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>icons</title><path d="M39.986,47.6L25.141,39.8,10.3,47.6l2.835-16.53L1.122,19.366l16.6-2.412L25.141,1.915l7.423,15.039,16.6,2.412L37.151,31.073Z" fill="#676767"></path></svg>
    `;
    const listItem = document.createElement('li');
    listItem.setAttribute('data-id', id);
    listItem.setAttribute('data-fav', favorite);
    listItem.innerHTML = listItemMarkup;

    const listFragment = document.createDocumentFragment();
    listFragment.appendChild(listItem);

    const listWrapper = document.querySelector('#contact-list-overview ul');

    listWrapper.appendChild(listFragment);

    const newListItem = document.querySelector(`#contact-list-overview ul li[data-id="${id}"]`);
    highlight(newListItem);
    // console.dir(newListItem);

    newListItem.addEventListener('click', e => onToggle(newListItem), false);
};

const updateContactList = (type, id, name, image, favorite) => {
    // TODO: add to contact list if does't exist

    // console.log('updating contact list!');
    const updatedContact = document.querySelector(`#contact-list-overview li[data-id="${id}"]`);
    // console.log(updatedContact);

    if (type === 'edit' && updatedContact) {
        // update existing contact
        updatedContact.querySelector('h2').innerText = name;
        if (favorite) {
            updatedContact.querySelector('svg.icon-star-filled').removeAttribute('hidden');
        } else {
            updatedContact.querySelector('svg.icon-star-filled').setAttribute('hidden', '');
        }
        highlight(updatedContact);
    } else if (type === 'edit') {
        // add contact after deleting
        // console.log('add to contact list after deleting');
        addContactToList(id, name, image, favorite);
    } else if (type === 'add') {
        // add new contact
        // console.log('add new contact');
        addContactToList(id, name, image, favorite);
    } else if (type === 'delete') {
        // console.log('remove from contact list');
        highlight(updatedContact);
        window.setTimeout(() => {
            updatedContact.remove();
        }, 750);
    } else {
        // console.log('update contact list void');
    }
};

const getContactList = () => {
    // console.log('getting contact list!');
    // contacts.then((data) => {
    //     // console.log(JSON.parse(data));
    // });
    // showContactList();
};

function onToggle(contactTrigger) {
    // console.log('change view!');

    /**
     * Smallscreen view toggle
     *
     * TODO: enhance class toggle logic for devices which use sm and md/lg media queries
     * TODO: use js media query class and contactTrigger argument for logic
     **/

    const container = document.querySelector('main');
    container.classList.toggle('view-change');

    // TODO: do not trigger getContact if contactTrigger has the same id as the current contact detail view
    if (contactTrigger) {
        getContact(contactTrigger);
    }

    const isWriteMode = document.getElementById('contact-details').classList.contains('write-mode');
    if (isWriteMode) {
        toggleContactTriggers(pcard.triggers.contact.select);
        toggleReadWrite(false);
    }
}

/**
 * Toggle between contacts
 **/
function toggleContact() {
    const listItems = document.querySelectorAll('#contact-list-overview li');
    // When you click a list item, bring on the details view.
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener('click', e => onToggle(listItems[i]), false);
    }
}

/**
 * Smallscreen toggle back to contact list
 **/
function toggleToContactList() {
    // And switch it back again when you click the back button
    const backButton = document.querySelector('.back-button');
    backButton.addEventListener('click', e => onToggle(false));
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

const saveContact = (triggers, exists = true) => {
    // console.log('saving contact!');

    const formWrap = document.getElementById('contact-details-wrap');

    // TODO: use AJAX POST to post the form directly to PHP (use ajaxPost promise helper)
    // const form = formWrap.querySelector('#contact-details');
    // const data = new FormData(form);

    const id = formWrap.getAttribute('data-id');
    const name = document.getElementById('contact-details-name-field').value;
    const imageRaw = document.querySelector('.has-image img').getAttribute('src');
    const imageFileArray = imageRaw.split('/');
    const imageNameArray = imageFileArray[2].split('.');
    const image = imageNameArray[0];
    const phoneWork = document.getElementById('contact-details-phone-work-field').value;
    const phonePrivate = document.getElementById('contact-details-phone-mobile-field').value;
    const mailWork = document.getElementById('contact-details-mail-work-field').value;
    const mailPrivate = document.getElementById('contact-details-mail-private-field').value;
    const street = document.getElementById('contact-details-address-field-line-1').value;
    const city = document.getElementById('contact-details-address-field-line-2').value;
    const country = document.getElementById('contact-details-address-field-line-3').value;
    const note = document.getElementById('contact-details-note-field').value;
    const favorite = document.getElementById('contact-details-favorite-field').checked;
    const formData = {};
    formData[id] = {
        name,
        image,
        phone: {
            work: phoneWork,
            private: phonePrivate,
        },
        mail: {
            work: mailWork,
            private: mailPrivate,
        },
        address: {
            street,
            city,
            country,
        },
        note,
        favorite,
    };

    const JSONformData = JSON.stringify(formData);
    // console.log(formData);

    const postScript = exists ? '/lib/ajax/save-contact.php' : '/lib/ajax/add-contact.php';
    const postType = exists ? 'edit' : 'add';

    ajaxPost(postScript, JSONformData);

    toggleContactTriggers(triggers);
    toggleReadWrite(false);

    updateContactList(postType, id, name, image, favorite);
};

const deleteContact = () => {
    // console.log('deleting contact!');

    const formWrap = document.getElementById('contact-details-wrap');
    const id = formWrap.getAttribute('data-id');
    const formData = {};
    formData[id] = {};

    const JSONformData = JSON.stringify(formData);
    // console.log(formData);

    ajaxPost('/lib/ajax/delete-contact.php', JSONformData);

    updateContactList('delete', id);
};
