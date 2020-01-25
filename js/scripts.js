function numberCheck(userNumber) {
  var numbers = [];
    for (var index = 0; index < userNumber; index++) {
      numbers.push(index);
    }
    return numbers
};

// Doing all three exception checks did not work in the same loop or function section. Will try separating them.

 function exceptionThree(userNumber) {
  var numbers = [];
  for (var index = 0; index < userNumber; index++) {
    numbers.push(index);

   var exceptions = [1, 2, 3]
   var range = numbers.slice(0, userNumber);
     for (index = 0; index < range.length; index ++) {
       range.forEach(function(range) {
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

 function exceptionTwo(userNumber) {
  var numbers = [];
  for (var index = 0; index < userNumber; index++) {
    numbers.push(index);
 }


 function exceptionOne(userNumber) {
  var numbers = [];
  for (var index = 0; index < userNumber; index++) {
    numbers.push(index);
 }



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