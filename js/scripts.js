$(document).ready(function() {
  $("form#groceryItemsIn").submit(function(event) {
    event.preventDefault();
    var organizedList = [];

    var userInput = $("#groceryList").val().split(",");
    organizedList.push(userInput);
    userInput.sort();
    organizedList.forEach(function(item) {
      console.log(item);
      $("#organizedList").append("<li>" + item + "</li>");
    });

    // $("#organizedList").append(userInput);

  });
});