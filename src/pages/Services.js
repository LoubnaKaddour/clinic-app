// src/pages/Services.js
import React from "react";
import "../styles/Services.css";

const Services = () => {
  return (
    <div className="services-page">
      <section className="hero">
        <h1>خدماتنا الطبية</h1>
        <p>نقدم لك رعاية شاملة، احترافية، وإنسانية</p>
      </section>

      <section className="services-section">
        <h2>الخدمات العامة</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>الاستشارات الطبية</h3>
            <p>تقديم استشارات طبية دقيقة لكافة الحالات عبر أطباء متخصصين.</p>
          </div>
          <div className="service-card">
            <h3>الفحوصات الدورية</h3>
            <p>إجراء فحوصات دورية شاملة لمتابعة صحتك والوقاية من الأمراض.</p>
          </div>
          <div className="service-card">
            <h3>وصفات العلاج</h3>
            <p>تشخيص دقيق وصرف الأدوية المناسبة تحت إشراف طبي مباشر.</p>
          </div>
          <div className="service-card">
            <h3>متابعة الحالات المزمنة</h3>
            <p>متابعة دقيقة للحالات مثل السكري، الضغط، وأمراض القلب.</p>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2>قسم طب الأسنان</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>تنظيف الأسنان</h3>
            <p>تنظيف احترافي للأسنان وإزالة الجير للحفاظ على صحة الفم.</p>
          </div>
          <div className="service-card">
            <h3>تبييض الأسنان</h3>
            <p>تبييض الأسنان بتقنيات حديثة وآمنة دون ألم.</p>
          </div>
          <div className="service-card">
            <h3>التركيبات الثابتة والمتحركة</h3>
            <p>تركيبات عالية الجودة لاستعادة الشكل والوظيفة.</p>
          </div>
          <div className="service-card">
            <h3>تقويم الأسنان</h3>
            <p>علاج اعوجاج الأسنان والفك بأحدث أنواع التقويم.</p>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2>قسم طب الأطفال</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>رعاية حديثي الولادة</h3>
            <p>رعاية طبية دقيقة للمواليد منذ اللحظة الأولى.</p>
          </div>
          <div className="service-card">
            <h3>متابعة النمو والتطور</h3>
            <p>مراقبة النمو الذهني والجسدي للطفل بانتظام.</p>
          </div>
          <div className="service-card">
            <h3>التطعيمات</h3>
            <p>توفير جميع أنواع اللقاحات المعتمدة بجدول زمني منظم.</p>
          </div>
          <div className="service-card">
            <h3>علاج أمراض الأطفال</h3>
            <p>تشخيص وعلاج جميع الأمراض الشائعة عند الأطفال.</p>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2>قسم التحاليل الطبية</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>تحاليل الدم الشاملة</h3>
            <p>كشف دقيق لجميع مؤشرات الدم الحيوية.</p>
          </div>
          <div className="service-card">
            <h3>تحاليل السكري والكوليسترول</h3>
            <p>تحاليل دقيقة لمتابعة الأمراض المزمنة.</p>
          </div>
          <div className="service-card">
            <h3>تحاليل الهرمونات</h3>
            <p>تحاليل خاصة باضطرابات الغدة الدرقية والهرمونات.</p>
          </div>
          <div className="service-card">
            <h3>تحاليل ما قبل الزواج</h3>
            <p>مجموعة فحوصات شاملة لضمان سلامة الطرفين قبل الزواج.</p>
          </div>
        </div>
      </section>

      <section className="services-section note-section">
        <h2>لماذا تختارنا؟</h2>
        <ul>
          <li>طاقم طبي محترف ذو خبرة طويلة.</li>
          <li>أحدث التقنيات والأجهزة الطبية.</li>
          <li>بيئة مريحة وآمنة لجميع أفراد العائلة.</li>
          <li>أسعار مناسبة وجودة عالية.</li>
          <li>سهولة حجز المواعيد عبر الهاتف أو الموقع.</li>
        </ul>
      </section>
    </div>
  );
};

export default Services;
