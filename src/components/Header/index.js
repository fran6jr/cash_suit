import React from "react";
import { Link } from "react-router-dom";


const Header = ({ login }) => {
  return (
    <>
    <nav>
      <Link to="">[Cashsuit]</Link>
      <Link to="about">[About]</Link>
      <Link to="cart">[Cart]</Link>
      <Link to="contact">[Contact]</Link>
      <Link to="forum">[Forum]</Link>
    </nav>
      {login ?
        <>
          <nav>
            <Link to="profile">[Profile]</Link>
          </nav>
          <h1>Welcome {login.name}!</h1>
          <img src={login.image} style={{ width: "20" }} alt="image" />
        </> :
        <>
          <nav>
            <Link to="signup">[Signup]</Link>
            <Link to="login">[Login]</Link>
          </nav>
          <p>[Header]</p>
        </>
      }
    </>
  );
}

export default Header;