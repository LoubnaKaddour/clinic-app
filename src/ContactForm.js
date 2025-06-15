// src/components/ContactForm.js
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmail_service',        // <-- عوضيها بـ Service ID
        'contact_template',     // <-- عوضيها بـ Template ID
        form.current,
        'your_public_key'       // <-- عوضيها بـ Public Key
      )
      .then(
        (result) => {
          alert("تم إرسال الرسالة بنجاح!");
          form.current.reset();
        },
        (error) => {
          alert("حدث خطأ أثناء الإرسال.");
          console.error(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>الاسم الكامل:</label>
      <input type="text" name="name" required />

      <label>البريد الإلكتروني:</label>
      <input type="email" name="email" required />

      <label>عنوان الرسالة:</label>
      <input type="text" name="title" required />

      <label>الرسالة:</label>
      <textarea name="message" rows="5" required />

      <button type="submit">أرسل الرسالة</button>
    </form>
  );
};

export default ContactForm;
