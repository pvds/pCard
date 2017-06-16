/**
 * GET promise
 **/
function ajaxGet(url) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open('GET', url, true);
        req.onload = () => {
            if (req.status === 200) {
                resolve(req.response);
            } else {
                reject(new Error(req.statusText));
            }
        };

        req.onerror = () => {
            reject(new Error('Network error'));
        };

        req.send();
    });
}

/**
 * POST promise
 **/
function ajaxPost(url, data) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open('POST', url, true);
        req.onload = () => {
            if (req.status === 200) {
                resolve(req.response);
            } else {
                reject(new Error(req.statusText));
            }
        };

        req.onerror = () => {
            reject(new Error('Network error'));
        };

        req.send(data);
    });
}

/**
 * Toggle between read and write mode menu
 **/
const toggleContactTriggers = (triggers) => {
    triggers.forEach((trigger) => {
        trigger.parentNode.classList.toggle('is-hidden');
    });
};

/**
 * Adjust wrapper height to content height
 **/
const autogrow = (el, padding = 0) => {
    el.style.height = '1px';
    el.style.height = `${el.scrollHeight + padding}px`;
};

/**
 * Set striped
 * todo: make multipurpose
 * todo: use pcard option variables
 **/
const striped = (filterList) => {
    const listWrapper = document.getElementById('contact-list-overview');
    const allItems = filterList.querySelectorAll('li');
    const visibleItems = filterList.querySelectorAll('li:not(.is-hidden):not(.is-hidden-fav)');

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
 * Add highlight class
 **/
const highlight = (target, duration = 750) => {
    const timeout = duration;
    target.classList.add('is-highlight');

    window.setTimeout(() => {
        target.classList.remove('is-highlight');
    }, timeout);
};

/**
 * Set empty contact list text
 *
 * todo: use pcard option variables
 **/
const emptyText = (listItems) => {
    const emptyTextEl = document.getElementById('contact-list-empty');
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
function showImage(input) {
    const reader = new FileReader();

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        pcard.form.fields.imageTag.setAttribute('src', e.target.result);
        pcard.form.fields.imageTag.setAttribute('srcset', e.target.result);
    };

    // read the image file as a data URL.
    reader.readAsDataURL(input.files[0]);
}
