// // console.log('in here!')

// // // document.querySelector('#app').innerHTML = 'Howdy Doodie!';
// // // document.querySelector('#app').innerHTML += 'Cutie';
// // $('#app').html('Howdy Doodie!');
// // $('#app').append(`${1 + 1} is 2`);

// // // document.querySelector('#app').addEventListener('click', () => {
// // //   console.log("You clicked app!");
// // // })

// // $('.app').on('click', () => {
// //   console.log("You clicked app!")
// // })

// // console.log($('#app').text());

// const allTheThings = () => {
//   const object = {
//     name: 'Dr. T',
//     age: 21,
//   };

//   const gimmeName = (arg) => {
//     console.warn(object[arg]);
//     // return object[arg];
//   };

//   gimmeName('name');

//   const arrayObj = [
//     { name: 'One', age: 5 },
//     { name: 'Two', age: 3 },
//     { name: 'Three', age: 6 },
//     { name: 'Four', age: 9 },
//     { name: 'Five', age: 7 },
//     { name: 'Six', age: 2 },
//   ];

//   // const overSeven = [];

//   // const val = arrayObj.filter((taco) => taco.age < 7)

//   // const userInput = prompt('Gimme a number');

//   // console.log(Number(userInput));

//   const gimmeTheObjects = (number) => arrayObj.filter((taco) => taco.age < number);

//   console.warn(gimmeTheObjects(Number('1')));

//   // val.map((item) => item.name);

//   // console.log(val);

//   // arrayObj.forEach((item) => {
//   //   if (item.age === 7) {
//   //     overSeven.push(item);
//   //   }
//   // })

//   // const names = overSeven.forEach((item) => {
//   //   return item.name;
//   // })

//   // console.log(names);

//   // console.log(val);
// };

// export default allTheThings;

const allTheThings = () => {
  const stringThing = '456_237_999_542_123';

  // 1. split the string on the _
  const strings = stringThing.split('_'); // returns an array

  // 2. reverse the numbers
  let newString = '';
  strings.reverse().forEach((item, i) => {
    if (i === 0) {
      newString += item;
    } else {
      newString += `_${item}`;
    }
  });

  console.warn('new String', newString);
  // 3. put the numbers back together in a string separated by _

  // reverse this string: 123_542_999_237_456
  // console.warn(stringThing.split('_').reverse().join('_'));

  const newArray = [];
  stringThing.split('_').forEach((item) => {
    newArray.unshift(item);
  });

  console.warn(newArray.join('_'));
};

export default allTheThings;
