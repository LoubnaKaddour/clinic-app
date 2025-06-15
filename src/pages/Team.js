// src/pages/Team.js
import React from "react";
import "../styles/Team.css";

const teamMembers = [
  {
    name: "الدكتور أحمد منصور",
    role: "أخصائي الطب العام",
    experience: "15 سنة من الخبرة",
    image: "/images/doctor1.jpg",
  },
  {
    name: "الدكتورة فاطمة بن عيسى",
    role: "أخصائية طب الأسنان",
    experience: "10 سنوات في تقويم الأسنان",
    image: "/images/doctor2.jpg",
  },
  {
    name: "الدكتور يوسف عبادي",
    role: "أخصائي طب الأطفال",
    experience: "12 سنة من الرعاية للأطفال",
    image: "/images/doctor3.jpg",
  },
  {
    name: "الدكتورة نوال حاجي",
    role: "أخصائية الأمراض الجلدية",
    experience: "8 سنوات من الخبرة",
    image: "/images/doctor4.jpg",
  },
];

const Team = () => {
  return (
    <div className="team-page">
      <header className="team-header">
        <h1>فريقنا الطبي</h1>
        <p>نخبة من الأطباء ذوي الكفاءة العالية والقلوب الرحيمة</p>
      </header>

      <section className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} />
            <div className="team-info">
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="experience">{member.experience}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Team;

