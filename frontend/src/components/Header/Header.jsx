import React from 'react';
import NavBar from './NavBar.jsx';
import { Link } from 'react-scroll';
import { Spline } from 'react-spline';
import SPLINE_SCENE from '../../blockchainanime/scene';

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
      <span
        className="blockchain-animation">      <Spline scene={SPLINE_SCENE} />
      </span>
      </Link>
      <NavBar />
    </div>
  );
};

export default Header;