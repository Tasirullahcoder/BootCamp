
// Create an array to use as a shopping list. Add Milk, Bread, Apples to your list.
//  Find and output the index value of Milk.

let shopping = ["milk", "bread", "apples"];
console.log(shopping[0]);

// 2 . FUNCTIONS
// -> Create a function that takes two parameters, adds the parameters together, and returns the result.
// -> Set up two different variables with two different values.
// -> Use your function on the two variables, and output the result using console.log.

var AddNum = (num1, num2) => {
  var sum = num1 + num2;
  return sum;
};
console.log(AddNum(10, 20));

//  3. By using Operator  and comparison operator make simple calculator-> Take the operator from the user through prompt box in Javascript.
// -> Write program to create a simple calculator using the if...else...if in Javascript.
// -> Accept the number from the user through prompt box. Use if, elseif  and else keyword to define the calculator condition in Javascript.

// Prompt user for input
var numb1 = parseFloat(prompt("Enter the first number:"));
var numb2 = parseFloat(prompt("Enter the second number:"));
var operator = prompt("Enter the operator (+, -, *, /):");

var result;

// Perform calculation based on operator
if (operator === "+") {
  result = numb1 + numb2;
} else if (operator === "-") {
  result = numb1 - numb2;
} else if (operator === "*") {
  result = numb1 * numb2;
} else if (operator === "/") {
  if (numb2 !== 0) {
    result = numb1 / numb2;
  } else {
    result = "Cannot divide by zero!";
  }
} else {
  result = "Invalid operator!";
}

// Display result
alert("Result: " + result);

// Displaying message in HTML page
document.getElementById("output").textContent ='Hellow Tasir Ullah';
