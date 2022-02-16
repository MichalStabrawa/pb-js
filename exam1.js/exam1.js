const tab = [1, 1, 1, 1, 1, 1, 1, 2];

const startGame = () => {
    const allIndexArray = [0, 1, 2, 3, 4, 5, 6, 7];
    let firstArrayLength = tab.length;
    let compare1 = [];
    let compare2 = [];
    let compare3 = [];

    //get random index
    const getRandomIndex = (val) => {
        return Math.floor(Math.random() * (val - 1));
    };

    while (allIndexArray.length > 0) {
        //random index in loop
        let randomIndexShow = getRandomIndex(allIndexArray.length);
        console.log(randomIndexShow);

        let obj = {
            index: allIndexArray[randomIndexShow],
            value: tab[allIndexArray[randomIndexShow]],
        };

        if (firstArrayLength - 3 < allIndexArray.length) {
            compare1.push(obj);
        } else if (
            firstArrayLength - 3 > allIndexArray.length &&
            firstArrayLength - 6 <= allIndexArray.length
        ) {
            compare2.push(obj);
        } else {
            compare3.push(obj);
        }
        allIndexArray.splice(randomIndexShow, 1);
        console.log(`Tablica głowna ${allIndexArray}`);
    }

    //show search ball
    showSearchBall(compare1, compare2, compare3, compareAllSets);
};

const compareAllSets = (compare1, compare2, compare3) => {
    let sum1 = addValueWeightBalls(compare1);
    let sum2 = addValueWeightBalls(compare2);
    if (sum1 == sum2) {
        return heavyIndexReturn(compare3[0], compare3[1]);
    } else if (sum1 > sum2) {
        return heavyIndexReturn(compare1[0], compare1[1], compare1[2]);
    } else {
        return heavyIndexReturn(compare2[0], compare2[1], compare2[2]);
    }
};

const heavyIndexReturn = (firstValue, secValue, thirdValue) => {
    if (firstValue.value == secValue.value) {
        return thirdValue.index;
    } else if (firstValue.value > secValue.value) {
        return firstValue.index;
    } else {
        return secValue.index;
    }
};

const addValueWeightBalls = (set) => {
    return set[0].value + set[1].value + set[2].value;
};
//Show result function calback
const showSearchBall = (el1, el2, el3, callback) => {
    console.log(`Heavy ball index is ${callback(el1, el2, el3)}`);
};

startGame();
