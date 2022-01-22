var currentDay = moment().format("dddd, MMMM Do YYYY");
$("#today").text(currentDay)

$(document).currentDay(function () {
    $(".savebtn").moment("click", function () {
        var input = $(this).sibling(".input").val();
        var timeSlot = $(this).parent().attr();

        localStorage.setItem(input, timeSlot);
    })


    // Local Storage
    $("#hour8 .input").val(localStorage.getItem(hour8));
    $("#hour9 .input").val(localStorage.getItem(hour9));
    $("#hour10 .input").val(localStorage.getItem(hour10));
    $("#hour11 .input").val(localStorage.getItem(hour11));
    $("#hour12 .input").val(localStorage.getItem(hour12));
    $("#hour13 .input").val(localStorage.getItem(hour13));
    $("#hour14 .input").val(localStorage.getItem(hour14));
    $("#hour15 .input").val(localStorage.getItem(hour15));
    $("#hour16 .input").val(localStorage.getItem(hour16));
    $("#hour17 .input").val(localStorage.getItem(hour17));

    
})



function trackTime() {
    var currentTime = moment().format();
}














// var container = $('.container');
// var workH = 8;
// for (var i = 0; i < workH; i++) {
//     container.append(`
// `);
// }

// function handleEdit(event) {
// console.log(event)
// var id = event.target.dataset.id;
// console.log(id);
// var textval = $(`#bob-${id}`).val(); 
// console.log(textval);

// };

// container.on('click', '.edit', handleEdit)

// **********************************************************

{/* <div id="yes-${i}">
<h1>Hello</h1>
<textarea id="bob-${i}">Hey</textarea>
<button class="edit" id="no-${i}" data-id="${i}">Click Me</button>
</div> */}


{/* <div class="container id="yes-${i}">
<div class="row">
  <div class="col id="bob-${i}">
    1 of 3
  </div>
  <div class="col-10">
    2 of 3 (wider)
  </div>
  <div class="col">
 
    3 of 3
  </div>
  
</div> */}