console.log('****** Loops Practice *******');
//Test
console.log('js');

// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');

//You need to change the condition(?) from i<4 to i<6
for (let i=0; i<6; i++) {
  console.log(i);
}


// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');

//You need to change the variable (it also looks like this piece might be called the initialization) from let i=0 to let i=3
for (let i=3; i<6; i++) {
  console.log(i);
}


// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');

//You need to change the iteration (repeated block of code)...instead of increasing by one I need it to increase by 2 to keep the numbers even
for (let i=2; i<11; i+=2) {
  console.log(i);
}

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
for (let i=5; i>=0; i--) {
  console.log(i);
} 

// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');

stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

/////*****FIXED CODE FOR RESUBMISSION*****/////
for (officialName of stars) {
  console.log(officialName);
}

/*
for ( let i = 0; i<stars.length; i++) {
  console.log('for of loop', stars[i]);
}
*/


// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');

stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb'];
i= 0;

while( i < stars.length) {
  console.log( 'while looop' , stars[i] );
  i++;
}


// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');

let index = 0;
const max = 5;

while( index <= max ) {
  console.log( 'in while loop' , index);
  index++;
}


// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');

index = 10;
min = 4;

while( index > min ) {
  console.log( 'in while loop', index);
  index--;
}
