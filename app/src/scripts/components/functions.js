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
    // console.log('adding new contact!');
};

const showContact = (contactData, contactId) => {
    // console.log(`showing contact ${contactId}!`);
    // console.dir(contactData);

    /**
     * Prepare contact data
     * */
    const placeholder = 'placeholder';
    const image = contactData.image !== '' ? contactData.image : 'avatar-placeholder';
    const imageAction = contactData.image !== '' ? 'edit' : 'add';
    // TODO: check why double newline character is not replaced by the first replace method
    const note = contactData.note.replace('\\n', '&#xA;').replace('\\n\\n', '&#xA;&#xA;');

    /**
     * Setup markup snippet
     * */
    const markupDetail = `
    <header id="contact-details-header">
        <div class="form-control has-image">
        <label for="contact-details-image-field">
            <img src='dist/images/${image}.jpg' width='64' height='64' srcset='dist/images/${image}@2x.jpg 2x'/>
            <span id='edit-image-field' class='is-hidden'>${imageAction}<br/>photo</span>
        <?php } ?>
    </label>
    <input disabled hidden id="contact-details-image-field" type="file"/>
        </div>
        <div class="form-control has-name">
        <input disabled id="contact-details-name-field" type="text" title="contact name" value="${contactData.name}"/>
        </div>
        <div class="form-control has-favorite">
        <label for="contact-details-favorite-field">
            <svg ${contactData.favorite ? 'hidden' : ''} class="icon-star-outline unchecked" data-name="Star outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>icons</title><path d="M39.916,47.6L25.071,39.8,10.226,47.6l2.835-16.53L1.052,19.366l16.6-2.412L25.071,1.915l7.423,15.039,16.6,2.412L37.081,31.073ZM25.071,37.975l12.7,6.678L35.347,30.51,45.623,20.493l-14.2-2.064L25.071,5.56,18.719,18.429l-14.2,2.064L14.794,30.51,12.369,44.653Z" fill="#FFF"/></svg>
            <svg ${contactData.favorite ? '' : 'hidden'} class="icon-star-filled checked" data-name="Star filled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>icons</title><path d="M39.986,47.6L25.141,39.8,10.3,47.6l2.835-16.53L1.122,19.366l16.6-2.412L25.141,1.915l7.423,15.039,16.6,2.412L37.151,31.073Z" fill="#676767"/></svg>
        </label>
        <input disabled hidden id="contact-details-favorite-field" name="contact-details-favorite" type="checkbox" ${contactData.favorite ? 'checked' : ''}/>
    </div>
    </header>
    <div id="contact-details-phone" class="form-section">
        <div class="form-control">
            <div class="label-wrapper">
                <label for="contact-details-phone-work-field">work</label>
            </div>
            <div class="element-wrapper">
                <input disabled id="contact-details-phone-work-field" type="tel" value="${contactData.phone.work}"/>
            </div>
        </div>
        <div class="form-control">
            <div class="label-wrapper">
                <label for="contact-details-phone-mobile-field">mobile</label>
            </div>
            <div class="element-wrapper">
                <input disabled id="contact-details-phone-mobile-field" type="tel" value="${contactData.phone.private}"/>
            </div>
        </div>
        </div>
        <div id="contact-details-mail" class="form-section">
            <div class="form-control">
                <div class="label-wrapper">
                    <label for="contact-details-mail-work-field">work</label>
                </div>
                <div class="element-wrapper">
                    <input disabled id="contact-details-mail-work-field" type="email" value="${contactData.mail.work}"/>
                </div>
            </div>
            <div class="form-control">
                <div class="label-wrapper">
                    <label for="contact-details-mail-private-field">private</label>
                </div>
                <div class="element-wrapper">
                    <input disabled id="contact-details-mail-private-field" type="email" value="${contactData.mail.private}"/>
                </div>
            </div>
        </div>
        <div id="contact-details-address" class="form-section">
            <div class="form-control">
                <div class="label-wrapper">
                    <label for="contact-details-address-field-line-1">home</label>
                </div>
                <div class="element-wrapper">
                    <input disabled id="contact-details-address-field-line-1" title="street and housenumber" type="text" value="${contactData.address.street}"/>
                </div>
                <div class="element-wrapper">
                    <input disabled id="contact-details-address-field-line-2" title="city" type="text" value="${contactData.address.city}"/>
                </div>
                <div class="element-wrapper">
                    <input disabled id="contact-details-address-field-line-3" title="country" type="text" value="${contactData.address.country}"/>
                </div>
            </div>
        </div>
        <div id="contact-details-note" class="form-section">
            <div class="label-wrapper">
                <label for="contact-details-note-field">note</label>
            </div>
            <div class="element-wrapper">
            <textarea disabled id="contact-details-note-field">${note}</textarea>
        </div>
    </div>`;

    /**
     * Replace current form with markup form
     * */
    const detailsWrap = document.getElementById('contact-details-wrap');
    const detailsFormCurrent = detailsWrap.querySelector('form#contact-details');

    /* Keep DOM from repainting every individual element */
    const detailsFormFragment = document.createDocumentFragment();

    /* Rebuild form element in DOM */
    const detailsFormNew = document.createElement('form');
    detailsFormNew.id = 'contact-details';
    detailsFormNew.className = 'read-mode';
    detailsFormNew.innerHTML = markupDetail;

    /* Append new form element to fragment */
    detailsFormFragment.appendChild(detailsFormNew);
    detailsWrap.replaceChild(detailsFormNew, detailsFormCurrent);

    /* Set global form node variable to new form node */
    pcard.form.element = detailsFormNew;

    /**
     * Update contact id
     * */
    detailsWrap.setAttribute('data-id', contactId);

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

    contacts.then((data) => {
        const jsonData = JSON.parse(data);
        const contactData = jsonData[contactId];

        showContact(contactData, contactId);
    });
};

const showContactList = () => {
    // console.log('showing contact list!');
};

const getContactList = () => {
    // console.log('getting contact list!');
    // contacts.then((data) => {
    //     onsole.log(JSON.parse(data));
    // });
    // showContactList();
};

function onViewChange(contactTrigger) {
    // console.log('change view!');
    // TODO: enhance class toggle logic for devices which use sm and md/lg media queries
    // TODO: use js media query class and contactTrigger argument for logic
    const container = document.querySelector('main');
    container.classList.toggle('view-change');

    // TODO: do not trigger getContact if contactTrigger has the same id as the current contact detail view
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
        listItems[i].addEventListener('click', e => onViewChange(listItems[i]), false);
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
