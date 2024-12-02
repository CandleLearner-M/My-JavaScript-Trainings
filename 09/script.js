const store = {
  name: 'Book Haven',
  location: {
    street: '123 Reading Ave',
    city: 'Booktown',
    country: 'Storyland'
  },
  owner: 'John Doe'
};

/* 
1. Get the name and owner
2. Destructure city and country from the nested location object
*/

// 1. Getting the name and owner
const {name, owner} = store;

// 2. Destructuring city and country from the nested location object
const {location: {city, country}} = store.location;
// Write your solution below
console.log(name, owner, city, country)