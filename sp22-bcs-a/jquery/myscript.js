function btnTest() {
  alert("You CLicked a Button");
}

function sortTodos() {
  let todoArray = [];

  $("#todos li").each(function () {
    todoArray.push($(this).html());
  });

  console.log(todoArray);
  todoArray.sort();
  $("#todos").empty();
  for (var i = 0; i < todoArray.length; i++) {
    $("#todos").append("<li>" + todoArray[i] + "</li>");
  }
  $("#todos").removeClass("green").addClass("red");
}
