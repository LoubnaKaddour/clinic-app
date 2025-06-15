// src/firebase.js

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// إعدادات Firebase الخاصة بمشروعك
const firebaseConfig = {
  apiKey: "AIzaSyAe1JNQufvVTPxDhDLE7OiC7zNdBcTGEPA",
  authDomain: "clinic-app-fe937.firebaseapp.com",
  projectId: "clinic-app-fe937",
  storageBucket: "clinic-app-fe937.appspot.com",
  messagingSenderId: "784696495433",
  appId: "1:784696495433:web:c2df03428f19bf4ccc1e98",
  measurementId: "G-TD7DG9NSMY"
};

// ✅ تهيئة التطبيق مرة واحدة فقط
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// 🔐 المصادقة (Authentication)
const auth = getAuth(app);

// 🗃️ قاعدة البيانات (Firestore)
const db = getFirestore(app);

// 🚀 التصدير
export { app, auth, db };
