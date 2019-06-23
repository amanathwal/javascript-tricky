/**
 * Promise.race method returns a promise 
 * that fulfills or rejects as soon as one of the promises in 
 * an iterable fulfills or rejects, with a value or reason for that 
 * promise.
 */


/**
 * Implement Promise.race using iteration
 * @param: arrayofPromises: array: array of promises
 * @return: promise: which rejects or resolves if one of the promises rejects or resolves
 * 
 */
Promise.race = arrayofPromises => {

    return new Promise((resolve, reject) => {
        arrayofPromises.forEach((promise) => {
            promise.then((result) => {
                resolve(result);
            }).catch((error) => {
                reject(error);
            });
        });
    });
}


//Test 
var promise1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'one');
});

var promise2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then(function(value) {
  console.log(value);
  // Both resolve, but promise2 is faster
});