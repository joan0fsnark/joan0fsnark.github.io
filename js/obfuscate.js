// ** PHONE ** //
document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript loaded'); // Check if this appears in the console

    // Define the phone number in parts
    var phoneParts = {
        countryCode: "+1",
        areaCode: "916",
        number: "245-0527"
    };

    // Function to reconstruct the phone number
    function getPhoneNumber() {
        return phoneParts.countryCode + ' ' + phoneParts.areaCode + '-' + phoneParts.number;
    }

    // Display the phone number
    document.getElementById('phone').textContent = getPhoneNumber();


// ** EMAIL ** //
// Define email address parts
var emailParts = {
    username: "info",
    domain: "pixelwhisk.com"
};

// Function to reconstruct the email address
function getEmailAddress() {
    return emailParts.username + '@' + emailParts.domain;
}

// Set the email address
var emailElement = document.getElementById('email');
emailElement.href = 'mailto:' + getEmailAddress();
emailElement.textContent = getEmailAddress();
});
