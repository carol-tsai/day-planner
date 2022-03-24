// Global Variables
var timeblocksEl = $('#timeblocks');
var rightnow = moment();
var time = rightnow.format('HH');
var timeblocks = timeblocksEl.children();

// Functions

// Save input text to local storage
function saveText(event) {
   event.preventDefault();
   var saveBtn = $(event.target);
   var text = saveBtn.parent().children('input').val();
   var time = saveBtn.parent().children('label').attr('for');
   console.log(time);
   localStorage.setItem(time, text);
   return;
}

// Fetch text from local storage
function fetchText(key, box) {
   if (localStorage.getItem(key) != null) {
      var text = localStorage.getItem(key);
      box.val(text);
   }
}
// Color code hour boxes based on time of day
function colorCode(data, box) {
   if (data < time) {
      box.addClass('past');
   } else if (data == time) {
      box.addClass('present');
   } else {
      box.addClass('future');
   }
}

// Set Date
$("#currentDay").text(rightnow.format("MMM Do, YYYY"));

// Set up planner
for(i=0; i<timeblocks.length; i++) {
   var hour = timeblocks.eq(i);
   var hourData = hour.attr('data-hour');
   var hourLabel = hour.children('label').attr('for');
   var hourText = hour.children().eq(1);
   var hourSave = hour.children().eq(2);
   fetchText(hourLabel, hourText);
   colorCode(hourData, hourText);
   hourSave.click(saveText);
}




