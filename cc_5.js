// Task 1: Object Profiles
let customer = {Name: "Bob Belcher", Age: 45, Email: "BobBelcher@gmail.com"}; // Declare an object customer with properties
console.log(`Name: ${customer.Name}`); // Log customerName property to console
console.log(`Age: ${customer.Age}`); // Log customerAge property to console
console.log(`Email: ${customer.Email}`); // Log customerEmail property to console

// Task 2: Object Methods
const order = {orderID: 23456, totalAmount: 200, status: "Processing", // Declare order properties
displayOrder() { // Log details of order when called
    console.log(`Order ID: ${this.orderID}`); // References orderID
    console.log(`Order Total: ${this.totalAmount}`); // References totalAmount
    console.log(`Order Status: ${this.status}`); // References status
}
};
order.displayOrder(); // Logs order details to console

// Task 3: Array Manipulation

let product = ["Burger", "Fries", "Soda"]; // Declare an array
product.push("Milkshake"); // Add a new product
product.pop(); // Remove last product
product.unshift("Float"); // Add new product at beginning
product.shift(); // Remove first product 
console.log(product);

// Task 4: Map Method 

let prices = [450, 280, 920]; // Declare an array
discountPrice = prices.map(price => price * (1 - 0.10)); // Apply 10% discount using map method
console.log(discountPrice); // Log new discounted prices to the console

// Task 5: Filter Method 

let inventory = [0, 4, 10, 2, 22, 17] // Declare an array
let inventoryCount = inventory.filter(stock => stock > 0) // Use filter to method to remove stock with 0 quantities
console.log(inventoryCount) // Log inventory count to console

// Task 6: Reduce Method 

let sales = [900, 200, 400, 500, 700]; // Declare an array 
revenueSum = sales.reduce( // Use reduce method to sum sales
    (accumulator, currentValue) => accumulator + currentValue, 0);
console.log(`Revenue Sum: $${revenueSum}`) // Log revenue sum to console

// Task 7: find() Method

let customers = ["Alice", "Bob", "Charlie", "David"]; // Declare an array
locateCustomer = customers.find((customer) => customer === "Charlie"); // Use find method to find Charlie
console.log(locateCustomer); // Log customer to console

// Task 8: Function Declaration 

function calculateTax(amount, taxRate) {
    return amount * (taxRate / 100); // Create function to calculate tax
    
}
let taxAmount = calculateTax(100, 20); // Tax example amount
console.log(`The tax amount is $${taxAmount}`); // Log tax amount to console with template literal

// Task 9: Function Expression 

function applyDiscount(price, discount) { // Create function to determine final price after discount
    return price - (price * discount / 100);
}
let finalPrice = applyDiscount(200, 30); // Apply function
console.log(`The final price is $${finalPrice}`); // Log final price to console

// Task 10: Arrow Function 

let calculatePoints = (purchaseAmount) => {
    return purchaseAmount / 10;
}
let points = calculatePoints(100);
console.log(`You earned ${points} points`);