

$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    var userNumber = $("input#number").val();
    if (!userNumber) {
      alert("Please enter a number.");
    } else {
        numbercheck(userNumber);
    }
  });
});