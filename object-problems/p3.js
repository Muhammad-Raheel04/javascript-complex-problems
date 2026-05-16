const product = {
    name: 'Laptop',
    price: 1000,
    details: {
        brand: 'Dell',
        model: 'XPS'
    }
};

// Create a shallow copy and a deep copy
// Modify nested property in each and observe differences

const shallowCopy={...product};
const deepCopy=JSON.parse(JSON.stringify(product));

shallowCopy.price=2000;
shallowCopy.details.brand="Hp";


console.log(product.details.brand); 
// original affected as nested obj and arrays
// share same memory reference even in shallowCopy
console.log(product.price);
// primitive aren't copied by reference so remains same

deepCopy.details.brand="Lenovo";
console.log(product.details.brand);
// changing the deepCopy doesn't affect the original
