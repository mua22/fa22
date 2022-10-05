console.log("Hello From Script File");

function testClickHandler() {
  alert("I will handle click");
}

function addNewTodo() {
  var newVal = $("#newTodo").val();
  $("#todos").append("<li>" + newVal + "</li>");
  $("#newTodo").addClass("green");
}
var mystudent = "Noman";
