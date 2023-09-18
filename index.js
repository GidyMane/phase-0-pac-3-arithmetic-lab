function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a/b;
}
function increment(n){
    return n + 1;
}
function decrement(n){
    return n - 1;
}
function makeInt(n) {
    const parsedValue = parseInt(n, 10); // Parse `n` as an integer with base 10.
    return isNaN(parsedValue) ? NaN : parsedValue; // Check if parsing resulted in NaN and return accordingly.
  }
  function preserveDecimal(n) {
    const parsedValue = parseFloat(n); // Parse `n` as a floating-point number.
    return isNaN(parsedValue) ? NaN : parsedValue; // Check if parsing resulted in NaN and return accordingly.
  }