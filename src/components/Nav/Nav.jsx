import React from 'react';

const Nav = () => {
    return (
        <div>
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a
          className="navbar-brand"
          className="nav justify-content-end"
          href="index.html"
        >
          Damian Campbell
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link active" href="index.html">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="portfolio.html">
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </nav>
        </div>
    );
};

export default Nav;