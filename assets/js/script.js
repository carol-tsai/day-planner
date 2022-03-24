var timeblocksEl = $('#timeblocks');

var rightnow = moment();
$("#currentDay").text(rightnow.format("MMM Do, YYYY"));

var time = rightnow.format('HH')
console.log(hour);

var timeblocks = timeblocksEl.children();
console.log(timeblocks);

for(i=0; i<timeblocks.length; i++) {
   var hour = timeblocks.eq(i);
   var hourData = hour.attr('data-hour');
   var hourText = hour.children().eq(1);
   console.log(hour);
   if (hourData < time) {
      hourText.addClass('bg-secondary');
   } else if (hourData == time) {
      hourText.addClass('bg-success');
   } else {
      hourText.addClass('bg-info');
   }
}
