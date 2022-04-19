import React from "react";
import { Link } from 'react-router-dom';
function Navbar({onClickProfile, onLogoClick})   {

  
    return (
      <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
      <Link to={"postlist"} onClick={() => { onLogoClick();  }} className="navbar-brand fs-1 fw-bold btn btn-link" >
        <span className="glyphicon glyphicon-flash logo " ></span>
        THREE PICS
      </Link>
      <Link  to={"profile"}  className="btn btn-link"  onClick={() => {
        onClickProfile(); 
      } } > <span className="glyphicon glyphicon-user logo "></span> </Link>
      
    </div>
  
  </nav>
  
    );
  }

  export default Navbar;