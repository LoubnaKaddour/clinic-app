// src/pages/Contact.js
import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("تم إرسال رسالتك بنجاح. سنقوم بالرد في أقرب وقت.");
    // هنا يمكن ربط النموذج بـ Firebase أو Laravel لاحقًا
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>اتصل بنا</h1>
        <p>نسعد بخدمتكم والإجابة على جميع استفساراتكم</p>
      </section>

      <section className="contact-details">
        <div className="contact-info">
          <h2>معلومات التواصل</h2>
          <ul>
            <li><strong>العنوان:</strong> شارع الحرية، وسط المدينة، الجزائر العاصمة</li>
            <li><strong>الهاتف:</strong> ‎+213-555-123456</li>
            <li><strong>البريد الإلكتروني:</strong> clinic@example.com</li>
            <li><strong>ساعات العمل:</strong> الأحد - الخميس: 08:00 صباحاً حتى 17:00 مساءً</li>
          </ul>
        </div>

        <div className="contact-form">
          <h2>أرسل لنا رسالة</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="الاسم الكامل"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="البريد الإلكتروني"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="الموضوع"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="اكتب رسالتك هنا..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">إرسال</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;

