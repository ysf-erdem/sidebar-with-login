import React from "react";
import "./Pages.css";
import resim from "../resim.jpg";

function Profil() {
  return (
    <div className="background">
      <h1 className="Page_header">Profil</h1>
      <div className={"text"}>
        <p className="p">
          Diğer kullanıcıların sizi tanımasına fırsat vermek için burayı
          kullanabilirsiniz.buraya bir resim ekledim:
        </p>
        <img src={resim} alt="resim" />;
      </div>
    </div>
  );
}

export default Profil;
