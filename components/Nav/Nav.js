import React from 'react';
import Link from '../Link';

function Nav() {
  return (
        <nav className="navbar fixed-top navbar-toggleable-md navbar-inverse bg-inverse">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarExample" aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="container">
                <a className="navbar-brand" href="/">rgimmy.com</a>
                <div className="collapse navbar-collapse" id="navbarExample">
                </div>
            </div>
        </nav>
  );
}

export default Nav;
