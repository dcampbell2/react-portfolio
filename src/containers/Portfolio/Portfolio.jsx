import React from "react";

const Portfolio = (props) => {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-sm-8">
            <div class="jumbotron">
              <h1 class="display-4">Portfolio</h1>
              <hr class="my-4" />
              <div class="row images">
                <div class="col-sm-6">
                  <a
                    href="https://dcampbell2.github.io/covid-cost/"
                    target="_blank"
                  >
                    <img
                      src={props.image}
                      class="img-fluid covid-cost"
                      alt="Covid Cost Project-1"
                    />
                  </a>
                  <a
                    href="https://github.com/dcampbell2/covid-cost"
                    target="_blank"
                  >
                    <span class="text-justify">{props.name}</span>
                  </a>
                </div>
                <div class="col-sm-6">
                  <a
                    href="https://dcampbell2.github.io/password-generator/"
                    target="_blank"
                  >
                    <img
                      src="./assets/Images/Generate-Password.png"
                      class="img-fluid"
                      alt="Password Generator"
                    />
                  </a>
                  <a
                    href="https://github.com/dcampbell2/password-generator"
                    target="_blank"
                  >
                    <span class="text-justify">Password Generator Repo</span>
                  </a>
                </div>
                <div class="container">
                  <div class="row">
                    <div class="col-sm-6">
                      <a
                        href="https://dcampbell2.github.io/weather-search-dashboard/"
                        target="_blank"
                      >
                        <img
                          src="./assets/Images/weather-dashboard.png"
                          class="img-fluid"
                          alt="Weather Dashboard"
                        />
                      </a>
                      <a
                        href="https://github.com/dcampbell2/weather-search-dashboard"
                        target="_blank"
                      >
                        <span class="text-justify">Weather Dashboard Repo</span>
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
