// src/pages/Home.js
import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
<Link to="/login">تسجيل الدخول</Link>

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <img src="/images/home2.png" alt="واجهة عيادة تيسير الطبية" className="hero-image" />
        <div className="hero-text">
          <h1>مرحبًا بكم في عيادة تيسير الطبية</h1>
          <p>نرعاكم بكل حب واهتمام، لأن صحتكم أولويتنا</p>
        </div>
      </div>

      <div className="home-content">
        <h2>خدماتنا</h2>
        <p>
          نقدم في عيادة تيسير الطبية مجموعة من الخدمات الصحية المتكاملة تشمل الفحص الشامل، متابعة الأمراض المزمنة، والاستشارات الطبية المتخصصة. هدفنا هو تقديم رعاية صحية عالية الجودة لكل فرد من أفراد المجتمع.
        </p>

        <h2>لماذا تختارنا؟</h2>
        <ul>
          <li>فريق طبي محترف ذو خبرة</li>
          <li>رعاية إنسانية مميزة وخاصة لكبار السن</li>
          <li>بيئة مريحة وآمنة للمرضى</li>
          <li>مواعيد منظمة وخدمة حجز إلكترونية</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
