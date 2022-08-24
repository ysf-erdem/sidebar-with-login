import React, { useState, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import LoginForm from "./pages/components/LoginForm";

const Anasayfa = React.lazy(() => import("./pages/Anasayfa"));
const Profil = React.lazy(() => import("./pages/Profil"));
const Yap = React.lazy(() => import("./pages/Yap"));

function App() {
  const admin = {
    name: "admin",
    password: "123",
  };
  const [user, setUser] = useState({ name: "" });
  const Login = (details) => {
    console.log(details);
    if (details.name === admin.name && details.password === admin.password) {
      localStorage.setItem("Name", admin.name);
      setUser({
        name: details.name,
      });
      window.location.href = "/Anasayfa";
    } else {
      alert("Lütfen doğru bilgileri giriniz.");
    }
    console.log(user);
  };
  if (localStorage.length > 0) {
    return (
      <div>
        <Router>
          <Sidebar />
          <Suspense fallback={<p>yükleniyor... </p>}>
            <Routes>
              <Route path="/Login" element={<Login />} />
              <Route path="/Anasayfa" element={<Anasayfa />} />
              <Route path="/Profil" element={<Profil />} />
              <Route path="/Yap" element={<Yap />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    );
  } else {
    return <LoginForm Login={Login} />;
  }
}

export default App;
