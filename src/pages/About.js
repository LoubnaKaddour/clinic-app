// src/pages/About.js
import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-page">
      <section className="hero">
        <h1>مرحبًا بكم في عيادتنا</h1>
        <p>نهتم بصحتكم وراحتكم في كل لحظة</p>
      </section>

      <section className="about-section">
        <h2>نبذة عن العيادة</h2>
        <p>
          تأسست عيادتنا عام 2010 لتكون مركزًا رائدًا في تقديم الخدمات الطبية عالية الجودة،
          من خلال فريق متكامل من الأطباء والمتخصصين الذين يسعون دومًا إلى تحسين صحة وراحة المرضى.
        </p>
      </section>

      <section className="about-section">
        <h2>رسالتنا</h2>
        <p>تقديم رعاية صحية شاملة ومتميزة ترتكز على المريض، من خلال بيئة آمنة ومريحة.</p>
      </section>

      <section className="about-section">
        <h2>رؤيتنا</h2>
        <p>أن نكون الخيار الأول في المنطقة في مجال الرعاية الصحية، من خلال الابتكار المستمر والجودة الفائقة.</p>
      </section>

      <section className="about-section">
        <h2>قيمنا</h2>
        <ul>
          <li>الاحترام والإنسانية في التعامل</li>
          <li>الجودة والتميز</li>
          <li>الخصوصية والسرية</li>
          <li>الابتكار والتطوير</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>الأقسام الطبية في عيادتنا</h2>
        <div className="departments">
          <div className="card">
            <h3>طب الأسنان</h3>
            <p>توفير خدمات العناية بالأسنان، التركيبات، والتبييض.</p>
          </div>
          <div className="card">
            <h3>طب الأطفال</h3>
            <p>رعاية شاملة لصحة الأطفال، من الولادة حتى المراهقة.</p>
          </div>
          <div className="card">
            <h3>الطب العام</h3>
            <p>تشخيص الأمراض العامة ومتابعة العلاج مع أفضل الأطباء.</p>
          </div>
          <div className="card">
            <h3>التحاليل الطبية</h3>
            <p>مختبر مجهز بأحدث الأجهزة لإجراء جميع أنواع التحاليل.</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>فريقنا الطبي</h2>
        <div className="team">
          <div className="card">
            <h3>الدكتور أحمد منصور</h3>
            <p>أخصائي الطب العام - خبرة 15 سنة</p>
          </div>
          <div className="card">
            <h3>الدكتورة فاطمة بن عيسى</h3>
            <p>طبيبة أسنان - متخصصة في تقويم الأسنان</p>
          </div>
          <div className="card">
            <h3>الدكتور يوسف عبادي</h3>
            <p>أخصائي طب الأطفال - خبرة 10 سنوات</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>آراء مرضانا</h2>
        <blockquote>"عيادة ممتازة، المعاملة راقية والدكاترة محترفين جداً." - <span>أمينة ب.</span></blockquote>
        <blockquote>"تلقيت علاجًا سريعًا وفعّالًا. شكراً لكم على الرعاية." - <span>يوسف م.</span></blockquote>
        <blockquote>"عيادة نظيفة ومنظمة، أنصح بها بشدة." - <span>خالد ع.</span></blockquote>
      </section>

      <section className="about-section contact-info">
        <h2>معلومات التواصل</h2>
        <p><strong>العنوان:</strong> شارع الحرية، وسط المدينة، الجزائر العاصمة</p>
        <p><strong>الهاتف:</strong> +213-555-123456</p>
        <p><strong>البريد الإلكتروني:</strong> clinic@example.com</p>
        <p><strong>ساعات العمل:</strong> الأحد - الخميس: 08:00 صباحاً حتى 17:00 مساءً</p>
      </section>
    </div>
  );
};

export default About;

