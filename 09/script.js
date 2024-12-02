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
const {name, owner} = store;

// Write your solution below