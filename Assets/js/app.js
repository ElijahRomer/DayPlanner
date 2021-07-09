console.log('If this is logged, then app.js is linked correctly.');

// LOAD HEADER TIMER
let dateTimeEl = $('#current-day');

let updateDateTime = () => {
  dateTimeEl[0].textContent =(moment().format('MMMM Do YYYY, h:mm:ss a'));
};

let loadHeaderTimer = () => {
  console.log (`loadHeaderTimer FIRED`)
  console.log(dateTimeEl);
  dateTimeEl[0].textContent =(moment().format('MMMM Do YYYY, h:mm:ss a'));
  setInterval(updateDateTime, 1000);
}

$(`document`).ready(loadHeaderTimer);
//END LOAD HEADER TIMER

let testObject = {
  myName: 'Elijah',
  myFavFood: 'Sushi',
  myFavActivity: 'Skydiving' 
}

function logProperties(testObject){
    for (let property in testObject){
      console.log(`testObject property: ${property} has a value of ${testObject[property]}`)
    }
};

logProperties(testObject);
