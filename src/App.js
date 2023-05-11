import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import ContactFormPopup from "./ContactFormPopup";

function App() {
  return (
    <div className="App">
      <div className="yeo-slogan">
        <div className="container yeo-header">
          <div className="columns">
            <div className="column col-12">
              <header className="navbar">
                <section className="navbar-section">
                  <a className="navbar-brand logo" href="./">
                    <img className="logo-img" src="./images/logo.svg" alt="" />
                    <span>Design Space</span>
                  </a>
                </section>
                <section className="navbar-section hide-sm">
                  <a className="btn btn-link" href="#we-do">
                    What we do
                  </a>
                  <a className="btn btn-link" href="#we-work">
                    How we work
                  </a>
                  <a className="btn btn-link" href="#price">
                    Pricing
                  </a>
                  <a className="btn btn-link" href="#team">
                    Our Team
                  </a>
                  <a
                    className="btn btn-primary btn-hire-me contact-us"
                    onClick={openContactPopup}
                    href="#"
                  >
                    Contact Us
                  </a>
                </section>
              </header>
            </div>
          </div>
        </div>
        <div className="container slogan">
          <div className="columns">
            <div className="column col-7 col-sm-12">
              <div className="slogan-content">
                <h1>
                  <span className="slogan-bold">Design UI</span>
                  <span className="slogan-bold">Ilustrations</span>
                  <span className="slogan-bold">Consultant Services</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a
                  className="btn btn-primary btn-lg btn-start"
                  target="_blank"
                  href="#y"
                >
                  Start a project today
                </a>
              </div>
            </div>
            <div className="column col-5 hide-sm">
              <img
                className="slogan-img"
                src="./images/yeo-feature-1.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="yeo-do" id="we-do">
        <div className="container yeo-body">
          <div className="columns">
            <div className="column col-12">
              <h2 className="feature-title">What We Do</h2>
            </div>
            <div className="column col-4 col-sm-12">
              <div className="yeo-do-content">
                <img src="./images/what-we-do-1.svg" alt="" />
                <h3>Interface Design</h3>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </p>
                <a href="">Learn more</a>
              </div>
            </div>
            <div className="column col-4 col-sm-12">
              <div className="yeo-do-content">
                <img src="./images/what-we-do-2.svg" alt="" />
                <h3>Ilustrations</h3>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit
                </p>
                <a href="">Learn more</a>
              </div>
            </div>
            <div className="column col-4 col-sm-12">
              <div className="yeo-do-content">
                <img src="./images/what-we-do-3.svg" alt="" />
                <h3>Development Consulting</h3>
                <p>
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit esse quam nihil molestiae consequatur
                </p>
                <a href="">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="yeo-work" id="we-work">
        <div className="container yeo-body">
          <div className="columns">
            <div className="column col-12 col-sm-12">
              <h2 className="feature-title">How We Work</h2>
            </div>
            <div className="column col-10 col-sm-12 centered">
              <h2 className="yeo-work-feature">
                We provide{" "}
                <span className="yeo-work-feature-bold">
                  high-quality design
                </span>{" "}
                and create <br />
                <span className="yeo-work-feature-bold">
                  impressive visual solutions
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="yeo-price" id="price">
        <div className="container yeo-body  col-sm-12">
          <div className="columns">
            <div className="column col-4 col-sm-12">
              <div className="panel">
                <div className="panel-header">
                  <div className="panel-title">
                    <span>PRO</span>
                  </div>
                </div>
                <div className="panel-body">
                  <p>
                    <span className="price">$2500 </span>
                    <span>/ month</span>
                  </p>
                  <ul>
                    <li>
                      <strong>10</strong> billable hours included per month.
                    </li>
                    <li>
                      Billable hourly rate of <strong>$300</strong> after the
                      included 10 hours are utilized.
                    </li>
                    <li>24/7/365 on-call and 99.9% SLA</li>
                    <li>Communication via ticketing system and e-mail.</li>
                  </ul>
                </div>
                <div className="panel-footer">
                  <button
                    className="btn btn-primary btn-price contact-us"
                    onClick={openContactPopup}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
            <div className="column col-4 col-sm-12">
              <div className="panel">
                <div className="panel-header">
                  <div className="panel-title">
                    <span>PREMIUM</span>
                  </div>
                </div>
                <div className="panel-body">
                  <p>
                    <span className="price">$5000 </span>
                    <span>/ month</span>
                  </p>
                  <ul>
                    <li>
                      <strong>10</strong> billable hours included per month.
                    </li>
                    <li>
                      Billable hourly rate of <strong>$300</strong> after the
                      included 10 hours are utilized.
                    </li>
                    <li>24/7/365 on-call and 99.9% SLA</li>
                    <li>Communication via ticketing system and e-mail.</li>
                  </ul>
                </div>
                <div className="panel-footer">
                  <button
                    className="btn btn-primary btn-price contact-us"
                    onClick={openContactPopup}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
            <div className="column col-4 col-sm-12">
              <div className="panel">
                <div className="panel-header">
                  <div className="panel-title">
                    <span>ENTERPRISE</span>
                  </div>
                </div>
                <div className="panel-body">
                  <p>
                    <span className="price">$15000 </span>
                    <span>/ month</span>
                  </p>
                  <ul>
                    <li>
                      <strong>10</strong> billable hours included per month.
                    </li>
                    <li>
                      Billable hourly rate of <strong>$300</strong> after the
                      included 10 hours are utilized.
                    </li>
                    <li>24/7/365 on-call and 99.9% SLA</li>
                    <li>Communication via ticketing system and e-mail.</li>
                  </ul>
                </div>
                <div className="panel-footer">
                  <button
                    className="btn btn-primary btn-price contact-us"
                    onClick={openContactPopup}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="yeo-team" id="team">
        <div className="container yeo-body">
          <div className="columns">
            <div className="column col-12">
              <h2 className="feature-title">Meet Our Team</h2>
            </div>
            <div className="column col-4 col-sm-12">
              <a href="">
                <img className="s-circle" src="./images/team-1.jpg" alt="" />
              </a>
              <a href="#">
                <span className="name">John Doe</span>
              </a>
              <span className="title">Ilustrator</span>
            </div>
            <div className="column col-4 col-sm-12">
              <a href="">
                <img className="s-circle" src="./images/team-2.jpg" alt="" />
              </a>
              <a href="#">
                <span className="name">Tinh Nguyen</span>
              </a>
              <span className="title">Designer</span>
            </div>
            <div className="column col-4 col-sm-12">
              <a href="">
                <img className="s-circle" src="./images/team-3.jpg" alt="" />
              </a>
              <a href="#">
                <span className="name">Maria Oto</span>
              </a>
              <span className="title">Development Consultant</span>
            </div>
          </div>
        </div>
      </div>
      <div className="yeo-open-source">
        <div className="container yeo-body">
          <div className="columns">
            <div className="column col-12">
              <h2 className="feature-title">We love Open Source</h2>
            </div>
            <div className="column col-10 centered col-sm-12">
              <img
                className="open-source-img"
                src="./images/open-source.svg"
                alt=""
              />
              <h2 className="open-source-feature">
                We're making
                <br />
                Open Source Design
              </h2>
              <a href="#" className="btn btn-lg btn-open-source">
                Follow us on Dribbble
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="yeo-footer">
        <div className="container">
          <div className="columns">
            <div className="column col-3 col-sm-6">
              <div className="yeo-footer-content">
                <h4>Services</h4>
                <ul className="nav">
                  <li className="nav-item">
                    <a href="#">Ilustrator</a>
                  </li>
                  <li className="nav-item">
                    <a href="#">Design</a>
                  </li>
                  <li className="nav-item">
                    <a href="#">Consultant</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column col-3 col-sm-6">
              <div className="yeo-footer-content">
                <h4>Clients</h4>
                <ul className="nav">
                  <li className="nav-item">
                    <a href="#">Lapa Ninja</a>
                  </li>
                  <li className="nav-item">
                    <a href="#">Noty IM</a>
                  </li>
                  <li className="nav-item">
                    <a href="#">Yeo Space</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column col-3 col-sm-6">
              <div className="yeo-footer-content">
                <h4>Contact Us</h4>
                <ul className="nav">
                  <li className="nav-item">
                    <a href="#">contact@thesvg.company</a>
                  </li>
                  <li className="nav-item">
                    <a href="#">Twitter</a>
                  </li>
                  <li className="nav-item">
                    <a href="#">Dribbble</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="popup-container"></div>
    </div>
  );
}

function openContactPopup() {
  const popupContainer = document.getElementById("popup-container");
  popupContainer.classList.add("active");
  ReactDOM.createRoot(popupContainer).render(<ContactFormPopup />);
}

export default App;
