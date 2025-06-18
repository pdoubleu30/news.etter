const form = document.getElementById('form');
const eAddress = document.getElementById('email');
const eAddressError = document.getElementById('inputError');

const handleSubmit = (e) => {
  e.preventDefault();

     if (eAddress.value.length === 0){
    document.getElementById('emailError').style.display = "block";
    document.getElementById('inputError').style.display = "block";
    document.getElementById('email').style.display = "none";
    return;
    } else {
    document.getElementById('success').style.display = "block";
    document.getElementById('mainPage').style.display = "none";
    }

const formData = new FormData(e.target);
const data = Object.fromEntries(formData);

console.log(data);

};


form.addEventListener('submit', handleSubmit);
