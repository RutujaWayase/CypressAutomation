// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let input = 'i am good boy';

let reverse = input.split(' ').map(word => word.split('').reverse().join('')).join(' ');
console.log(reverse);

let stringrev = input.split(' ').reverse().join(' ');
console.log(stringrev);

let completeString = input.split('').reverse().join('');
console.log(completeString);


function factorial(n){
    if(n<=1){
        return 1;
    }
    return n* factorial(n-1);
}
console.log(factorial(5));




/*
O/P = > 

i ma doog yob
boy good am i
yob doog ma i
120
*/