// console.log('in here!')

// // document.querySelector('#app').innerHTML = 'Howdy Doodie!';
// // document.querySelector('#app').innerHTML += 'Cutie';
// $('#app').html('Howdy Doodie!');
// $('#app').append(`${1 + 1} is 2`);

// // document.querySelector('#app').addEventListener('click', () => {
// //   console.log("You clicked app!");
// // })

// $('.app').on('click', () => {
//   console.log("You clicked app!")
// })

// console.log($('#app').text());

const object = {
  name: 'Dr. T',
  age: 21
}

const gimmeName = (arg) => {
  console.log(object[arg]);
}

gimmeName('name');

const arrayObj = [
  {name: 'One', age: 5},
  {name: 'Two', age: 3},
  {name: 'Three', age: 6},
  {name: 'Four', age: 9},
  {name: 'Five', age: 7},
  {name: 'Six', age: 2},
];

const overSeven =[];

// const val = arrayObj.filter((taco) => taco.age < 7)

const userInput = prompt('Gimme a number');

// console.log(Number(userInput));

const gimmeTheObjects = (number) => {
  return arrayObj.filter((taco) => taco.age < number)
}

console.log(gimmeTheObjects(Number(userInput)));

// val.map((item) => item.name);

// console.log(val);

// arrayObj.forEach((item) => {
//   if (item.age === 7) {
//     overSeven.push(item);
//   }
// })

// const names = overSeven.forEach((item) => {
//   return item.name;
// })

// console.log(names);


// console.log(val);
