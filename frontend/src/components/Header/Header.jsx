import React from 'react';
import NavBar from './NavBar.jsx';
import { Link } from 'react-scroll';

const Header = () => {

  return (
    <div id="header">
      <Link activeClass="active"
      to="main"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      isDynamic={true}>
      Understanding Blockchains
      </Link>
      <NavBar />
    </div>
  );
};

export default Header;