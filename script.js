// 1. Запитайте у юзера скільки йому років: «Привіт мені - “” років!». 
let age1 = +prompt(`How old are you?`);
alert(`You are ${age1} years old!`);

// 2. Запитайтесь якого року народження юзер, теперішній рік візьмемо за константу. Виведемо скільки йому років.
const CURRENT_YEAR = 2020;
const BIRTH_YEAR = +prompt(`What year were you born?`);
let age2 = CURRENT_YEAR - BIRTH_YEAR;
alert(`You are ${age2} years old!`);

// 3. Запитайтесь у юзера довжини сторін прямокутника та виведіть його периметр
let width = +prompt(`Введіть ширину прямокутника:`);
let height = +prompt(`Введіть довжину прямокутника:`);
let perimeter = width*2 + height*2;
alert(`Периметр: ${perimeter}`);

// 4. Запитайтесь в юзера радіус кола та виведіть його площу.(число пі) 
let radius = +prompt(`Введіть радіус кола:`);
let square = 2 * Math.PI * radius;
alert(`Площа кола = ${square}`);

// 5. Водій їде з середньою швидкістю 50 км в годину. Запитайтесь у нього скільки ще йому необхідно часу їхати, та виведіть відстань.
const speed = 50;
let time = +prompt(`Cкільки ще годин їхати?`);
let distance1 = speed * time;
alert(`Відстань ${distance1} км`);

// 6. Реалізуємо конвертер кілометрів в милі і навпаки =) 
let mlInKm = 0.6213;
let kilometers = +prompt(`Конвертер кілометрів в милі`);
let distance2 = kilometers * mlInKm;
alert(`В ${kilometers} кілометрах ${distance2} миль`);

let miles = +prompt(`Конвертер миль в кілометри`);
let distance3 = miles / mlInKm;
alert(`В ${miles} милях ${distance3} кілометри`);

// 7. Юзер вводить скільки коштів на його картці та ціну одного літра бензину. Виводимо скільки бензину він може купити та скільки грошей у нього залишиться.
let money = +prompt(`Введіть суму на картці:`);
let gasPrice = +prompt(`Введіть ціну одного літра бензину:`);
let maxLiters = money / gasPrice;
maxLiters = Math.trunc(maxLiters);
let ostacha = money - maxLiters * gasPrice;
let choose = confirm(`Максимально ${maxLiters} літри, залишок ${ostacha} грн, купити все?`);
if(choose) {
    alert(`Дякуємо за покупку)`);
}
else {
    countLiters = +prompt(`Скільки літрів вам потрібно?`)
    if(countLiters > maxLiters) {
        alert('Не достатньо грошей!');
    }
    else {
        let ostacha = money - countLiters * gasPrice;
        alert(`Ви купили ${countLiters} літрів, залишок ${ostacha}грн.`)
    }
}



