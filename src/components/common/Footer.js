import React from 'react';

const Footer = () =>
  (<footer className="page-footer blue-grey darken-4">
    <div className="container teal-text">
      <div className="col s6">
        <h5>A PES University Project</h5>
        <h4>
					Creators :  <strong>Rishab K S <br/>Pranav M R<br/>Raghavendra L</strong>
        </h4>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
        <a
          href="https://github.com/Rishab2707/Spider-Tech"
          target="_blank"
          className="teal-text text-lighten-4"
          rel="noreferrer noopener"
        >
					Github /
				</a>
        <a
          href="https://heroku.com"
          target="_blank"
          className="teal-text text-lighten-4"
          rel="noreferrer noopener"
        >
					Heroku (used for deployment) /
				</a>
        <a
          href="https://www.freecodecamp.com/ddcreationstudios"
          target="_blank"
          className="teal-text text-lighten-4"
          rel="noreferrer noopener"
        >
					FreeCodeCamp (reference website) /
				</a>
        <a
          href="https://pesuuniversity.com"
          target="_blank"
          className="teal-text text-lighten-4"
          rel="noreferrer noopener"
        >
					PES University /
				</a>
        </div>
    </div>
  </footer>);

export default Footer;
