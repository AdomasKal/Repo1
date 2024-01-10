let laikrodis = document.getElementById("clock");

function updateClock() {
   let now = new Date();

   function addZero(num){
       return num < 10 ? `0${num}` : num;
   }

   let hours = addZero(now.getHours());
   let minutes = addZero(now.getMinutes());
   let seconds = addZero(now.getSeconds());
   
   let current_Time = `${hours}:${minutes}:${seconds}`;

   laikrodis.innerText = current_Time;
}

updateClock(); // Update the clock once immediately
setInterval(updateClock, 1000); // Then update it every second