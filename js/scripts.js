function numberCheck(userNumber) {
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
  var output = exceptions(userNumber)
  return output
};

function exceptions(userNumber) {
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
  var exceptions = [1, 2, 3]
  var range = numbers.slice(0, userNumber);
    for (index = 0; index < range.length; index ++) {
      exceptions.forEach(function(exception) {
        if (range === exceptions[3]) {
          range = "I'm sorry, Dave. I'm afraid I can't do that."
        } else if (range === exceptions[2]) {
          range = "Boop!" 
        } else {
          range ==="Beep!"
        }

      });
    }; 
    return range;
};



$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    var userNumber = $("input#number").val();
    if (!userNumber) {
      alert("Please enter a number.");
    } else {
        alert(numberCheck(userNumber));
    };
  });
});