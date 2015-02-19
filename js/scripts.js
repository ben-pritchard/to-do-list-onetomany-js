var List = {};

$(document).ready(function() {

  var currentList;

// ADD LIST
  $("form#add-list").submit(function(event) {
    event.preventDefault();
    var listName = $("#list").val();
    var newList = Object.create(List);
    newList.name = listName;
    newList.tasks = [];
    $(".lists").append("<li id='list-name'>" + listName + "</li>");
    $("#list").val("");

// SHOW LIST TASKS
    $("li#list-name").last().click(function() {
      $('.list-tasks').show();
      currentList = newList;
      $("#task").val("");
      $(".to-do-list").text("");
      currentList.tasks.forEach(function(task) {
        $(".to-do-list").append("<li>" + task + "</li>");
      });
    });
  });


// ADD TASK
  $("form#add-task").submit(function(event) {
    event.preventDefault();
    var taskName = $("#task").val();
    currentList.tasks.push(taskName);
    $(".to-do-list").text("");
    currentList.tasks.forEach(function(task) {
      $(".to-do-list").append("<li>" + task + "</li>");
    });
    $("#task").val("");
    $(".to-do-list").last().click(function(li) {
      $(li.target).remove();
    });
  });
});
