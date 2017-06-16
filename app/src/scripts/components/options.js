/**
 * pCard Options
 */
const pcard = {
    vars: {},
    theme: {
        textareaId: 'contact-details-note-field',
    },
    contacts: {
        file: '/data/contacts.json',
        fileDemo: '/data/contacts.demo.json',
    },
    triggers: {
        header: {
            allId: 'contact-list-all',
            favId: 'contact-list-favorite',
        },
        contact: {
            selectQuery: '#contact-details-actions button, #contact-details-actions .button',
            callId: 'contact-details-actions-call',
            mailId: 'contact-details-actions-mail',
            editId: 'contact-details-actions-edit',
            deleteId: 'contact-details-actions-delete',
            favId: 'contact-details-actions-favorite',
            saveId: 'contact-details-actions-save',
            backId: 'contact-details-back',
        },
        list: {
            selectQuery: '#contact-list-actions button',
            allId: 'contact-list-actions-all',
            favId: 'contact-list-actions-favorite',
            addId: 'contact-list-actions-add',
        },
    },
    form: {
        wrapperId: 'contact-details-wrap',
        elementId: 'contact-details',
        fields: {
            selectQuery: '#contact-details input, #contact-details textarea',
            nameId: 'contact-details-name-field',
            imageTagId: 'contact-details-image',
            imageEditId: 'edit-image-field-action',
            imageId: 'contact-details-image-field',
            favoriteIconFalseId: 'contact-details-favorite-false',
            favoriteIconTrueId: 'contact-details-favorite-true',
            favoriteId: 'contact-details-favorite-field',
            phoneWorkId: 'contact-details-phone-work-field',
            phonePrivateId: 'contact-details-phone-mobile-field',
            mailWorkId: 'contact-details-mail-work-field',
            mailPrivateId: 'contact-details-mail-private-field',
            addressStreetId: 'contact-details-address-field-line-1',
            addressCityId: 'contact-details-address-field-line-2',
            addressCountryId: 'contact-details-address-field-line-3',
            noteId: 'contact-details-note-field',
        },
    },
    list: {
        wrapperId: 'contact-list-wrap',
        elementId: 'contact-list-overview',
        searchInputId: 'contact-list-search-field',
        itemsQuery: '#contact-list-overview li',
        item: {
            iconFavQuery: 'svg.icon-star-filled',
        },
    },
};
