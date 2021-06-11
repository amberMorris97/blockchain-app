import React from 'react';
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';

const NavBar = () => {

  return (
    <div id="nav">
      <Link activeClass="active"
      to="blockchain"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      isDynamic={true}>
      Blockchain Technology
      </Link>
      <Link activeClass="active"
      to="transactions"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      isDynamic={true}>
      Transactions
      </Link>
      <Link activeClass="active"
      to="mining"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      isDynamic={true}>
      Mining
      </Link>
      <Link activeClass="active"
      to="newblocks"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      isDynamic={true}>
      New Blocks
      </Link>
    </div>
  );
};

export default NavBar;

