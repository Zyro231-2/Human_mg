import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo">
          <img src="/images/hacktoberfest-logo.png" alt="Hacktoberfest Logo" />
        </div>
        <div className="links">
          <a href="https://hacktoberfest.digitalocean.com/" target="_blank" rel="noopener noreferrer">
            Hacktoberfest
          </a>
          <a href="https://github.com/Zyro231-2/Human_mg" target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </div>
        <div className="contact">
          <p>Contact us:</p>
          <a href="https://github.com/Zyro231-2">Zyro231-2</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
