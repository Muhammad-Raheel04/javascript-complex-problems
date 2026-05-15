const orders = [
    { id: 1, total: 100, status: 'completed' },
    { id: 2, total: 250, status: 'pending' },
    { id: 3, total: 75, status: 'completed' },
    { id: 4, total: 500, status: 'cancelled' }
];

// Calculate total revenue from completed orders only

const revenue = orders
    .filter((order) => order.status === 'completed')
    .reduce((sum, order) => sum + order.total, 0);
console.log(revenue);