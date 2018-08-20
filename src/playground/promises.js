const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('something went wrong');
    }, 2500);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
}, (error) => {
    console.log('error: ', error);
});



console.log('after');