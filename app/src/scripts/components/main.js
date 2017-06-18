/**
 * Fix
 * todo: set mail and call links to disabled by default, enable when email available
 * todo: resize images in PHP and save @2x version [128x128px] and normal version [64x64px]
 * todo: use FormData(form) for POST > change PHP logic in ajax/*.php files
 * todo: on document load if there are no contacts > initialise write mode
 * todo: switch to all contacts view when adding non favorite contact while in favorite filter
 *
 * Extra functions
 * todo: export_contact
 * todo: contact_cookie
 * todo: fuzzy_search
 */

/**
 *
 * Main Contact functions
 *
 * */

/**
 * Create new contact
 **/
const addContact = () => {
    /** Get and set highest contact id **/
    setNewContactId();

    /** Clear current form **/
    clearContactForm();

    /** Prepare write mode **/
    writeMode();
};

/**
 * Show contact data
 **/
const showContact = (contactData, contactId) => {
    /** Prepare contact data **/
    const detailsWrap = document.getElementById(pcard.form.wrapperId);
    const timestamp = new Date().getTime();
    const contactDataProcessed = {};

    // prepare custom form elements
    contactDataProcessed.imageAction = contactData.image !== '' ? 'edit' : 'add';
    contactDataProcessed.favoriteChecked = contactData.favorite ? 'checked' : '';
    contactDataProcessed.note = contactData.note.replace('\\n', '&#xA;').replace('\\n\\n', '&#xA;&#xA;');

    /** Update contact data **/
    // prepare custom form elements
    detailsWrap.setAttribute('data-id', contactId);
    pcard.form.fields.image.setAttribute('data-image', contactData.image);
    pcard.form.fields.imageTag.setAttribute('src', `avatars/${contactData.image}?${timestamp}`);
    pcard.form.fields.imageTag.setAttribute('srcset', `avatars/${contactData.image}?${timestamp} 2x`);
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
    // pcard.form.fields.image = contactDataProcessed.image;
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
        formActionMail.href = `mail:${contactData.mail.private}`;
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
const saveContact = (triggers, contactExists = true) => {
    const formWrap = document.getElementById('contact-details-wrap');
    const id = formWrap.getAttribute('data-id');

    /** get field values */
    const fileImageAttribute = document.getElementById(pcard.form.fields.imageId).getAttribute('data-image');
    const name = document.getElementById(pcard.form.fields.nameId).value;
    const favorite = document.getElementById(pcard.form.fields.favoriteId).checked;
    const phoneWork = document.getElementById(pcard.form.fields.phoneWorkId).value;
    const phonePrivate = document.getElementById(pcard.form.fields.phonePrivateId).value;
    const mailWork = document.getElementById(pcard.form.fields.mailWorkId).value;
    const mailPrivate = document.getElementById(pcard.form.fields.mailPrivateId).value;
    const street = document.getElementById(pcard.form.fields.addressStreetId).value;
    const city = document.getElementById(pcard.form.fields.addressCityId).value;
    const country = document.getElementById(pcard.form.fields.addressCountryId).value;
    const note = document.getElementById(pcard.form.fields.noteId).value;

    /** get updated image, otherwise use to saved image, otherwise use placeholder */
    const imageName = getImageName(pcard.form.fields.image) || fileImageAttribute;
    const image = imageName || 'avatar-placeholder.jpg';

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
    const postScript = contactExists ? '/lib/ajax/save-contact.php' : '/lib/ajax/add-contact.php';
    const postType = contactExists ? 'edit' : 'add';
    ajaxPost(postScript, JSONformData);

    /** update state */
    toggleContactTriggers(triggers);
    toggleReadWrite(false);
    updateContactList(postType, id, name, image, favorite);
};

/**
 * Delete contact
 **/
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

    /** clear form in order to add new contact */
    clearContactForm();

    /** Prepare write mode **/
    writeMode();
};


/**
 *
 * Contact helper functions
 *
 * */

/**
 * Toggle between read and write mode menu
 **/
const toggleContactTriggers = (triggers) => {
    triggers.forEach((trigger) => {
        trigger.parentNode.classList.toggle('is-hidden');
    });
};

/**
 * Toggle favite with contact detail menu item
 **/
const toggleFavorite = () => {
    const favTrigger = document.getElementById(pcard.triggers.contact.favId);
    const favInput = document.getElementById(pcard.form.fields.favoriteId);
    const favIconChecked = document.getElementById(pcard.form.fields.favoriteIconTrueId);
    const favIconUnchecked = document.getElementById(pcard.form.fields.favoriteIconFalseId);

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
 * Switch to read mode
 **/
const readMode = () => {
    const isWriteMode = document.getElementById(pcard.form.elementId).classList.contains('write-mode');
    if (isWriteMode) {
        toggleContactTriggers(pcard.triggers.contact.select);
        toggleReadWrite(false);
    }
};

const writeMode = () => {
    const form = document.getElementById(pcard.form.elementId);

    // initiate write mode
    if (form.classList.contains('read-mode')) {
        toggleContactTriggers(pcard.triggers.contact.select);
        toggleReadWrite(true);
    }

    // switch to contact view
    toggleView();

    // focus on name field
    setTimeout(document.getElementById(pcard.form.fields.nameId).focus(), 10);
};

/**
 * Clear contact form
 **/
const clearContactForm = () => {
    /** Clear current form **/
    const placeholderImage = 'avatar-placeholder.jpg';
    const imageAction = 'add';

    // clear field values
    pcard.form.fields.select.forEach((field) => {
        field.value = '';
    });

    // clear custom form elements
    pcard.form.fields.image.removeAttribute('data-image');
    pcard.form.fields.imageTag.setAttribute('src', `avatars/${placeholderImage}`);
    pcard.form.fields.imageTag.setAttribute('srcset', `avatars/${placeholderImage} 2x`);
    pcard.form.fields.imageEdit.innerText = imageAction;
    pcard.form.fields.favoriteIconTrue.setAttribute('hidden', '');
    pcard.form.fields.favoriteIconFalse.removeAttribute('hidden');
    pcard.form.fields.favorite.checked = false;
};

/**
 * Set new contact id
 **/
const setNewContactId = () => {
    const listItems = document.querySelectorAll(pcard.list.itemsQuery);
    const formWrapper = document.getElementById(pcard.form.wrapperId);

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
};


/**
 *
 * Main list functions
 *
 * */

/**
 * Add new contact to list
 **/
const addContactToList = (id, name, image, favorite) => {
    /** Prepare new list item **/
    const listWrapper = document.querySelector('#contact-list ul');
    const listFragment = document.createDocumentFragment();
    const listItem = document.createElement('li');
    const timestamp = new Date().getTime();
    const listItemMarkup = `
        <img src="avatars/${image}?${new Date().getTime()}" width="64" height="64" srcset="avatars/${image}?${timestamp} 2x">
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

    // highlight new list item
    highlight(newListItem);

    // initialise list item listener
    toggleListener(newListItem);
};

/**
 * Update contact list item
 **/
const updateContactList = (type, id, name, image, favorite) => {
    const updatedContact = document.querySelector(`${pcard.list.itemsQuery}[data-id="${id}"]`);
    const timestamp = new Date().getTime();

    if (type === 'edit' && updatedContact) {
        // update existing contact to contact list
        updatedContact.querySelector('h2').innerText = name;
        updatedContact.querySelector('img').setAttribute('src', `avatars/${image}?${timestamp}`);
        updatedContact.querySelector('img').setAttribute('srcset', `avatars/${image}?${timestamp} 2x`);
        if (favorite) {
            updatedContact.querySelector(pcard.list.item.iconFavQuery).removeAttribute('hidden');
        } else {
            updatedContact.querySelector(pcard.list.item.iconFavQuery).setAttribute('hidden', '');
        }
        highlight(updatedContact);
    } else if (type === 'edit') {
        // todo: check when this is triggered, naming is off
        addContactToList(id, name, image, favorite);
    } else if (type === 'add') {
        // todo: check when this is triggered, naming is off
        addContactToList(id, name, image, favorite);
    } else if (type === 'delete') {
        // delete from contact list
        highlight(updatedContact);
        window.setTimeout(() => {
            updatedContact.remove();
            striped();
        }, 750);
    }

    /** Update list state **/
    const listItems = document.querySelectorAll('#contact-list li');
    striped();
    emptyText(listItems);
};


/**
 *
 * List helper functions
 *
 * */

/**
 * Toggle between contacts
 **/
const toggleBetweenContacts = () => {
    const listItems = document.querySelectorAll(pcard.list.itemsQuery);
    listItems.forEach((listItem) => {
        toggleListener(listItem);
    });
};

const toggleListener = (listItem) => {
    listItem.addEventListener('click', () => {
        /** Switch to read mode **/
        readMode();

        /** toggle view (for small screens) */
        toggleView();

        /** Get contact **/
        getContact(listItem);
    }, false);
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
    striped();
};

/**
 * List view listeners
 **/
const toggleListView = () => {
    const allTrigger = document.getElementById(pcard.triggers.list.allId);
    const allTriggerAlt = document.getElementById(pcard.triggers.header.allId);
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
 *
 * Sort and filter functions
 *
 * */

/**
 * Search filter for contact list
 *
 * todo: implement keyword search
 **/
const filterContactList = () => {
    const searchField = pcard.list.searchInput;
    const inputValue = searchField.value;
    const filterList = document.getElementById(searchField.dataset.filter);
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
    striped();
};
