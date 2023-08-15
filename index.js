function myEach(collection, callback) {
    const inputArr = Object.values(collection);
    for (const elem of inputArr) {
        callback(elem);
    }
    return collection;
}

// console.log(myEach([1,2,3], alert));
// console.log(myEach({one: 1, two: 2, three: 3}, alert));

function myMap(collection, callback) {
    const array = Object.values(collection);
    for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
    }
    return array;
}

 const arr = [1,2,3];
 const obj = {one: 1, two: 2, three: 3};
 function add2 (x) {
    return x + 2;
 }

// console.log(myMap([1,2,3], add2));
// console.log(arr);
// console.log(myMap(obj, add2));
// console.log(obj);

function myReduce(collection, callback, acc) {
    const array = Object.values(collection);
    for (const elem of array) {
        if (acc === undefined) {
            acc = elem;
        } else {
            acc = callback(acc, elem, collection);
        }
    }
    return acc;
}

// console.log(myReduce(arr, add2));

function myFind(collection, predicate) {
    const array = Object.values(collection);
    for (const elem of array) {
        if (predicate(elem)) {
            return elem;
        }
    }
    return undefined;
}

// console.log(myFind([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
// console.log(myFind({one: 1, three: 3, four: 4, six: 6}, function(num){ return num % 2 == 0; }));

function myFilter(collection, predicate) {
    const array = Object.values(collection);
    const resArr = [];
    for (const elem of array) {
        if (predicate(elem)) {
            resArr.push(elem);
        }
    }
    return resArr;
}

// console.log(myFilter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
// console.log(myFilter({one: 1, three: 3, five: 5}, function(num){ return num % 2 == 0; }));

function mySize(collection) {
    return Object.values(collection).length;
}

// console.log(mySize({one: 1, two: 2, three: 3}));
// console.log(mySize([]));

function myFirst(array, n) {
    if (n === undefined) {
        if (array.length === 0) {
            return undefined;
        } else {
            return array[0];
        }
    }
    return array.slice(0, n);
}

// console.log(myFirst([5, 4, 3, 2, 1]));
// console.log(myFirst([5, 4, 3, 2, 1], 3));

function myLast(array, n) {
    if (n === undefined) {
        if (array.length === 0) {
            return undefined;
        } else {
            return array[array.length - 1];
        }
    }
    return array.slice(array.length - n, array.length);
}

// console.log(myLast([5, 4, 3, 2, 1]));
// console.log(myLast([5, 4, 3, 2, 1], 3));

function mySortBy(array, callback) {
    const arrayCopy = array.slice();

    return arrayCopy.sort(function(a, b) {
        const newA = callback(a);
        const newB = callback(b);
        if (newA === newB) {
            return 0;
        } else if (newA < newB) {
            return -1;
        }
        return 1;
    });
}

// console.log(mySortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num) }));
// const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
// console.log(mySortBy(stooges, function(stooge){ return stooge.name }));

// const months = ["Mar", "Jan", "Feb", "Dec"];
// const sortedMonths = months.toSorted();
// console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
// console.log(months); // ['Mar', 'Jan', 'Feb', 'Dec']


function myFlatten(array, shallow, newArr=[]) {
    array.forEach((elem) => {
        if (Array.isArray(elem)) {
            if (shallow) {
                elem.forEach((elem2) => newArr.push(elem2));
            } else {
                myFlatten(elem, shallow, newArr);
            }
        } else {
            newArr.push(elem);
        }
    })
    return newArr;
}


function myKeys(object) {
    const resArr = [];
    for (const key in object) {
        resArr.push(key);
    }
    return resArr;
}

// console.log(myKeys({one: 1, two: 2, three: 3}));

function myValues(object) {
    const resArr = [];
    for (const key in object) {
        resArr.push(object[key]);
    }
    return resArr;
}

// console.log(myValues({one: 1, two: 2, three: 3}));


