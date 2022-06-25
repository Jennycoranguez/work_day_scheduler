var todaysdate = moment();
$("#currentDay").text(todaysdate.format("MMM Do,YYYY"));

$(".saveBtn").on("click",function(event){
    console.log(event)
    console.log("hi")
    console.log(event.target.previousElementSibling.value)
    console.log(event.target.parentElement.id)

    localStorage.setItem(event.target.parentElement.id,event.target.previousElementSibling.value)

})

$("#start-8.description").val(localStorage.getItem("start-8"))
$("#start-9.description").val(localStorage.getItem("start-9"))
$("#start-10.description").val(localStorage.getItem("start-10"))
$("#start-11.description").val(localStorage.getItem("start-11"))
$("#start-12.description").val(localStorage.getItem("start-12"))
$("#start-13.description").val(localStorage.getItem("start-13"))
$("#start-14.description").val(localStorage.getItem("start-14"))
$("#start-15.description").val(localStorage.getItem("start-15"))


var pasthour
var presenthour = currentTime;
var futurehour
console.log(currentTime)
function backgroundcolor(){
    if (presenthour==currentTime){
        document.getElementsByClassName("backgroundcolor").style.backgroundcolor= ("#ff696");
    }
}


//var weekday = moment("2022-06-23")
//$("currentDay").text(weekday.format("MMM Do, YYYY"));
// GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
//WHEN I scroll down
//THEN I am presented with timeblocks for standard business hours
//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future
//WHEN I click into a timeblock
//THEN I can enter an event
//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist
