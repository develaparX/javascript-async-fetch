// Promises / Async-Await

const preHeatOven = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const preHeatOven = true;

            if (preHeatOven) {
                resolve('Preheat oven to 180deg')
            } else {
                reject('Failed Task One')
            }
        }, 2000);
    })
};

const addSugarAndChocoChips = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const addchoco = false;

            if (addchoco) {
                resolve('Place butter and chocolate chips, stir until melted and smooth')
            } else {
                reject('Failed Task Two')
            }
        }, 1000);
    })
};

const addFlourCocoaAndSalt = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const addSaltFlour = true;

            if (addSaltFlour) {
                resolve('Add flour, coco and salt and stir untill smooth')
            } else {
                reject('Task Rejected')
            }
        }, 3000);
    })
};

const bakeMixture = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bakeMixture = true;

            if (bakeMixture) {
                resolve('Bake for 24 minutes for really gooey center')
            } else {
                reject('Task Rejected')
            }
        }, 1000);
    })
};

const bakeChocolateBrownies = async () => {
    try {
        const taskOne = await preHeatOven();
        console.log(taskOne);

        const taskTwo = await addSugarAndChocoChips();
        console.log(taskTwo);

        const taskThree = await addFlourCocoaAndSalt();
        console.log(taskThree);

        const taskFour = await bakeMixture();
        console.log(taskFour);

        console.log('Enjoy Your Perfect Chocolate Brownies ');
    } catch (error) {
        console.log(error);

    }
}

bakeChocolateBrownies();