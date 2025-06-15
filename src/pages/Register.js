import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        fullName,
        email,
        createdAt: new Date()
      });

      alert('تم التسجيل بنجاح!');
      navigate('/login');
    } catch (error) {
      console.error('خطأ في التسجيل:', error.message);
      alert('حدث خطأ أثناء التسجيل. حاول مرة أخرى.');
    }
  };

  return (
    <div className="register-page" style={{ padding: 20 }}>
      <h2>تسجيل حساب جديد</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="الاسم الكامل" value={fullName} onChange={(e) => setFullName(e.target.value)} required /><br />
        <input type="email" placeholder="البريد الإلكتروني" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
        <input type="password" placeholder="كلمة المرور" value={password} onChange={(e) => setPassword(e.target.value)} required /><br />
        <button type="submit">تسجيل</button>
      </form>
    </div>
  );
};

export default Register;
