const form = document.getElementById('form');
const eAddress = document.getElementById('email');

const handleSubmit = (e) => {
  e.preventDefault();

const formData = new FormData(e.target);
const data = Object.fromEntries(formData);

console.log(data);

};


const isValidEmail = () => {
  if (email.value.length === 0);
    return 'Please input an email.'
}


form.addEventListener('submit', handleSubmit);
