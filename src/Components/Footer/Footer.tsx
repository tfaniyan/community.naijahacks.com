import * as React from "react";
import twitter from "../../img/twitter.png";
import instagram from "../../img/instagram.png";
import facebook from "../../img/facebook.png";
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="">
        <div className="row">
          <div className="col-md-4">
            <h4 className="brand-name">NaijaHacks</h4>
          </div>
          <div className="col-md-8">
            <ul className="nav navbar-nav navbar-right white">
              <li>
                <a href="#">About</a>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Services <span className="caret" />
                </a>
                <ul className="dropdown-menu purple">
                  <li>
                    <a href="#">Our service #1</a>
                  </li>
                  <li>
                    <a href="#">Our service #2</a>
                  </li>
                  <li>
                    <a href="#">Our service #3</a>
                  </li>
                  <li role="separator" className="divider" />
                  <li>
                    <a href="#">Our special service</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li id="spacer">
                <span className="spacer">|</span>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
             
                  <button className="btn btn-default get-started-btn">
                    GET STARTED
                  </button>
               
              </li>
            </ul>
          </div>
        </div>

        <br />
        <hr />
        <br />

        <div className="row">
          <div className="col-md-2 col-xs-6">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-md-10 col-xs-6">
            <p id="footer-icons">
              <a href="https://twitter.com/" target="_blank">
                <img src={twitter} className="icon" />
              </a>
              <a href="https://facebook.com/" target="_blank">
                <img src={instagram} className="icon" />
              </a>
              <a href="https://github.com/" target="_blank">
                <img src={facebook} className="icon" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
