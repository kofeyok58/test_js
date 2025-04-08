let price = 10000;
let range = "day";
let russian_range;
switch (range) {
case "month":
    russian_range = "месяц";
    break;
case "day":
    russian_range = "день";
    break;
case "week":
    russian_range = "неделю";
    break;
}
console.log(price + ' Р в ' + russian_range);

// Задание 2

let temp = 25;
let weather = "clear";
let activity;
if (temp >= 25 && weather == "clear"){
    activity = "golf"; 
} else if ((temp >= 10 && temp <= 24) || weather == "cloudy"){
    activity = "bowling"; 
} else { 
    activity = "hiking"; 
}
console.log(activity);

// 3 задание
let a = 2;
let b = 0;
let sign = "/"; 

if (sign == "+"){
    result = a + b; 
} else if (sign == "-"){
    result = a - b; 

} else if (sign == "/"){
    if (b==0){
        result = "Делить на 0 нельзя!";
    } else{
        result = a / b;
    }
} else if (sign == "*"){
    result = a * b; 
} else if (sign != "*" && sign != "+"  && sign != "-"  && sign != "/" ){
    result = "Неверный оператор";
}

console.log(result);

// задание 4

let word = 'меню';
if (word.length**(1/2) % 1 == 0){
    console.log(1);
}else{
    console.log(0);
}
