/**
 * Set striped
 * todo: make multipurpose
 * todo: use pcard option variables
 **/
const striped = (filterList) => {
    const listWrapper = document.getElementById(pcard.list.elementId);
    const allItems = filterList.querySelectorAll('li');
    const visibleItems = filterList.querySelectorAll('li:not(.is-hidden):not(.not-fav)');

    // set filtered class for styling purposed
    // todo: remove the need for this class by using striped on dom load
    listWrapper.classList.add('is-filtered');

    // remove previously added classes
    allItems.forEach((item) => {
        item.classList.remove('is-odd', 'is-even');
    });

    // add classes to visible items
    visibleItems.forEach((visibleItem, i) => {
        const count = i + 1;
        if (count % 2 !== 0) {
            visibleItem.classList.add('is-odd');
        } else {
            visibleItem.classList.add('is-even');
        }
    });
};

/**
 * Set empty contact list text
 *
 * todo: use pcard option variables
 **/
const emptyText = (listItems) => {
    const emptyTextEl = document.getElementById(pcard.list.emptyMessageId);
    if (emptyTextEl) {
        if (listItems.length === 1) {
            emptyTextEl.innerText = 'That looks better!';
        } else if (listItems.length > 1) {
            emptyTextEl.classList.add('is-hidden');
        } else {
            emptyTextEl.innerText = 'It\'s kind of lonely here, again..';
            emptyTextEl.classList.remove('is-hidden');
        }
    }
};

/**
 * Show image as data URL on upload
 **/
const showImage = (input) => {
    const reader = new FileReader();

    reader.onload = (e) => {
        // get loaded data and render thumbnail.
        pcard.form.fields.imageTag.setAttribute('src', e.target.result);
        pcard.form.fields.imageTag.setAttribute('srcset', e.target.result);
    };

    // read the image file as a data URL.
    reader.readAsDataURL(input.files[0]);
};

/**
 * AJAX post to save image with PHP
 *
 * todo: use postAJAX function
 **/
const postImage = (form, file, name) => {
    const target = '/lib/ajax/save-image.php';
    const formData = new FormData(form);
    const request = new XMLHttpRequest();

    formData.append('image-name', name);

    request.open('POST', target, true);
    request.onload = function () {
        // todo: decide whether to use uploaded image or keep dataURL as preview
        console.dir(request);
    };
    request.onerror = function () {
        // There was a connection error of some sort
    };
    request.send(formData);
};

const processImage = (input) => {
    const contactId = document.getElementById(pcard.form.wrapperId).getAttribute('data-id');
    const form = document.forms.namedItem('contact-form');
    const imageFile = input.files[0];
    const imageName = `avatar-${contactId}`;

    showImage(input);
    postImage(form, imageFile, imageName);
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
