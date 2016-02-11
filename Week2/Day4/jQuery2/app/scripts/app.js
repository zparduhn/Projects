$(document).ready(function() {
    $('#newTaskForm').hide();
    var listo = [];
    var Task = function(task){
      this.task = task;
      this.id = 'new';
    }

    var addTask = function(task) {
      if(task) {
        task = new Task(task);
        listo.push(task);

        $('#newItemInput').val('').setItem;
        $('#newList').append('<a href="#" class="" id="item"><li class="list-group-item">' + task.task + '<span class="arrow pull-right"><i class="glyphicon glyphicon-arrow-right"></span></li></a>');

      }
      $('#newTaskForm,  #newListItem').fadeToggle('fast', 'linear');
    };

    $('#saveNewItem').on('click', function (e) {
        e.preventDefault();
        var task = $('#newItemInput').val().trim();
        addTask(task);
    });
    //Opens form
      $('#newListItem').on('click', function () {
          $('#newTaskForm,  #newListItem').fadeToggle('fast', 'linear');
      });
      //closes form
      $('#cancel').on('click', function (e) {
          e.preventDefault();
          $('#newTaskForm,  #newListItem').fadeToggle('fast', 'linear');
      });

      //Starting, Finishing, and Deleting Tasks
      var advanceTask = function(task) {
        var modified = task.innerText.trim()
        for (var i = 0; i < listo.length; i++) {
          if (listo[i].task === modified) {
            if (listo[i].id === 'new') {
              listo[i].id = 'inProgress';
            } else if (listo[i].id === 'inProgress') {
              listo[i].id = 'archived';
            } else {
              listo.splice(i, 1);
            }
            break;
          }
        }
        task.remove();
      };

      //new to inProgress
      $(document).on('click', '#item', function(e) {
          e.preventDefault();
      });

      //Change ID in the string 'inProgress'
      $(document).on('click', '#item', function(e) {
          e.preventDefault();
        var task = this;
        advanceTask(task);
        this.id = 'inProgress';
      });

      // move the actual list item

      $(document).on('click', '#item', function(e) {
          e.preventDefault();
        var task = this;
        advanceTask(task);
        this.id = 'inProgress';
        $('#currentList').append(this.outerHTML);
      });

      //move the items from 'inProgress' to 'archived'
      $(document).on('click', '#inProgress', function (e) {
        e.preventDefault();
        var task = this;
        task.id = "archived";
        var changeIcon = task.outerHTML.replace('glyphicon-arrow-right', 'glyphicon-remove');
        advanceTask(task);
        $('#archivedList').append(changeIcon);
      });

      //create a way to delete the items on the list.
      $(document).on('click', '#archived', function (e) {
        e.preventDefault();
        var task = this;
        advanceTask(task);
      });
});
