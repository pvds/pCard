/**
 * pCard Options
 */
const pcard = {
    vars: {},
    theme: {
        textareaId: 'contact-details-note-field',
    },
    triggers: {
        contact: {
            selectQuery: '#contact-details-actions button, #contact-details-actions .button',
            callId: 'contact-details-actions-call',
            mailId: 'contact-details-actions-mail',
            editId: 'contact-details-actions-edit',
            deleteId: 'contact-details-actions-delete',
            favId: 'contact-details-actions-favorite',
            saveId: 'contact-details-actions-save',
        },
        list: {
            selectQuery: '#contact-list-actions button',
            allId: 'contact-list-actions-all',
            favId: 'contact-list-actions-favorite',
            addId: 'contact-list-actions-add',
        },
    },
    form: {
        elementId: 'contact-details',
        fields: {
            selectQuery: '#contact-details input, #contact-details textarea',
        },
    },
};
