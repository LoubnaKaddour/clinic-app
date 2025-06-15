// src/pages/ContactMessages.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

const ContactMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const q = query(collection(db, 'contactMessages'), orderBy('createdat', 'desc'));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(data);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des messages:", error);
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) return <p>جارٍ تحميل الرسائل...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📩 الرسائل المستلمة من الزوار</h2>
      {messages.length === 0 ? (
        <p>لا توجد رسائل بعد.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {messages.map(msg => (
            <li key={msg.id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem', borderRadius: '8px' }}>
              <p><strong>👤 الاسم:</strong> {msg.name}</p>
              <p><strong>📧 البريد:</strong> {msg.email}</p>
              <p><strong>📝 الرسالة:</strong> {msg.message}</p>
              <p><strong>📅 أُرسلت في:</strong> {msg.createdAt?.toDate().toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactMessages;
