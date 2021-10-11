console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
    drinks = [
        {name: "lemonade", price: 50},
        {name: "lime", price: 10}
      ]

    function byPrice(a, b){
        return a.price - b.price;
    }

    drinks.sort(byPrice);
    
}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
    // addName({}, "Brutus", 300) ➞ { Brutus: 300 }

    // addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }

    // addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }

    function addName(obj, name, value){
        obj[name] = value;
        return obj;
    }

    console.log(addName({}, "Brutus", 300));
    console.log(addName({ piano: 500 }, "Brutus", 400));
    console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440));
}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{
    function generation(x, y) {
        if (x == -1 && y == 'm') return ('father');
        if (x == -1 && y == 'f') return ('mother');
        if (x == -2 && y == 'm') return ('grandfather');
        if (x == -2 && y == 'f') return ('grandmother');
        if (x == -3 && y == 'm') return ('great grandfather');
        if (x == -3 && y == 'f') return ('great grandmother');
        if (x == 1 && y == 'm') return ('son');
        if (x == 1 && y == 'f') return ('daughter');
        if (x == 2 && y == 'm') return ('grandson');
        if (x == 2 && y == 'f') return ('granddaughter');
        if (x == 3 && y == 'm') return ('great grandson');
        if (x == 3 && y == 'f') return ('great granddaughter');
        if (x == 0 && y == 'm') return ('me!');
        if (x == 0 && y == 'f') return ('me!');
    }
}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{
   const tileHand = [
        { tile: "N", score: 1 },
        { tile: "K", score: 5 },
        { tile: "Z", score: 10 },
        { tile: "X", score: 8 },
        { tile: "D", score: 2 },
        { tile: "A", score: 1 },
        { tile: "E", score: 1 }
    ];

    // function maximumScore(tileHand) {
    //     return tileHand.reduce((sum, card) => sum + card.score, 0);
    // }

    function maximumScore(tileHand) {
        return tileHand.reduce(function(sum, card){
           return sum += card.score
        }, 0);
    }

    console.log({
        tileHand,
        result: maximumScore(tileHand)
    });
    
    
}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{

    function calculateDifference(obj, limit) {
        const valueArray = Object.values(obj); 
        let sum = 0;
      for (let i = 0; i < valueArray.length; i++) {
          sum += valueArray[i];
        }
        return sum - limit;
    }

    function calculateDifference(obj, limit) {
        let sum = 0;
      for (const key in obj) {
          sum += obj[key];
        }
        return sum - limit;
    }

    function calculateDifference(obj, limit) {
        return Object.values(obj).reduce((p, n) => p + n) - limit;
    }

   console.log(calculateDifference({ "baseball bat": 20 }, 5)); // ➞ 15

    console.log(calculateDifference({ skate: 10, painting: 20 }, 19)); // ➞ 11
    
    console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400)); // ➞ 1
} 
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{
    function toArray(obj) {
        return Object.entries(obj);
    }

        
    toArray({ a: 1, b: 2 }) // ➞ [["a", 1], ["b", 2]]

    toArray({ shrimp: 15, tots: 12 }) // ➞ [["shrimp", 15], ["tots", 12]]

    toArray({}) // ➞ []
}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{
    function inkLevels(inks) {
        const ink = Object.values(inks);
        return Math.min(...ink);
    }


    inkLevels({
        "cyan": 23,
        "magenta": 12,
        "yellow": 10
      }) //➞ 10
      
      inkLevels({
        "cyan": 432,
        "magenta": 543,
        "yellow": 777
      }) // ➞ 432
      
      inkLevels({
        "cyan": 700,
        "magenta": 700,
        "yellow": 0
      }) //➞ 0
}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{
    function calculateLosses(obj) {
        const value = Object.values(obj);
        if(value != 0){
            return value.reduce(function(sum, item){
                return sum += item;
            },0)
        }else return'Lucky you!'
    }


    // const stolenItems = {
    //     tv: 30,
    //     skate: 20,
    //     stereo: 50,
    //   } // ➞ 100
      
    // const stolenItems = {
    //     painting: 20000,
    //   } // ➞ 20000
      
    // const stolenItems = {} // ➞ "Lucky you!"
}
console.groupEnd();
