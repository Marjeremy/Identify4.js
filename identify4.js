const productList = ["Shoes", "Shirt", "Hat", "Bag"]; 

const findProductPairs = (products) => {  
    const pairs = [];  
    for (let i = 0; i < products.length; i++) { 
        for (let j = i + 1; j < products.length; j++) {  
            pairs.push(`${products[i]} and ${products[j]}`);  
        } 
    }
    return pairs;  
}

console.log(findProductPairs(productList));  
module.exports = { findProductPairs }; 

//Array Initialization (const productList = [...]): O(1)
//Creating the array is a constant time operation.

//Function Declaration (const findProductPairs = (products) => { ... }): O(1)
//Declaring the function does not impact time complexity.

//Outer Loop (for (let i = 0; i < products.length; i++)): O(n)
//The outer loop runs n times, where n is the number of products.

//Inner Loop (for (let j = i + 1; j < products.length; j++)): O(n) in the worst case
//The inner loop runs approximately n-1, n-2, ..., down to 1 times, resulting in a total of O(n²) iterations.

//Pushing Pairs (pairs.push(...)): O(1) per operation, but executed O(n²) times due to the nested loops, so overall it’s O(n²)

//Return Statement (return pairs): O(1)
//Returning the array is a constant time operation.