import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
 
const EmailContactForm = (seq,email) => {
 //console.log(emailjs)
console.log(seq,email)
 var templateParams = {
  message: 5925,
  email:email
};
 
 
   emailjs.send('service_an3oe19', 'template_u164klf', templateParams, 'Ke6FcyWPPZPyCyTFX')
     .then((result) => {
         console.log(result)
     }, (error) => {
         console.error(error)
     });
 };

 
export default EmailContactForm;