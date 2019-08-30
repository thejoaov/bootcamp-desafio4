import React from "react";
import logo from "../assets/logo.png";
export default function Navbar() {
  return (
    <header>
      <nav>
        <img src={logo} />
        <div>
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}
