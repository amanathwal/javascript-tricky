const promise1 = new Promise((res, rej) => {
    setTimeout(function() { res('promise1 resolved') }, 5000);
});

const promise2 = new Promise((res, rej) => {
    setTimeout(function() { res('promise2 resolved') }, 4000);
});

const promise3 = new Promise((res, rej) => {
    setTimeout(function() { res('promise3 resolved') }, 3000);
});


Promise.all([promise1, promise2, promise2]).then(res => { console.log(res); });