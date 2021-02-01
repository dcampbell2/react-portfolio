import React from "react";

const Portfolio = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="jumbotron">
              <h1 className="display-4">Portfolio</h1>
              <hr className="my-4" />
              <div className="row images">
                <div className="col-sm-6">
                  <a
                    href="https://dcampbell2.github.io/covid-cost/"
                    target="_blank"
                  >
                    <img
                      src={props.image}
                      className="img-fluid covid-cost"
                      alt="Covid Cost Project-1"
                    />
                  </a>
                  <a
                    href="https://github.com/dcampbell2/covid-cost"
                    target="_blank"
                  >
                    <span className="text-justify">{props.name}</span>
                  </a>
                </div>
                <div className="col-sm-6">
                  <a
                    href="https://dcampbell2.github.io/password-generator/"
                    target="_blank"
                  >
                    <img
                      src="./assets/Images/Generate-Password.png"
                      className="img-fluid"
                      alt="Password Generator"
                    />
                  </a>
                  <a
                    href="https://github.com/dcampbell2/password-generator"
                    target="_blank"
                  >
                    <span className="text-justify">Password Generator Repo</span>
                  </a>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-6">
                      <a
                        href="https://dcampbell2.github.io/weather-search-dashboard/"
                        target="_blank"
                      >
                        <img
                          src="./assets/Images/weather-dashboard.png"
                          className="img-fluid"
                          alt="Weather Dashboard"
                        />
                      </a>
                      <a
                        href="https://github.com/dcampbell2/weather-search-dashboard"
                        target="_blank"
                      >
                        <span className="text-justify">Weather Dashboard Repo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
