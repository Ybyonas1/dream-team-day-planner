var container = $('.container');
var workH = 9;
var today = moment().format("dddd, MMM Do, YYYY");
var enteredText = $(".edit");

$("#currentDay").text(today);

var displayHour = 9
var displayampm = "am"
var currentHour = moment().format('H') - 9;

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
    if (currentHour == i) {
        container.append(`
  <div class="row time-block">  
    <div class="col-md-1 hour">${displayHour}${displayampm}</div>
    <textarea class="col-md-10 present description" id="${i}">${textcontent}</textarea>
    <button class="col-md-1 saveBtn" id="edit-${i}" data-hour="Cheese" data-id="${i}">💾</button>
  </div>
`)
    } else if (currentHour > i) {
        container.append(`
    <div class="row time-block">  
      <div class="col-md-1 hour">${displayHour}${displayampm}</div>
      <textarea class="col-md-10 past description" id="${i}">${textcontent}</textarea>
      <button class="col-md-1 saveBtn" id="edit-${i}" data-hour="Cheese" data-id="${i}">💾</button>
    </div>
  `)
    } else {
        container.append(`
    <div class="row time-block">  
      <div class="col-md-1 hour">${displayHour}${displayampm}</div>
      <textarea class="col-md-10 future description" id="${i}">${textcontent}</textarea>
      <button class="col-md-1 saveBtn" id="edit-${i}" data-hour="Cheese" data-id="${i}">💾</button>
    </div>
  `)
    }
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
