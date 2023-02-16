
$(function () {




  var presentTime =dayjs().hour();
  console.log(presentTime)
  var workHours = [8, 9, 10, 11, 12, 13, 14, 15, 16];
  console.log(workHours)
  var currentDate = dayjs().format("MMMM D, YYYY");

  $("#currentDay").html("<h1>Today's Date: " + currentDate + "</h1>");  
  
  

 //json.stringify

 
  $('.saveBtn').click(function() {


    var textArea = $(this).closest('.time-block').find('.description');
    console.log (textArea)
    var clickEventTime = $(this).closest('.time-block').attr('id');
    console.log(clickEventTime)
    var clickEventTxt = textArea.val();
    console.log(clickEventTxt)
    
    localStorage.setItem(clickEventTime, clickEventTxt);
  });





  $('.time-block').each(function() {

    var hour = $(this).attr('id').split('-')[1];
    console.log(hour)

    var storedKeyValue = localStorage.getItem("hour-" + hour);

    if (storedKeyValue) {
      $(this).find('.description').val(storedKeyValue);

 

    }



    var hourInt = parseInt(hour)


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
