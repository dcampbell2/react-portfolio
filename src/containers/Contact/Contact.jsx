import React from "react";
import "../../containers/Home/Home.css"

const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-7">
            <div className="jumbotron">
              <h1 className="display-4">Contact</h1>
              <hr className="my-4" />
              <div className="row">
                <div className="col-sm-7">
                  <form>
                    <div className="row">
                      <div className="col-sm-12">
                        <label>Email: damian.campbell001@gmail.com</label>
                      </div>
                      <div className="col-sm-12">
                        <label>Cell: 770-298-3241</label>
                      </div>
                      <div className="col-sm-12">
                        <label>
                          Take a look at my
                          <a
                            href="assets/Files/DamianR._Campbell_Resume.PDF"
                            download
                          >
                            {" "}
                            Resume
                          </a>
                          !
                        </label>
                      </div>
                      <div className="col-sm-12">
                        <label>
                          Connect with me on
                          <a
                            href="https://www.linkedin.com/in/damian-campbell-8a707612b/"
                            target="_blank"
                          >
                            {" "}
                            LinkedIn
                          </a>
                          !
                        </label>
                      </div>
                    </div>
                  </form>
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

export default Contact;
