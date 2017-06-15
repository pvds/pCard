/**
 * Helpers
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

const autogrow = (el) => {
    el.style.height = '1px';
    el.style.height = `${el.scrollHeight}px`;
};

const striped = (filterList) => {
    const listWrapper = document.getElementById('contact-list-overview');
    listWrapper.classList.add('is-filtered');

    const allItems = filterList.querySelectorAll('li');
    allItems.forEach((item) => {
        item.classList.remove('is-odd');
    });

    const visibleItems = filterList.querySelectorAll('li:not(.is-hidden):not(.is-hidden-fav)');
    visibleItems.forEach((visibleItem, i) => {
        const count = i + 1;
        if (count % 2 !== 0) {
            visibleItem.classList.add('is-odd');
        }
    });
};
