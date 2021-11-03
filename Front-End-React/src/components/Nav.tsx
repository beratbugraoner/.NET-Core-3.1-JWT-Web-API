import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" >Anasayfa</Link>
{/*   
    <span className="navbar-toggler-icon"></span> */}
    
    <div>
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item active" >
          <Link to ="/"className="nav-link "  href="#">Giriş Yap</Link>
        </li>
        <li className="nav-item active">
          <Link to="/register" className="nav-link "  href="#">Kayıt Ol</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
);

};

export default Nav;