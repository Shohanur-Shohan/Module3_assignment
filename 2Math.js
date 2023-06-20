// 2 math objrct
function sumOfNumbers(numbers) {

    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum = sum + Math.pow(numbers[i], 2);
    }
    
    var squareRoot = Math.sqrt(sum);
    return squareRoot;
}  

var numbers = [3, 4, 5];
var result = sumOfNumbers(numbers);
console.log(Math.round(result));