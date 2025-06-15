// src/pages/Signup.js

import React, { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // حفظ بيانات المستخدم في Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: name,
        email: email,
        createdAt: new Date()
      });

      alert("تم إنشاء الحساب بنجاح");
      navigate("/users"); // انتقال لصفحة عرض المستخدمين
    } catch (error) {
      alert("خطأ: " + error.message);
    }
  };

  return (
    <div>
      <h2>تسجيل مستخدم جديد</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="الاسم الكامل"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">تسجيل</button>
      </form>
    </div>
  );
}

export default Signup;
