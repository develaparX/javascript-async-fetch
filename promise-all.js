// Promises

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise One Resolved!');
    }, 2000);
});

const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise Two Rejected!');
    }, 1500);
});


// all success so the data is show, if one failed the whole data failed to load
Promise.all([promiseOne, promiseTwo])
    .then((data) => console.log(data[0], data[1]))
    .catch((error) => console.log(error))