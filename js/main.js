let age = prompt('How old are you?');
let message = (age < 12) ? 'You are a child!' :
    (age < 18) ? 'You are a teenager!' :
        (age < 60) ? 'You are an adult!' :
            'You are a pensioner!';
alert(message);


let numbers = prompt('Write a number from 0 to 9, please.');
if (numbers == 0) {
    alert(')');
} else if (numbers == 1) {
    alert('!');
} else if (numbers == 2) {
    alert('@');
} else if (numbers == 3) {
    alert('#');
} else if (numbers == 4) {
    alert('$');
} else if (numbers == 5) {
    alert('%');
} else if (numbers == 6) {
    alert('^');
} else if (numbers == 7) {
    alert('&');
} else if (numbers == 8) {
    alert('*');
} else if (numbers == 9) {
    alert('(');
}


let b = +prompt('Enter the beginning of a range of numbers, please.');
let n = +prompt('Enter the end of the range of number, please.');
let sum = 0;
while (b <= n) {
    sum += b;
    b++
}
alert(sum);


let x = +prompt('Enter the first number, please.');
let y = +prompt('Enter the second number, please.');
let divider;
while (x != y) {
    if (x > y) {
        x = x - y;
    } else {
        y = y - x;
    }
}
divider = x;
alert(divider);

let number = prompt('Enter the number from 10000 to 99999');
number = number + '';
if (number === number.split('').reverse().join('')){
    alert('palindrome');
}
else{
    alert('NOT palindrome');
}

let amount = prompt('Enter the value of purchase:');
if (amount >=200 && amount < 300)
    alert(amount/100*97 + '$ with 3% discount');
else if (amount >=300 && amount < 500)
    alert(amount/100*95 + '$ with 5% discount');
else if (amount >=500)
    alert(amount/100*93 + '$ with 7% discount');
