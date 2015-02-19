var List = { tasks: [] };

$(document).ready(function() {
  var newList = Object.create(List);

// ADD LIST
  $("form#add-list").submit(function(event) {
    event.preventDefault();
    var listName = $("#list").val();
    newList.name = listName;
    $(".lists").append("<li>" + listName + "</li>");
    $("#list").val("");
  });

// SHOW LIST TASKS
  // $(".lists").last().click(function(li) {
  //   $('.list-tasks').show();
  //   $(".to-do-list").val("");
  //   newList.tasks.forEach(function(task) {
  //     $(".to-do-list").append("<li>" + task + "</li>");
  //   });
  // });

// ADD TASK
  $("form#add-task").submit(function(event) {
    event.preventDefault();

    var taskName = $("#task").val();
    newList.tasks.push(taskName);

    $(".to-do-list").append("<li>" + taskName + "</li>");
    $("#task").val("");
    $(".to-do-list").last().click(function(li) {
      $(li.target).remove();
    });
    debugger;
  });
});
