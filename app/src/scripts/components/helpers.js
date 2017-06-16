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
 * Adjust wrapper height to content height
 **/
const autogrow = (el, padding = 0) => {
    el.style.height = '1px';
    el.style.height = `${el.scrollHeight + padding}px`;
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
