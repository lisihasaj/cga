const find = (collection, key, value) => {
    return collection.find((c) => c[`${key}`] == value)
}

function scrollToggler(condition) {
    condition ? document.documentElement.style.overflow = "hidden" : document.documentElement.style.overflow = "auto";
};

function scrollInto(element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
};

function sentenceSpliter(parent) {
    if(parent.classList.contains('animate')) return;
    parent.classList.add('animate');
    for(let i = 0; i < parent.children.length; i++) {
        let children = parent.children[i];
        children.innerHTML = children.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, "$1<span>$2</span>");
    }
};

//Set localStorage key with expire month
function setLocalStorageKey(key, value, month) {
    let date = new Date();
    date.setMonth(date.getMonth() + month);
    let expMonth = date.getMonth();
    let expYear = date.getFullYear();

    localStorage.setItem(key, value);
    localStorage.setItem('expiration-month', expMonth);
    localStorage.setItem('expiration-year', expYear);
};

//Verify expiration
async function expiryVerifier(item) {
    const expMonth = await localStorage.getItem('expiration-month');
    const expYear = await localStorage.getItem('expiration-year');
    let date = new Date();
    let currentMonth = await date.getMonth();
    let currentYear = await date.getFullYear();

    if(expYear <= currentYear) {
        if(expMonth < currentMonth) {
            return localStorage.removeItem(item)
        }
        return;
    }
};

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};

function scrollTo(element, to, duration) {
    var start = element.scrollY,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function () {
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        // element.scrollTop = val;
        window.scrollTo(0, val);
        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

export {
    find,
    scrollTo,
    scrollToggler,
    setLocalStorageKey,
    expiryVerifier,
    scrollInto,
    sentenceSpliter
}