 //1
let word = 'Арнольд';
let result = '';
for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() != 'а' && word[i].toLowerCase() != 'о') { 
        result += word[i];
    }
}
console.log(result);

//2
let num = 20;
for (let i = 1; i < num; i++) {
    if (i % 3 ==0) {
        console.log(i);
    }
}

//3
num = 5;
result = ''
for (let i = 1; i <= num; i++) {
    result += i;
    console.log(result); 
}

//4
num = 4
result = 0
for (let i = 1; i <= num; i++) {
    factorial_i = 1
    for (let index = 1; index <= i; index++) {
        factorial_i *= index;
    }
    result += factorial_i;
}
console.log(result);

//5

word = 'потоп';
let word_reverse = '';
for (let i = word.length-1; i >= 0 ; i--) {
    word_reverse += word[i];
}
if (word == word_reverse) {
    console.log('YES');   
}