const debounce = (fn, waitTime, immediate) => {
    let timeout = null;

    return function(...args) {
        const callNow = (immediate && !timeout);
        
        clearTimeout(timeout);
        timeout = setTimeout(() => { fn.apply(this, args) }, waitTime);

        if (callNow) { fn.apply(this, args); }
    }
}
