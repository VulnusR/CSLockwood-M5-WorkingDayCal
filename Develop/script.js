
$(function () {

  var presentTime = dayjs().hour();
  var workHours = [8, 9, 10, 11, 12, 13, 14, 15, 16];
  var currentDate = dayjs().format("MMMM D, YYYY");

  $("#currentDay").html("<h1>Today's Date: " + currentDate + "</h1>");  
  
  



  //Saves text data for corrosponding time section.
  $('.saveBtn').click(function() {

    var textArea = $(this).closest('.time-block').find('.description');
    var clickEventTime = $(this).closest('.time-block').attr('id');
    var clickEventTxt = textArea.val();
    
    localStorage.setItem(clickEventTime, clickEventTxt);
  });




  //Applies various effects to 'time-block's
  $('.time-block').each(function() {

    //displays data saved in local storage using a loop
    var hour = $(this).attr('id').split('-')[1];
    var storedKeyValue = localStorage.getItem("hour-" + hour);

    if (storedKeyValue) {
      $(this).find('.description').val(storedKeyValue);
    }


    //converts value to integer for later comparison 
    var hourInt = parseInt(hour)
    

    //Changes color values of 'time-block' depending on realitive time of day.
    if (workHours.includes(hourInt)) {

      
      if (hourInt < presentTime) {
      $(this).removeClass('present').removeClass('future').addClass('past');
      } 
      
      else if (hourInt === presentTime) {
      $(this).removeClass('past').removeClass('future').addClass('present');  
      } 
      
      else {
      $(this).removeClass('past').removeClass('present').addClass('future');  
      }

    }


    

    
  });
  
 

  



});
