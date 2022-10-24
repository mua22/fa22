console.log("Hello From Script File");

function doBindings() {
  $("#addBtn").on("click", addNewTodo);
  var btn = document.getElementById("addBtn");
  console.log(btn);
}

//JQuery Way
// $(doBindings);

$(document).ready(doBindings);

//another JQuery way
// $(function () {
//   $("#addBtn").on("click", addNewTodo);
//   var btn = document.getElementById("addBtn");
//   console.log(btn);
// });

//pure js way to do bindings
// window.onload = doBindings;

//bad bad way to do delayed bindings
// setTimeout(doBindings, 1000);

function testClickHandler() {
  alert("I will handle click");
}

function addNewTodo() {
  var newVal = $("#newTodo").val();
  $("#todos").append("<li>" + newVal + "</li>");
  $("#newTodo").addClass("green");
}
var mystudent = "Noman";

//This will not do bindings for lis which are made later after page load
// $(function () {
//   $("#todos li").on("mouseenter", mouseenter);
//   $("#todos li").on("mouseleave", mouseleave);
// });

//this is how we handle bindings for tags which are made after page load
$(function () {
  $("#todos").on("mouseenter", "li", mouseenter);
  $("#todos").on("mouseleave", "li", mouseleave);
});

function mouseenter() {
  $(this).addClass("green");
}
function mouseleave() {
  $(this).removeClass("green");
}
