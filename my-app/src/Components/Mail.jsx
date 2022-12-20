import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
 
const EmailContactForm = (seq) => {
 //console.log(emailjs)

 var templateParams = {
  message: seq,
};
 
 
   emailjs.send('service_an3oe19', 'template_u164klf', templateParams, 'Ke6FcyWPPZPyCyTFX')
     .then((result) => {
         console.log(result)
     }, (error) => {
         console.error(error)
     });
 };

 
export default EmailContactForm;