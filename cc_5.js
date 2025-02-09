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
    tax = amount * (taxRate / 100); // Create function to calcualte tax
    console.log(`The tax amount is $${tax}`); // Log tax amount to console with template literal
    return tax;
}
calculateTax(100, 0.20); // Tax example amount

