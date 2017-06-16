/**
 * Fix
 * todo: set mail and call links to disabled by default, enable when email available
 *
 * Extra functions
 * todo: export_contact
 * todo: contact_cookie
 * todo: fuzzy_search
 */

/**
 * Toggle between read and write contact details
 **/
const toggleReadWrite = (editFields) => {
    // disable/enable form fields
    pcard.form.fields.select.forEach((field) => {
        if (editFields) {
            field.removeAttribute('disabled');
        } else {
            field.setAttribute('disabled', '');
        }
    });

    // toggle class
    pcard.form.element.classList.toggle('write-mode');
    pcard.form.element.classList.toggle('read-mode');
};

/**
 * Toggle favite with contact detail menu item
 **/
const toggleFavorite = () => {
    const favTrigger = document.getElementById(pcard.triggers.contact.favId);
    const favInput = document.getElementById(pcard.form.fields.favoriteId);
    const favIconChecked = document.querySelector(pcard.form.fields.favoriteIconTrueId);
    const favIconUnchecked = document.querySelector(pcard.form.fields.favoriteIconFalseId);

    // Link trigger to checkbox
    favTrigger.addEventListener('click', () => {
        favInput.click();
    });

    // Switch between checked and unchecked icons
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
 * Create new contact
 **/
const addContact = () => {
    /** Get and set highest contact id **/
    const listItems = document.querySelectorAll(pcard.list.itemsQuery);
    const formWrapper = document.getElementById(pcard.form.wrapperId);
    const form = document.getElementById(pcard.form.elementId);

    let highestId = 0;
    if (listItems.length > 0) {
        const listItemIds = new Map();
        listItems.forEach((listItem) => {
            const id = listItem.getAttribute('data-id');
            listItemIds.set(id, id);
        });
        highestId = Math.max(...listItemIds.values());
    }

    const newListItemId = highestId + 1;
    formWrapper.setAttribute('data-id', newListItemId);

    /** Clear current form **/
    const image = 'avatar-placeholder';
    const imageAction = 'add';

    // clear field values
    pcard.form.fields.select.forEach((field) => {
        field.value = '';
    });

    // clear custom form elements
    pcard.form.fields.imageTag.setAttribute('src', `dist/images/${image}.jpg`);
    pcard.form.fields.imageTag.setAttribute('srcset', `dist/images/${image}@2x.jpg 2x`);
    pcard.form.fields.imageEdit.innerText = imageAction;
    pcard.form.fields.favoriteIconTrue.setAttribute('hidden', '');
    pcard.form.fields.favoriteIconFalse.removeAttribute('hidden');
    pcard.form.fields.favorite.checked = false;

    /** Prepare write mode **/
    const container = document.querySelector('main');

    // initiate write mode
    if (form.classList.contains('read-mode')) {
        toggleContactTriggers(pcard.triggers.contact.select);
        toggleReadWrite(true);
    }

    // switch to contact view
    container.classList.toggle('view-change');

    // focus on name field
    setTimeout(document.getElementById(pcard.form.fields.nameId).focus(), 10);
};

/**
 * Show contact data
 **/
const showContact = (contactData, contactId) => {
    /** Prepare contact data **/
    const detailsWrap = document.getElementById(pcard.form.wrapperId);
    const contactDataProcessed = {};

    // prepare custom form elements
    contactDataProcessed.image = contactData.image !== '' ? contactData.image : 'avatar-placeholder';
    contactDataProcessed.imageAction = contactData.image !== '' ? 'edit' : 'add';
    contactDataProcessed.favoriteChecked = contactData.favorite ? 'checked' : '';
    contactDataProcessed.note = contactData.note.replace('\\n', '&#xA;').replace('\\n\\n', '&#xA;&#xA;');

    /** Update contact data **/
    // prepare custom form elements
    detailsWrap.setAttribute('data-id', contactId);
    pcard.form.fields.imageTag.setAttribute('src', `dist/images/${contactDataProcessed.image}.jpg`);
    pcard.form.fields.imageTag.setAttribute('srcset', `dist/images/${contactDataProcessed.image}@2x.jpg 2x`);
    pcard.form.fields.imageEdit.text = contactDataProcessed.imageAction;
    if (contactData.favorite) {
        pcard.form.fields.favoriteIconFalse.setAttribute('hidden', '');
        pcard.form.fields.favoriteIconTrue.removeAttribute('hidden');
    } else {
        pcard.form.fields.favoriteIconTrue.setAttribute('hidden', '');
        pcard.form.fields.favoriteIconFalse.removeAttribute('hidden');
    }

    // prepare fields
    // todo: set file upload value
    // pcard.form.fields.image = '${contactDataProcessed.image}.jpg';
    pcard.form.fields.name.value = contactData.name;
    pcard.form.fields.favorite.checked = contactData.favorite;
    pcard.form.fields.phoneWork.value = contactData.phone.work;
    pcard.form.fields.phonePrivate.value = contactData.phone.private;
    pcard.form.fields.mailWork.value = contactData.mail.work;
    pcard.form.fields.mailPrivate.value = contactData.mail.private;
    pcard.form.fields.addressStreet.value = contactData.address.street;
    pcard.form.fields.addressCity.value = contactData.address.city;
    pcard.form.fields.addressCountry.value = contactData.address.country;
    pcard.form.fields.note.value = contactDataProcessed.note;

    /** Update current form actions **/
    const formActionCall = pcard.triggers.contact.call;
    const formActionMail = pcard.triggers.contact.mail;

    // update phone actions
    if (contactData.phone.private !== '') {
        formActionCall.href = `tel:${contactData.phone.private}`;
        formActionCall.removeAttribute('disabled');
    } else {
        formActionCall.href = '';
        formActionCall.setAttribute('disabled', '');
    }

    // update mail actions
    if (contactData.mail.private !== '') {
        formActionMail.href = `tel:${contactData.mail.private}`;
        formActionMail.removeAttribute('disabled');
    } else {
        formActionMail.removeAttribute('href');
        formActionMail.setAttribute('disabled', '');
    }
};

/**
 * Get selected contact data
 **/
const getContact = (contactTrigger) => {
    const contactId = contactTrigger.getAttribute('data-id');
    const contacts = ajaxGet(pcard.contacts.file);

    contacts.then((data) => {
        const jsonData = JSON.parse(data);
        const contactData = jsonData[contactId];

        showContact(contactData, contactId);
    });
};

/**
 * Add new contact to list
 **/
const addContactToList = (id, name, image, favorite) => {
    /** Prepare new list item **/
    const listWrapper = document.querySelector('#contact-list ul');
    const listFragment = document.createDocumentFragment();
    const listItem = document.createElement('li');
    const listItemMarkup = `
        <img src="dist/images/${image}.jpg" width="64" height="64" srcset="dist/images/${image}@2x.jpg 2x">
        <h2 class="name">${name}</h2>
        <svg class="icon-arrow-right" data-name="Arrow right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>icons</title><path d="M20.394,37.469l11.9-11.9L31.721,25l-11.9,11.9a0.807,0.807,0,1,0,1.141,1.141l11.9-11.9-0.57-.57Z" fill="#676767"></path><path d="M20.394,12.531l11.9,11.9,0.57-.57-11.9-11.9A0.807,0.807,0,1,0,19.823,13.1L31.721,25l0.571-.571Z" fill="#676767"></path><rect x="31.888" y="24.597" width="0.807" height="0.807" transform="translate(-8.22 30.156) rotate(-45)" fill="#676767"></rect><rect x="32.459" y="25.167" width="0.807" height="0.807" transform="translate(-8.456 30.73) rotate(-45.005)" fill="#676767"></rect><rect x="33.029" y="24.597" width="0.807" height="0.807" transform="translate(-7.886 30.959) rotate(-44.995)" fill="#676767"></rect><rect x="32.459" y="24.026" width="0.807" height="0.807" transform="translate(-7.649 30.392) rotate(-45)" fill="#676767"></rect></svg>
        <svg ${favorite ? '' : 'hidden'} class="icon-star-filled" data-name="Star filled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>icons</title><path d="M39.986,47.6L25.141,39.8,10.3,47.6l2.835-16.53L1.122,19.366l16.6-2.412L25.141,1.915l7.423,15.039,16.6,2.412L37.151,31.073Z" fill="#676767"></path></svg>
    `;

    // add properties to list item
    listItem.setAttribute('data-id', id);
    listItem.setAttribute('data-fav', favorite);
    listItem.innerHTML = listItemMarkup;

    /** Use new list item **/
    // append list item to dom
    listFragment.appendChild(listItem);
    listWrapper.appendChild(listFragment);

    // fetch new list item from dom
    const newListItem = document.querySelector(`${pcard.list.itemsQuery}[data-id="${id}"]`);

    // add actions to new list item
    highlight(newListItem);
    newListItem.addEventListener('click', e => toggleView(), false);
};

/**
 * Update contact list item
 **/
const updateContactList = (type, id, name, image, favorite) => {
    const updatedContact = document.querySelector(`${pcard.list.itemsQuery}[data-id="${id}"]`);

    if (type === 'edit' && updatedContact) {
        console.log('add new contact');
        updatedContact.querySelector('h2').innerText = name;
        if (favorite) {
            updatedContact.querySelector(pcard.list.item.iconFavQuery).removeAttribute('hidden');
        } else {
            updatedContact.querySelector(pcard.list.item.iconFavQuery).setAttribute('hidden', '');
        }
        highlight(updatedContact);
    } else if (type === 'edit') {
        console.log('edit contact');
        addContactToList(id, name, image, favorite);
    } else if (type === 'add') {
        console.log('add contact');
        addContactToList(id, name, image, favorite);
    } else if (type === 'delete') {
        console.log('delete contact');
        highlight(updatedContact);
        window.setTimeout(() => {
            updatedContact.remove();
        }, 750);
    } else {
        console.log('update contact list void');
    }

    /** Trigger empty text logic **/
    const listItems = document.querySelectorAll('#contact-list li');
    emptyText(listItems);
};

/**
 * Toggle views
 **/
const toggleView = () => {
    // todo: enhance class toggle logic for devices which use sm and md/lg media queries
    // todo: use extra classes for list to contact & contact to list changes

    const container = document.querySelector('main');
    container.classList.toggle('view-change');
};

/**
 * Switch to read mode
 **/
const readMode = () => {
    const isWriteMode = document.getElementById(pcard.form.elementId).classList.contains('write-mode');
    if (isWriteMode) {
        toggleContactTriggers(pcard.triggers.contact.select);
        toggleReadWrite(false);
    }
};

/**
 * Toggle between contacts
 **/
const toggleContact = () => {
    const listItems = document.querySelectorAll(pcard.list.itemsQuery);
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener('click', () => {
            /** Switch to read mode **/
            readMode();

            /** toggle view (for small screens) */
            toggleView();

            /** Get contact **/
            getContact(listItems[i]);
        }, false);
    }
};

/**
 * Toggle back to contact list
 *
 * smallscreen only
 **/
const toggleToContactList = () => {
    const backButton = document.getElementById(pcard.triggers.contact.backId);
    backButton.addEventListener('click', () => {
        /** Switch to read mode **/
        readMode();

        /** toggle view (for small screens) */
        toggleView();
    });
};

/**
 * Search filter for contact list
 *
 * todo: implement keyword search
 **/
const filterContactList = () => {
    const inputFilter = document.getElementById(pcard.list.searchInputId);
    inputFilter.addEventListener('keyup', function () {
        const inputValue = this.value;
        const filterList = document.getElementById(this.dataset.filter);
        const filterItems = filterList.querySelectorAll('li');

        /** show matched list items */
        filterItems.forEach((filterItem) => {
            const titleTag = filterItem.querySelector('h2');
            const phrase = titleTag.innerText;

            if (phrase.search(new RegExp(inputValue, 'i')) < 0) {
                filterItem.classList.add('is-hidden');
            } else {
                filterItem.classList.remove('is-hidden');
            }
        });

        /** update odd/even classes */
        striped(filterList);
    });
};

/**
 * Toggle between all- and favorite contacts
 *
 * todo: simplify logic
 **/
const toggleFavoriteList = (showFavorites, favButton, favButtonAlt, allButton, allButtonAlt) => {
    const filterList = document.getElementById(favButton.dataset.filter);
    const filterItems = filterList.querySelectorAll('li');

    /** set active states */
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

    /** show/hide non favorites favorites */
    filterItems.forEach((filterItem) => {
        if (showFavorites) {
            const isFavorite = filterItem.getAttribute('data-fav');
            if (isFavorite) {
                filterItem.classList.remove('not-fav');
            } else {
                filterItem.classList.add('not-fav');
            }
        } else {
            filterItem.classList.remove('not-fav');
        }
    });

    /** update odd/even classes */
    striped(filterList);
};

/**
 * List view listeners
 **/
const toggleListView = () => {
    const allTrigger = document.getElementById(pcard.triggers.list.allId);
    const allTriggerAlt = document.getElementById(pcard.triggers.header.favId);
    const favTrigger = document.getElementById(pcard.triggers.list.favId);
    const favTriggerAlt = document.getElementById(pcard.triggers.header.favId);

    /** toggle to all listeners */
    allTriggerAlt.addEventListener('click', () => allTrigger.click());
    allTrigger.addEventListener('click', () => toggleFavoriteList(false, favTrigger, favTriggerAlt, allTrigger, allTriggerAlt));

    /** toggle to favorite listeners */
    favTriggerAlt.addEventListener('click', () => favTrigger.click());
    favTrigger.addEventListener('click', () => toggleFavoriteList(true, favTrigger, favTriggerAlt, allTrigger, allTriggerAlt));
};

/**
 * Prepare contact form for editing
 **/
const editContact = (triggers) => {
    toggleContactTriggers(triggers);
    toggleReadWrite(true);
};

/**
 * Save contact
 *
 * TODO: use AJAX POST to post the form directly to PHP (use ajaxPost promise helper)
 * const form = formWrap.querySelector('#contact-details');
 * const data = new FormData(form);
 **/
const saveContact = (triggers, exists = true) => {
    const formWrap = document.getElementById('contact-details-wrap');
    const id = formWrap.getAttribute('data-id');

    /** get field values */
    const name = document.getElementById('contact-details-name-field').value;
    const phoneWork = document.getElementById('contact-details-phone-work-field').value;
    const phonePrivate = document.getElementById('contact-details-phone-mobile-field').value;
    const mailWork = document.getElementById('contact-details-mail-work-field').value;
    const mailPrivate = document.getElementById('contact-details-mail-private-field').value;
    const street = document.getElementById('contact-details-address-field-line-1').value;
    const city = document.getElementById('contact-details-address-field-line-2').value;
    const country = document.getElementById('contact-details-address-field-line-3').value;
    const note = document.getElementById('contact-details-note-field').value;
    const favorite = document.getElementById('contact-details-favorite-field').checked;

    /** get custom form values */
    const imageRaw = document.querySelector('.has-image img').getAttribute('src');
    const imageFileArray = imageRaw.split('/');
    const imageNameArray = imageFileArray[2].split('.');
    const image = imageNameArray[0];

    /** build contact object */
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

    /** post contact object */
    const JSONformData = JSON.stringify(formData);
    const postScript = exists ? '/lib/ajax/save-contact.php' : '/lib/ajax/add-contact.php';
    const postType = exists ? 'edit' : 'add';
    ajaxPost(postScript, JSONformData);

    /** update state */
    toggleContactTriggers(triggers);
    toggleReadWrite(false);
    updateContactList(postType, id, name, image, favorite);
};

const deleteContact = () => {
    const formWrap = document.getElementById('contact-details-wrap');

    /** get current contact id */
    const id = formWrap.getAttribute('data-id');
    const formData = {};
    formData[id] = {};

    /** delete object by contact id */
    const JSONformData = JSON.stringify(formData);
    ajaxPost('/lib/ajax/delete-contact.php', JSONformData);

    /** update state */
    updateContactList('delete', id);
};
