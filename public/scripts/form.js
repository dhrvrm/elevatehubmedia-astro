let form = document.querySelector('#contact-form');
let formButton = document.querySelector('.btn-form');

const formSubmit = async (event) =>{
   event.preventDefault();

   let formData = new FormData(form);

   try {
       const response = await fetch('YOUR_POST_URL_HERE', {
           method: 'POST', // or 'PUT'
           body: formData, // The FormData object to be sent
           // If additional headers are required, uncomment the following line and adjust as needed
           // headers: {
           //     'Content-Type': 'application/json', // or another appropriate value
           // },
       });

       if (response.ok) {
           const jsonResponse = await response.json();
           console.log('Form submitted successfully:', jsonResponse);
           form.clear();
       } else {
           console.error('Form submission failed:', response.status, response.statusText);
       }
   } catch (error) {
       console.error('Network error:', error);
   } 
}

const formSubmitCB = (event) =>{
    form.submit();
 }

 console.log('Inside App JS');
// formButton.addEventListener('click',formSubmitCB);

