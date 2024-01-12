const form = document.getElementById('applicationForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const formObject = {};
    let sumScores = 0;
    let isValid = true; // Flag to check overall form validity

    for (const [key, value] of formData.entries()) {
        formObject[key] = value;
        // If the key is one of the scores, add it to sumScores
        if (['Excel', 'Word', 'web', 'javai', 'drambliukas'].includes(key)) {
            sumScores += parseInt(value, 10);
        }
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(formObject.email)) {
        alert('Įveskite tinkamą eletroninio pašto adresą.');
        isValid = false;
    }

    // Validate phone number
    const phonePattern = /^\+370\d{8}$/;
    if (!phonePattern.test(formObject.phone)) {
        alert('Telefono numeris turi prasidėti +370 ir būti sudarytas iš 11 skaitmenų.');
        isValid = false;
    }

    // If the form is not valid, stop processing
    if (!isValid) {
        return;
    }

    // Calculate the average score
    const averageScore = sumScores / 5;

    // Create the formatted output string
    const outputString = `
        Name: ${formObject.name}
        Surname: ${formObject.surname}
        Email: ${formObject.email}
        Phone number: ${formObject.phone}
        Address: ${formObject.country}, ${formObject.city}, ${formObject.street}, ${formObject.house}
        Average score: ${averageScore.toFixed(1)}
    `;

    // Log the formatted string to the console
    console.log(outputString);

    // Also display the output on the page
    const outputHtml = `
        <h3><u>Jūsų užpildyti duomenys</u></h3>
        <p>Vardas: ${formObject.name}</p>
        <p>Pavardė: ${formObject.surname}</p>
        <p>El.paštas: ${formObject.email}</p>
        <p>Tel. numeris: ${formObject.phone}</p>
        <p>Adresas: ${formObject.country}, ${formObject.city}, ${formObject.street} ${formObject.house}</p>
        <p>${formObject.name} ${formObject.surname} (${formObject.email}) balas: ${averageScore.toFixed(1)}</p>
    `;

    // Append the output to the container
    const outputContainer = document.getElementById('outputContainer');
    outputContainer.innerHTML = outputHtml;
});