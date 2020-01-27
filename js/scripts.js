function exceptionThree(userNumber) {
  if (userNumber.includes (3)) {
    var output = ("I'm sorry, Dave. I'm afraid I can't do that.");
    return output
  } else {
    var output = exceptionTwo(userNumber);
    return output
  }
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
      var display = exceptionThree(index);
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