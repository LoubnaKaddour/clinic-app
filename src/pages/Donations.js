// src/pages/Donation.js
import React, { useState } from "react";
import "../styles/Donation.css";

const Donation = () => {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDonate = (e) => {
    e.preventDefault();
    alert("شكرًا لمساهمتك ❤️");
    setFormData({ name: "", amount: "", message: "" });
  };

  return (
    <div className="donation-page">
      <header className="donation-header">
        <h1>دعمكم يصنع الفرق</h1>
        <p>
          ساهم معنا في توفير الرعاية الصحية لمن يحتاجها. تبرعك يمكن أن ينقذ حياة.
        </p>
      </header>

      <section className="donation-info">
        <div className="info-card">
          <h3>لماذا نتلقى التبرعات؟</h3>
          <p>
            نستخدم التبرعات لتوفير الأدوية، تحسين التجهيزات، وتقديم الرعاية المجانية
            للمرضى المحتاجين.
          </p>
        </div>
        <div className="info-card">
          <h3>أين تذهب تبرعاتكم؟</h3>
          <ul>
            <li>شراء معدات طبية حديثة</li>
            <li>دعم المرضى غير القادرين على دفع التكاليف</li>
            <li>تنظيم حملات صحية مجانية</li>
          </ul>
        </div>
        <div className="info-card">
          <h3>أثر تبرعك</h3>
          <p>
            كل دينار يساهم في تقديم علاج، ابتسامة، أو فرصة لحياة أفضل.
          </p>
        </div>
      </section>

      <section className="donation-form-section">
        <h2>نموذج التبرع</h2>
        <form className="donation-form" onSubmit={handleDonate}>
          <label>الاسم الكامل</label>
          <input
            type="text"
            name="name"
            placeholder="أدخل اسمك"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>قيمة التبرع (د.ج)</label>
          <input
            type="number"
            name="amount"
            placeholder="مثال: 2000"
            value={formData.amount}
            onChange={handleChange}
            required
          />

          <label>رسالة أو نية التبرع (اختياري)</label>
          <textarea
            name="message"
            placeholder="مثال: صدقة جارية عن..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">تبرع الآن</button>
        </form>
      </section>

      <section className="bank-details">
        <h2>تفاصيل الحساب البنكي</h2>
        <p>الاسم: عيادة الشفاء الخيرية</p>
        <p>رقم الحساب: 12345678910000</p>
        <p>البنك: بنك الجزائر الوطني</p>
        <p>SWIFT Code: DZB1234XXX</p>
        <p>
          يمكنك التبرع أيضًا عبر الحضور المباشر للعيادة أو استخدام وسائل الدفع الإلكتروني.
        </p>
      </section>
    </div>
  );
};

export default Donation;

