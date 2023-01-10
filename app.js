console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 0; i <= 100; i++)
{
    if(i % 2 != 0) 
    {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let i = 1; i <= 100; i++)
{
    if(i % 3 == 0 && i % 5 == 0)
    {
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) 
    {
        console.log("Fizz");
    }
    else if (i % 5 == 0 )
    {
        console.log("Buzz");
    }
    else 
    {
        console.log(i);
    }
}

// Exercise 3

// Exercise 1 while loop
let num = 1;
while(number <= 100) 
{
    if(num % 2 != 0)
    {
        console.log(num)
    }
    num++;
}

// Exercise 1 do while loop
let number = 1;
do {
    if (number % 2 != 0) 
    {
        console.log(number);
    }
    number++;
}
while(number <= 100);

// Exercise 2 while loop 
let num1 = 1;
while(num1 <= 100)
{
    if(i % 3 == 0 && i % 5 == 0)
    {
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) 
    {
        console.log("Fizz");
    }
    else if (i % 5 == 0 )
    {
        console.log("Buzz");
    }
    else 
    {
        console.log(i);
    }
    num1++;
}

// Exercise 2 do while loop
let num2 = 1;
do {
    if(i % 3 == 0 && i % 5 == 0)
    {
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) 
    {
        console.log("Fizz");
    }
    else if (i % 5 == 0 )
    {
        console.log("Buzz");
    }
    else 
    {
        console.log(i);
    }
    num2++
}
while(num2 <= 100);

// Exercise 4
let value = Math.round((Math.random() * 500)); 
let n = Math.round(Math.random() * (500 - 100) + 100);
for(let num = 0; num <= n; num++)
{
    if (num == value)
    {
        console.log("Found Value");
        break;
    }
}
if (num != value)
{
    console.log("Did not find value");
}
