var container = $('.container');
var workH = 9;
var today = moment().format("dddd, MMM Do, YYYY");
var enteredText = $(".edit");

var a = [];

$("#currentDay").text(today);


/**
 * --------- STYLING TIME BLOCKS----------
 * 
 * 
 * 1) Get current Hour. -Check-
 * 
 * 2) Determine styling for each time block
 *      If the current hour is greater than the time block hour, 
 *      style as .past
 * 
 *      If current hour is equivalant to time block hour, style
 *      as .present
 * 
 *      If current hour is less than the block hour, style as
 *      .future
 * 
 *  ---------- LOADING SAVED DATA -----------
 * 
 *
 * 1) Get any data from local storage
 *  2) Pull data form local storage into textarea
 * 
 * Whenever (current hour - 9) = (id) row == green
 * 
 *  * Whenever (current hour - 9) < (id) row == blue
 * 
 *  * Whenever (current hour - 9) > (id) row == green
 * 
 */

// const textRow = document.getElementsByClass("description");

function checkTime(event) {
    var currentHour = moment().format('H') - 16;
    var blockHour = event.target.dataset.id
    console.log(currentHour);
    console.log(blockHour);
    if (currentHour == blockHour) {
         document.getElementsByClass('description').style.backgoundColor = "Green";
        //  setColor(textRow, "blue");
        //   $('.description').css('background-color', 'Blue');
     } else if (currentHour > blockHour) {
         document.getElementsByClass('description').style.backgoundColor = "Blue";
        //  $('.description').css('background-color', 'Green');
     } else if (currentHour < blockHour) {
         document.getElementsByClass('description').style.backgoundColor = "Red";
        //  $('.description').css('background-color', 'Red');
     } else {
         document.getElementsByClass('description').style.backgoundColor = "Orange";
        //  $('.description').css('background-color', 'White');
     }

    //  document.getElementsByClass('description').style.backgoundColor = "green";
 };

checkTime;

//  function setColor(element, color) {
//      element.style.backgoundColor = color;
//  }


var displayHour = 9
var displayampm = "am"

for (var i = 0; i < workH; i++) {
    if (displayHour === 13) {
        displayHour = 1;
        displayampm = "pm";
    }
    var textcontent = "";
    var existingV = localStorage.getItem(`hour-${i}`)
    if (existingV !== undefined) {
        textcontent = existingV;
    } 
    if (existingV == undefined) {
        textcontent = "";
    } 
    
    container.append(`
  <div class="row time-block">  
    <div class="col-md-1 hour">${displayHour}${displayampm}</div>
    <textarea class="col-md-10 description" id="${i}">${textcontent}</textarea>
    <button class="col-md-1 saveBtn" id="edit-${i}" data-hour="Cheese" data-id="${i}">💾</button>
  </div>
`)
    displayHour++;
}

function handleEdit(event) {
    console.log(event)
    var id = event.target.dataset.id;
    console.log(id);
    var inputedData = $(`#${id}`).val();
    console.log(inputedData);

    localStorage.setItem(`hour-${id}`, inputedData);

};

container.on('click', '.saveBtn', handleEdit)
