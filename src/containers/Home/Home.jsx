import React from "react";
import "./Home.css"
import Me from "../../Images/me.jpg"

const Home = () => {
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

      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <div className="jumbotron">
              <h1 className="display-4">About Me</h1>
              <hr className="my-4" />
              <div className="row">
                <div className="col-sm-12">
                  <img
                    className="img-wrapper float-left pr-3"
                    src={Me}
                    alt="Damian Campbell"
                    style={{width: 250,
                    height: 300}}
                  />

                  <p className="text-wrap">
                    My name is Damian! I'm currently 24 years old and I work at
                    Salesforce as a Tier 2 Pardot Support Engineer. I started in
                    tech from a program called Year Up which really jumpstarted
                    my career from a young age and gave me the opportunity to be
                    where I am today. My hobbies include cars, videography,
                    church and video gaming. I recently started taking video
                    gaming a bit more serious since I'm home a lot now in these
                    new found times. I've begun exploring the possibilities of
                    live streaming with friends! Things I love to do in my down
                    time include watching anime, which I'm a huge fan of, and
                    recording videos to edit for fun. I'm currently enrolled in
                    the Georgia Tech bootcamp because I work with engineers ALL
                    DAY and I've actually become very close like family with
                    some of them. When I sat and watched them work in my down
                    times, when we were in the office, what they were doing
                    looked fun. I've always wanted to explore this journey and
                    achieve this milestone but fear always held me back when
                    hearing the horror stories of how hard it is to grasp the
                    understanding of Software Engineering. However, thanks to my
                    friends and staff here at GT I am more than equipped to
                    tackle this new career and explore new opportunities!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <span>© Copyright 2020 Damian Campbell</span>
      </footer>
    </div>
  );
};

export default Home;
