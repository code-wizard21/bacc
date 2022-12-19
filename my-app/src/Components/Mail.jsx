import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
 
const EmailContactForm = () => {
 //const form = useRef();
 console.log(emailjs)
 var templateParams = {
  name: 'James',
  notes: 'Check this out!',
  message:'Just Make the most of it Today!',
  to_name:'There',
  from_name:'operations@BA..e'
};
 
//  const sendEmail = (e) => {
//    e.preventDefault(); // prevents the page from reloading when you hit “Send”
 
   emailjs.send('service_an3oe19', 'template_u164klf', templateParams, 'Ke6FcyWPPZPyCyTFX')
     .then((result) => {
         // show the user a success message
         console.log(result)
     }, (error) => {
         // show the user an error
         console.error(error)
     });
 };
 
//  return (
//    <form ref={form} onSubmit={sendEmail}>
//      <label>Name</label>
//      <input type="text" name="user_name" />
//      <label>Email</label>
//      <input type="email" name="user_email" />
//      <label>Message</label>
//      <textarea name="message" />
//      <input type="submit" value="Send" />
//    </form>
//  );
//};
 
export default EmailContactForm;