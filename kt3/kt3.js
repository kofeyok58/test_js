// 1
function checkElem(num){
    if (num % 7 == 0){
        console.log(true);
    }else{
        console.log(false);
    }
}

checkElem(13)

// 2
function changeElem(array, n) {
    let new_array = [];
    for (let i = 0; i < array.length; i++) {
        new_array.push(array[i] * n);   
    }
    return new_array;
}

let array = [1, 2, 3, 4];
let result = changeElem(array, 3);
console.log(result);

// 3
function sumElems(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let num = Number(array[i]);
        if (!isNaN(num)) { 
            sum += num;
        }
    }
    return sum;
}

array = ['10','Строка','5g','15','05'];
result = sumElems(array);
console.log(result);

// 4
function reverseIndex(array){
    let reverse_array = []
    for (let i = array.length - 1; i >= 0; i--){
        reverse_array.push(array[i]);
    }
    console.log(reverse_array);
}

array = [1,2,3,4,5];
reverseIndex(array);

// 5
function checkElem2(array, callback){
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])){
            return true;
        }
    }
    return false;
}

array = [1,2,3,4]
result = checkElem2(array, (elem) => elem == 3 )
console.log(result);