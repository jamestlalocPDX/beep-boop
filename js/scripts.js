function exceptionThree(userNumber) {
};

function exceptionTwo(userNumber) {
  if (userNumber.includes(2)) {
    var output = ("Boop!");
    return output
  } else {
    var output = exceptionOne(userNumber);
    return output
  }
};

function exceptionOne(userNumber) {
  if (userNumber.includes(1)) {
    var output = ("Beep!");
    return output;
  } else {
    var output = userNumber;
    return output;
  };
};

function numberCheck(userNumber) {
  var range = [];
    for (var index = 0; index < userNumber; index++) {
      var index = index.toString();
      var display = exceptionTwo(index);
            range.push(display);
    }
    return range
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