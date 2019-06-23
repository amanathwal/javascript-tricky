// USING counter 

/**
 *  Promise which takes an array of promises
 * and only resolves when all of them resolve
 * @param: array: of promises 
 * @return: promise: which resolve with array of 
 * results from original promises in order
 */
Promise.all = (arrOfPromises) => {
    return new Promise((res, rej) => {
        
        let results = [];
        counter = 0;

        arrOfPromises.forEach((promise, index) => {
            promise.then((result) => {

                results[index] = result;
                if ( ++counter === arrOfPromises.length ) {
                    res(results);
                }

            }).catch(rej);
        })
    });
}

const promise1 = new Promise((res, rej) => {
    setTimeout(function() { res('promise1') }, 4000);
});

const promise2 = new Promise((res, rej) => {
    setTimeout(function() { res('promise2') }, 3000);
});

const promise3 = new Promise((res, rej) => {
    setTimeout(function() { res('promise3') }, 5000);
});


Promise.all([promise1, promise2, promise3]).then(res => { debugger; console.log(res); });


/**
 * Promise.all using asyc and await
 */
Promise.all = async (arrayofPromises) => {
    if (arrayofPromises.length <= 0) {
        return [];
    }

    let [head, ...tail] = arrayofPromises;

    return [(await head), ...(await Promise.all(tail))];
};







