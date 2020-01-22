$(document).ready(function() {
  $("form#groceryItemsIn").submit(function(event) {
    event.preventDefault();
    var items = $("#groceryList").val().split(" ");
    items.sort();
    items.forEach(function(item) {
      $("#organizedList").append("<li>" + item.toUpperCase() + "</li>");
      $("#groceryItemsIn").hide();
      $("#back").show();
      $("#back").click(function() {
        $("#groceryItemsIn").toggle();
      });
    })

  });
});