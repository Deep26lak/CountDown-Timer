const DaysEl = document.getElementById("Days")
const HoursEl = document.getElementById("Hours")
const MinutesEl = document.getElementById("Minutes")
const SecondsEl = document.getElementById("Seconds")


var newYear= prompt("enter any date in this formate (1 jan 2024)")
 if (newYear == ""){
    newYear="1 jan 2024"
 }

function countdown(){
    const newYearDate = new Date(newYear); 
    const currentDate= new Date();

    const totalSeconds= (newYearDate-currentDate)/1000 ;
    const days=Math.floor(totalSeconds/3600 /24);
    const hours=Math.floor(totalSeconds/3600)%24;
    const minutes= Math.floor(totalSeconds/60)%60;
    const seconds= Math.floor(totalSeconds)%60;
    
    DaysEl.innerHTML = formateTime(days);
    HoursEl.innerHTML= formateTime(hours);
    MinutesEl.innerHTML= formateTime(minutes);
    SecondsEl.innerHTML= formateTime(seconds);
}
function formateTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown()
setInterval(countdown,1000)