// promises


// without pending
// const promise = new Promise((resolve, reject) => {
//     const allWentWell = false;

//     if (allWentWell) {
//         resolve('All things went well')
//     } else {
//         reject('Opps! something went wrong!')
//     }
// });


// // with pending
// const promise = new Promise((resolve, reject) => {
//     const randomNumber = Math.floor(Math.random() * 10);

//     setTimeout(() => {
//         if (randomNumber < 4) {
//             resolve('Well Done! You Guessed Right!')
//         } else {
//             reject('Oops! You Guessed wrong! Unlucky.')
//         }
//     }, 2000)
// });

// promise.then((value) => {
//     console.log(value)
// }).catch((error) => {
//     console.log(error)
// })


const promise = new Promise((resolve, reject) => {
    resolve('Well Done! Promise One is Resolved')
});

const promiseTwo = new Promise((resolve, reject) => {
    resolve('Well Done! Promise Two is Resolved')
});

const promiseThree = new Promise((resolve, reject) => {
    reject('Well Done! Promise Three is Rejected, Unlucky!')
});

//with callbackHell
// promise
//     .then((value) => {
//         console.log(value);
//         promiseTwo.then((data) => {
//             console.log(data);
//             promiseThree.then((data) => {
//                 console.log(data);
//             }).catch((error) => {
//                 console.log(error);
//             })
//         })
//     })
//     .catch((error) => {
//         console.log(error);
//     })


// best practice
promise
    .then((value) => {
        console.log(value);
        return promiseTwo
    })
    .then((value) => {
        console.log(value);
        return promiseThree
    })
    .catch((error) => {
        console.log(error);
    });