//bindings here will not work
// var btn = document.getElementById("addBtn");
// console.log(btn);
// btn.onclick = addNewTodo;

console.log("Code Started");

//bad bad way
// setTimeout(doBindings, 1000);

//pure JS way
// window.onload = doBindings;

//JQuery way
$(doBindings);

//another JQuery way
// $(document).ready(doBindings);

//avoid seperate function for bindings
// $(function () {
//   var btn = document.getElementById("addBtn");
//   console.log(btn);
//   btn.onclick = addNewTodo;
// });

console.log("Binding Attached");

function doBindings() {
  var btn = document.getElementById("addBtn");
  console.log(btn);
  btn.onclick = addNewTodo;
}

function addNewTodo() {
  var newVal = $("#newTodo").val();
  $("#todos").append("<li>" + newVal + "</li>");
  $("#newTodo").addClass("green");
}

//this binding will only occur for tags which are present at the time of page load
// $(function () {
//   $("#todos li").on("mouseenter", mouseenterli);
//   $("#todos li").on("mouseleave", mouseleaveli);
// });

$(function () {
  $("#todos").on("mouseenter", "li", mouseenterli);
  $("#todos").on("mouseleave", "li", mouseleaveli);
});

function mouseenterli() {
  $(this).addClass("green");
}

function mouseleaveli() {
  $(this).removeClass("green");
}
