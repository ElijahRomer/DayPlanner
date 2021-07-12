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
  // let currentHour = 12
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
      let currentHourEl = $(`<div class='col-2 col-md-1 hour'>${i + 1}:00</div>`);
        currentHourEl.appendTo(currentRowEl);
      let textAreaInput = $(`<textarea class="col-8 col-md-10 ${isPastPresentOrFuture(i + 1)}" id = "${i + 1}"></textarea>`)
        textAreaInput.appendTo(currentRowEl);
      let saveButtonEl = $(`<div class="saveBtn col-2 col-md-1"><i class="fas fa-save"></i></div>`);
      saveButtonEl.appendTo(currentRowEl);
      currentRowEl.appendTo('#time-rows-container');
    }
    $(`i`).on('click', persistEntryToLocalStorage)
}

let refreshTimeBlocks = () => {
  console.log(`UPDATING TIMEBLOCKS`)
  $('#time-rows-container').children().remove()
  loadTimeBlocks()
}

//LOAD HEADER AND TIMER
$(`document`).ready(loadHeaderTimer);
$(`document`).ready(loadTimeBlocks);

//ADD EVENT LISTENER TO REFRESH TIME-BLOCKS BUTTON
$(`#refresh`).on('click', refreshTimeBlocks);
  
//PERSIST ENTRY TO LOCAL STORAGE 
let persistEntryToLocalStorage = (eventObject) => {
  console.log(`persistEntryToLocalStorage FIRED`);
  let entryId = $(eventObject.target).parent().siblings('textarea').attr('id');
  entryId = parseInt(entryId) - 8; //convert time to index in HTML collection

  let entry = $(eventObject.target).parent().siblings('textarea').val();
  localStorage.setItem(entryId, entry);
}


let retrieveEntriesFromLocalStorage = () => {
  let textAreaHtmlCollection = $('textarea');

  for (let entryKey = 0; entryKey < textAreaHtmlCollection.length; entryKey++) {
    if(!localStorage.getItem(entryKey)){
      continue;
    }
      let currentEntryValue = localStorage.getItem(entryKey);
      let currentEntryTextAreaEl = $(textAreaHtmlCollection[entryKey]);
      currentEntryTextAreaEl.val(currentEntryValue);
  }
}

$('document').ready(retrieveEntriesFromLocalStorage)