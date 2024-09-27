const form = document.getElementById('form'); 
const email = document.getElementById('email'); 

// Create the <p> tag first
const ptag = document.createElement('p');
ptag.textContent = "Please provide a valid email address";

// Insert it after the email input
ptag.classList.add("white-error") ;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validate()) {
        submitEmail(); // Only submit if valid
    }
}); 

email.addEventListener('input', validate); // Validate on input

function validate() {
    const emailValue = email.value.trim(); 

    if (emailValue === '') {
        setErrorFor(); // Turn red for empty
        return false; // Return false if empty
    } else if (!isEmail(emailValue)) {        
        setErrorFor(); // Turn red for invalid format
        return false; // Return false if invalid
    } else {
        setSuccessFor(); // Turn green for valid format
        return true; // Return true if valid
    }
}

function setErrorFor() {
    email.classList.add('red-email');   
    email.classList.remove('green-email'); // Ensure green class is removed  
    ptag.classList.add('error'); 
    ptag.classList.remove('white-error');
	email.insertAdjacentElement('afterend', ptag); // Ensure white class is removed
}

function setSuccessFor() {
    email.classList.remove('red-email');
    email.classList.add('green-email'); 
    ptag.classList.remove('error'); 
    ptag.classList.add("white-error"); 
	ptag.remove();
	
}

function isEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function submitEmail() {
    console.log('Email submitted:', email.value);
    form.reset();  // Optionally reset the form
}
