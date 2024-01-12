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

updateClock();
setInterval(updateClock, 1000);

const form = document.getElementById('applicationForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const formObject = {};
    for (const [key, value] of formData.entries()) {
        formObject[key] = value;
    }

    // Calculate the average score
    const scores = [
        parseInt(formObject.Excel, 10),
        parseInt(formObject.Word, 10),
        parseInt(formObject.web, 10),
        parseInt(formObject.javai, 10),
        parseInt(formObject.drambliukas, 10),
    ];
    const averageScore = scores.reduce((a, b) => a + b, 0) / scores.length;

    // Create the output HTML
    const outputHtml = `
        <p>Name: ${formObject.name}</p>
        <p>Surname: ${formObject.surname}</p>
        <p>Email: ${formObject.email}</p>
        <p>Phone number: ${formObject.phone}</p>
        <p>Address: ${formObject.country}, ${formObject.city}, ${formObject.street}, ${formObject.house}</p>
        <p>Average score: ${averageScore.toFixed(1)}</p>
    `;

    // Append the output to the container
    const outputContainer = document.getElementById('outputContainer');
    outputContainer.innerHTML = outputHtml;
});