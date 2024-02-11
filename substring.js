var str = "Hello, World";

// Extracting a substring starting from index 7 to the end
var substr1 = str.substring(7);
console.log(substr1);

// Extracting a substring starting from index 0 to index 5 (exclusive)
var substr2 = str.substring(0, 5);
console.log(substr2);

// If the start index is greater than the end index, substring() swaps the two
var substr3 = str.substring(12, 6);
console.log(substr3);

// If either index is NaN or negative, it is treated as 0
var substr4 = str.substring(NaN, 8);
console.log(substr4);

// Extracting the entire string
var substr5 = str.substring(0);
console.log(substr5);

// Extracting an empty string when start index equals end index
var substr6 = str.substring(5, 5);
console.log(substr6);
