// src/pages/Users.js
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Users = () => {
  const [users, setUsers] = useState([]);

  // تحميل بيانات المستخدمين من Firestore
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const usersData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setUsers(usersData);
      } catch (error) {
        console.error("خطأ أثناء تحميل المستخدمين:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>قائمة المستخدمين</h2>
      <div style={styles.userList}>
        {users.map(user => (
          <div key={user.id} style={styles.userCard}>
            <h3>{user.name || "مستخدم بدون اسم"}</h3>
            <p><strong>البريد:</strong> {user.email}</p>
            <p><strong>UID:</strong> {user.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f0f8ff",
    minHeight: "100vh"
  },
  title: {
    fontSize: "28px",
    textAlign: "center",
    marginBottom: "20px",
    color: "#333"
  },
  userList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px"
  },
  userCard: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  }
};

export default Users;
