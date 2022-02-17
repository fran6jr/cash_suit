import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ login }) => {
  return (
    <>
      {login ?
        <nav>
          <Link to="blog">[Blog]</Link>
          <Link to="meet">[Meet]</Link>
        </nav> :
        <p>Not Logged In (Footer)</p>
      }
      <p>[Footer]</p>
      <nav>
        <Link to="products">[Products]</Link>
      </nav>
    </>
  );
}

export default Footer;