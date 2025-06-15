import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // إعادة التوجيه إلى الصفحة الرئيسية
    } catch (err) {
      setError("فشل تسجيل الدخول. تحقق من البريد وكلمة المرور.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>تسجيل الدخول</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>دخول</button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "60px auto",
    padding: "30px",
    borderRadius: "12px",
    backgroundColor: "#f1f1f1",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    textAlign: "center"
  },
  title: {
    marginBottom: "20px",
    fontSize: "24px"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  input: {
    marginBottom: "15px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  error: {
    color: "red",
    marginTop: "10px"
  }
};

export default Login;
