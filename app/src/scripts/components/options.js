/**
 * pCard Options
 */
const pcard = {
    vars: {},
    theme: {
        animationDuration: 400,
        smallViewMax: 671,
        mediumViewMax: 981,
    },
    contacts: {
        file: '/data/contacts.json',
        fileDemo: '/data/contacts.demo.json',
    },
    triggers: {
        header: {
            allId: 'list-all',
            favId: 'list-favorite',
        },
        contact: {
            selectQuery: '#contact-actions button, #contact-actions .button',
            callId: 'contact-actions-call',
            mailId: 'contact-actions-mail',
            editId: 'contact-actions-edit',
            deleteId: 'contact-actions-delete',
            favId: 'contact-actions-favorite',
            saveId: 'contact-actions-save',
            backId: 'contact-back',
        },
        list: {
            selectQuery: '#list-actions button',
            allId: 'list-actions-all',
            favId: 'list-actions-favorite',
            addId: 'list-actions-add',
        },
    },
    form: {
        wrapperId: 'contact-wrap',
        elementId: 'contact',
        fields: {
            selectQuery: '#contact input, #contact textarea',
            nameId: 'contact-name-field',
            imageTagId: 'contact-image',
            imageEditId: 'edit-image-field-action',
            imageId: 'contact-image-field',
            favoriteIconFalseId: 'contact-favorite-false',
            favoriteIconTrueId: 'contact-favorite-true',
            favoriteId: 'contact-favorite-field',
            phoneWorkId: 'contact-phone-work-field',
            phonePrivateId: 'contact-phone-mobile-field',
            mailWorkId: 'contact-mail-work-field',
            mailPrivateId: 'contact-mail-private-field',
            addressStreetId: 'contact-address-field-line-1',
            addressCityId: 'contact-address-field-line-2',
            addressCountryId: 'contact-address-field-line-3',
            noteId: 'contact-note-field',
        },
    },
    list: {
        wrapperId: 'list-wrap',
        elementId: 'list',
        searchInputId: 'list-search-field',
        emptyMessageId: 'list-empty',
        itemsQuery: '#list li',
        item: {
            iconFavQuery: 'svg.icon-star-filled',
        },
    },
};
