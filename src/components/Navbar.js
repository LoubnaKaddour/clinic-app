// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* الشعار */}
        <div className="navbar-logo">
          <Link to="/">عيادتنا</Link>
        </div>

        {/* روابط القوائم */}
        <ul className="nav-links">
          <li><Link to="/">الرئيسية</Link></li>
          <li><Link to="/about">من نحن</Link></li>
          <li><Link to="/services">الخدمات</Link></li>
          <li><Link to="/programs">البرامج</Link></li>
          <li><Link to="/team">فريق العمل</Link></li>
          <li><Link to="/donations">التبرعات</Link></li>
          <li><Link to="/booking">احجز الآن</Link></li>
          <li><Link to="/contact">اتصل بنا</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

