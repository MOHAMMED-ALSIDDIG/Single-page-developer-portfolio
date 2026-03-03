const ContactForm = document.getElementById("contact_form");
const Name = document.getElementById("name");
const Email = document.getElementById("email");
const Erorr = document.querySelector(".erorr");
const Message = document.getElementById("message");
ContactForm.addEventListener("submit", (e) => {
e.preventDefault();  

// form validation
let isValid = true;

if(Name === ''){
    isValid=false;
    Name.style.borderColor="#FF6F5B";
}else {
        Name.style.borderColor="#4EE1A0";
}
// email validation
function isValidEmail(Email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;
    return emailRegex.test(Email);
}
if(!isValidEmail (Email)) {
     isValid=false;
       Email.style.borderColor="#FF6F5B";
       Erorr.style.display = "block";
} else {
     Email.style.borderColor="#4EE1A0";
}

if(Message === ''){
    isValid=false;
    Message.style.borderColor="#FF6F5B";
}else {
        Message.style.borderColor="#4EE1A0";
}

})
