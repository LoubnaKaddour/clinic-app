import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Donations from "./pages/Donations";
import TawkMessenger from "./components/TawkMessenger";
import Programs from './pages/Programs';
import ContactMessages from './pages/ContactMessages';
import MessagesList from "./pages/MessagesList";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        {/* الشريط العلوي */}
        <nav className="navbar">
          <div className="container">
            <h1 className="logo">عيادتنا</h1>
            <ul className="nav-links">
              <li><Link to="/">الرئيسية</Link></li>
              <li><Link to="/about">من نحن</Link></li>
              <li><Link to="/services">الخدمات</Link></li>
              <li><Link to="/programs">البرامج</Link></li>
              <li><Link to="/team">فريق العمل</Link></li>
              <li><Link to="/donations">التبرعات</Link></li>
              <li><Link to="/contact">اتصل بنا</Link></li>
              <li><Link to="/messages">📬 عرض الرسائل</Link></li>
              <li><Link to="/login">تسجيل الدخول</Link></li>
            </ul>
          </div>
        </nav>

        {/* محتوى الصفحات */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/team" element={<Team />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/messages" element={<MessagesList />} />
            <Route path="/messages/details" element={<ContactMessages />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>

        {/* تذييل الموقع */}
        <footer className="footer">
          <div className="container">
            <p>© 2025 عيادتنا - جميع الحقوق محفوظة</p>
          </div>
        </footer>

        {/* مكون Tawk.to للمحادثة */}
        <TawkMessenger />
      </div>
    </Router>
  );
}

export default App;
