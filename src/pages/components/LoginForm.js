import React from "react";
import { useState } from "react";
import "./LoginForm.css";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <form id="grad1" onSubmit={submitHandler}>
      <div className="log">
        <h2 className="login">Hoşgeldiniz!</h2>
        {error !== "" ? <div>{error}</div> : ""}
        <div className="login">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Kullanıcı adı"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>
        <div className="login">
          <input
            type="password"
            password="password"
            id="password"
            placeholder="Şifre"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <input className="button" type="submit" value="Giriş" />
      </div>
    </form>
  );
}

export default LoginForm;
