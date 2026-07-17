import React from "react";

function Sidebar() {
  return (
    <aside
      id="header"
      className="header d-flex flex-column justify-content-center"
    >
      <div className="d-flex flex-column align-items-center text-center px-3 py-4">
        <div className="profile-img mb-3">
          <img src="/images/profile.jpg" alt="Kan Sokhavathana" />
        </div>

        <h1 className="mb-3">Kan Sokhavathana</h1>

        <div className="social-links mt-2 mb-4">
          <a href="#" aria-label="Twitter">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="#" aria-label="Facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" aria-label="Skype">
            <i className="bi bi-skype"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

        <nav id="navbar" className="navmenu">
          <ul className="list-unstyled w-100">
            <li className="nav-item">
              <a href="#hero" className="nav-link active">
                <i className="bi bi-house navicon"></i>
                <span>Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                <i className="bi bi-person navicon"></i>
                <span>About</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#resume" className="nav-link">
                <i className="bi bi-file-earmark-text navicon"></i>
                <span>Resume</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">
                <i className="bi bi-images navicon"></i>
                <span>Portfolio</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">
                <i className="bi bi-hdd-stack navicon"></i>
                <span>Services</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                <i className="bi bi-envelope navicon"></i>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
