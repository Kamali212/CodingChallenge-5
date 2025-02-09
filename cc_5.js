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

const prices = [450, 280, 920]; // Declare an array
const discountPrice = prices.map(price => price * (1 - 0.10)); // Apply 10% discount using map method
console.log(discountPrice); // Log new discounted prices to the console



