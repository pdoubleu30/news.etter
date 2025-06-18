const form = document.getElementById('form');
const eAddress = document.getElementById('email');

const handleSubmit = (e) => {
  e.preventDefault();

     if (eAddress.value.length === 0){
    eAddress.classList.add("custom-email");
    document.getElementById('emailError').style.display = "block";
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
