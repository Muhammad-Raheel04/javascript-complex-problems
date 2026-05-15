const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
];

// Find the first item that is out of stock (quantity === 0)

// solution
// we can't use filter method as it wil give
// us all items with quantiy 0 
// we just need first one

const outOfStockItem=inventory.find((item)=>item.quantity<=0);
console.log(`${outOfStockItem?.name} are out of stock`);