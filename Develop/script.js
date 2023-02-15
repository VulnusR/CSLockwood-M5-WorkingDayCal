// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.
  
  // HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?




//Applies function to all saveBtns so any of them can be clicked and have the same function.
$('.saveBtn').click(function() {


//Gets the text area.
//$(this) = JjQuery object that wraps around 'this', 'this' references the current object = (.saveBtn)
//.closest('.time-block) = searchs for and runs the nearest ancestor '.time-block' element of clicked .saveBtn
//.find('.description') = finds the descendant of the current element (.time-block in this case) that matches the .description element.
  var textArea = $(this).closest('.time-block').find('.description');


// retrieves the value of the textArea
 var descriptionInput = textArea.val();

 //On button click finds the nearest time-block and saves the 'id' aka the time and stores it in the savedTime variable
 var savedTime = $(this).closest('.time-block').attr('id');


 // stores the time & associated text in local storage
localStorage.setItem(savedTime, descriptionInput);
















});






  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
