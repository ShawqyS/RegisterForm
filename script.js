document.getElementById("registerButton").addEventListener("click", function validateForm() {

    
    // Alle form-input velden ophalen

    function checkEmptyField(field, message) {
        if (field.trim() === "") {
        errors.push(message);
        }
    }
    
    function checkPC(postalCode) {
        if (!postalCode.value) {
          errors.push("Het veld postcode is vereist.");
        } else if (postalCode.value < 1000 || postalCode.value >= 10000) {
          errors.push("De waarde van postcode moet tussen 1000 en 9999 liggen.");
        }
    }
    
    function validatePayment(paymentMethod) {
        if (!paymentMethod) {
            return "Betalingswijze is verplicht";
        } else {
            document.getElementById("paymentAlert").textContent = "Betalingswijze: " + paymentMethod.value;
            return "";
        }
    }
        
        
    // functie om e-mailadres te valideren
    function validateEmail(email) {
        const emailRegex = /\S+@\S+.\S+/;
        return emailRegex.test(email);
    }
        
    // functie om wachtwoorden te controleren
    function checkPassword(password, confirmPassword) {
        if (password.trim() === "" || confirmPassword.trim() === "") {
        errors.push("Wachtwoord en bevestiging van wachtwoord zijn verplicht");
        } else if (password.length < 8) {
        errors.push("Wachtwoord moet minimaal 8 karakters bevatten");
        } else if (password !== confirmPassword) {
        errors.push("Wachtwoord en bevestiging van wachtwoord moeten overeenkomen");
        }
    }

    var firstName = document.getElementById("firstNameInput").value;
    var lastName = document.getElementById("lastNameInput").value;
    var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;
    var confirmPassword = document.getElementById("confirmPasswordInput").value;
    var email = document.getElementById("emailInput").value;
    var address = document.getElementById("addressInput").value;
    var country = document.getElementById("countryInput").value;
    var province = document.getElementById("provinceInput").value;
    var postalCode = document.getElementById("postalCodeInput").value;
    var paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    var termsAndConditions = document.getElementById("termsAndConditionsInput");
    
    // Alle error messages en alerts verbergen
    document.getElementById("errorList").style.display = "none";
    document.getElementById("successAlert").style.display = "none";
    document.getElementById("paymentAlert").style.display = "none";
    
    // Alle errors bijhouden
    var errors = [];
    
    // Valideer voornaam
    checkEmptyField(firstName, "Voornaam is verplicht");
    
    // Valideer achternaam
    checkEmptyField(lastName, "Achternaam is verplicht");
    
    // Valideer gebruikersnaam
    checkEmptyField(username, "Gebruikersnaam is verplicht");
    
    // Valideer wachtwoord
    checkPassword(password, confirmPassword);
    
    // Valideer email
    if (!validateEmail(email)) {
    errors.push("E-mailadres is niet correct.");
    }
    
    // Valideer adres
    checkEmptyField(address, "Adres is verplicht");
    
    // Valideer land
    checkEmptyField(country, "Land is verplicht");
    
    // Valideer provincie
    checkEmptyField(province, "Provincie is verplicht");
    
    // Valideer postcode
    if (postalCode.trim() === "" || postalCode < 1000 || postalCode > 9999) {
    errors.push("Ongeldige postcode.");
    }
    
    // Valideer betalingswijze
    var paymentError = validatePayment(paymentMethod);
    if (paymentError !== "") {
        errors.push(paymentError);
    }

    if (!termsAndConditions.checked) {
        errors.push("U moet akkoord gaan met de algemene voorwaarden.");
    }
    

    // Valideer postcode
    checkPC(document.getElementById("postalCodeInput"));

     // Als er errors zijn, toon deze
     if (errors.length > 0) {
        // Verwijder alle bestaande errors
        var errorList = document.getElementById("errorList");
        errorList.innerHTML = "";
        
        // Voeg nieuwe errors toe
        for (var i = 0; i < errors.length; i++) {
        var error = errors[i];
        var errorItem = document.createElement("li");
        errorItem.textContent = error;
        errorList.appendChild(errorItem);
        }
        
        // Toon errors
        errorList.style.display = "block";
    } else {
        // Toon success alert
        document.getElementById("successAlert").style.display = "block";
        document.getElementById("paymentAlert").style.display = "block";
        }
});
