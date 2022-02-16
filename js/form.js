var displayData = document.querySelector('.display');
const form = document.querySelector('form');
function handleSubmit(event) {
    event.preventDefault();
    

    const data = new FormData(event.target);

   const value = Object.fromEntries(data.entries());

   let name = document.createElement('p');
   let surname = document.createElement('p');
   let phone = document.createElement('p');
   let email = document.createElement('p');

   name.innerHTML = value.name;
   surname.innerHTML = value.surname;
   phone.innerHTML = value.phone;
   email.innerHTML = value.email;

   displayData.appendChild(name);
   displayData.appendChild(surname);
   displayData.appendChild(phone);
   displayData.appendChild(email);
   form.reset();
  }

  
  form.addEventListener('submit', handleSubmit);
 