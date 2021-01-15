import React from 'react';

const Header = () => (
	<nav className="navbar" role="navigation" aria-label="main navigation">
	  <div className="navbar-brand">
	    <a className="navbar-item" href="https://warungpintar.co.id">
	      <img src={require('../images/pokeball.svg').default} width="112" height="28" alt="Pokemon Pintar" />
	      <strong>Pokemon Pintar</strong>
	    </a>

	    <button className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
	      <span aria-hidden="true"></span>
	      <span aria-hidden="true"></span>
	      <span aria-hidden="true"></span>
	    </button>
	  </div>
	</nav>
);

export default Header;
