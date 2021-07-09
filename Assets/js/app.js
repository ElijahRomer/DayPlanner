console.log('If this is logged, then app.js is linked correctly.');
console.log()
// LOAD HEADER TIMER
let dateTimeEl = $('#current-day');

let updateDateTime = () => {
  dateTimeEl[0].textContent =(moment().format('MMMM Do YYYY, h:mm:ss a'));
};

let loadHeaderTimer = () => {
  console.log (`loadHeaderTimer FIRED`)
  dateTimeEl[0].textContent =(moment().format('MMMM Do YYYY, h:mm:ss a'));
  setInterval(updateDateTime, 1000);
}
//END LOAD HEADER TIMER


let isPastPresentOrFuture = (timeBlockHour) => {
  //compare hour of current moment to the hour of the specified timeblock
  let currentHour = moment().hour();
  console.log(timeBlockHour);
  console.log(currentHour);
  if (currentHour === timeBlockHour){
    return 'present';
  } else if(currentHour < timeBlockHour) {
    return 'future';
  } else {
    return 'past';
  }
}

let loadTimeBlocks = () => {
  console.log(`loadTimeBlocks FIRED`)
  let businessOpen = 8;
  let businessClose = 18;

  for (let i = businessOpen -1; i < businessClose; i++){

    let currentRowEl = $(`<div class='row'></div>`);
      let currentHourEl = $(`<div class='col-1 hour'>${i + 1}:00</div>`);
        currentHourEl.appendTo(currentRowEl);
      let textAreaInput = $(`<textarea class="col-10 ${isPastPresentOrFuture(i + 1)}"></textarea>`)
        textAreaInput.appendTo(currentRowEl);
      let saveButtonEl = $(`<div class="saveBtn col-1"><i class="fas fa-save"></i></div>`)
        saveButtonEl.appendTo(currentRowEl);
    currentRowEl.appendTo('#timeRows');
  }
}
//LOAD HEADER AND TIMER
$(`document`).ready(loadHeaderTimer);
$(`document`).ready(loadTimeBlocks);






function logProperties(testObject){
    for (let property in testObject){
      console.log(`testObject property: ${property} has a value of ${testObject[property]}`)
    }
};

// GIVEN I am using a daily planner to create a schedule*************************

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// DONE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist