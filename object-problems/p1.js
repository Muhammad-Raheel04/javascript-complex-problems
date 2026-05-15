const user = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        zip: 10001
    }
};

// Using destructuring, extract:
// 1. name and age
// 2. city (nested destructuring)
// 3. country with default value 'USA'

const { name, age ,address:{city},country="USA"} = user;

console.log(name,age,city,country);