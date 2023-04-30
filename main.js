/* 
We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.
filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter") should return [["amy", "beth", "sam"]]
filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2) should return [["flutes", 4]]
*/

/* function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
    for( let i = 0; i < arr.length; i++){
        if(arr[i].indexOf(elem) === -1 ) {
            newArr.push(arr[i])
        }
    }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2)); */

// const users = {
//   Alan: {
//     online: false
//   },
//   Jeff: {
//     online: true
//   },
//   Sarah: {
//     online: false
//   }
// }

// function countOnline(usersObj) {
//   // Only change code below this line
//   let totalOnline = 0;
//   for ( let users in usersObj) {
//     if(usersObj[user].online === true) {
//       totalOnline += 1;
//     }
//   }
//   return totalOnline;
//   // Only change code above this line
// }

// console.log(countOnline(users));


/* Take a look at the object we've provided in the code editor. 
The user object contains three keys. 
The data key contains five keys, one of which contains an array of friends. From this, you can see how flexible objects are as data structures. 
We've started writing a function addFriend. 
Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array. */

let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line
    userObj
  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));