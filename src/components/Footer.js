import React from "react";

const Footer = () => {
  return (
    <footer>
      <div id="mediaDiv" className="row mt-5">
        <li className="col-3">
          <a
            href="https://www.facebook.com/olwen.wempe/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="socMedia"
              src="../assets/Images/Facebook_F_icon.svg"
              alt="facebook logo"
            />
          </a>
        </li>
        <li className="col-3">
          <a
            href="https://www.linkedin.com/in/olwen-wempe-6171b4108/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="socMedia"
              src="../assets/Images/LinkedIn_icon.svg"
              alt="linkedin logo"
            />
          </a>
        </li>
        <li className="col-3">
          <a
            href="https://www.instagram.com/wempe.olwen/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="socMedia"
              src="../assets/Images/Instagram_logo_2016.svg"
              alt="instagram logo"
            />
          </a>
        </li>
        <li className="col-3">
          <a
            href="https://github.com/OlwenWempe"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="socMedia bg-blue"
              src="../assets/Images/devLang/Octicons-mark-github.svg"
              alt="github logo"
            />
          </a>
        </li>
        <p className="col-12 text-center mt-3">Created with React</p>
      </div>
    </footer>
  );
};

export default Footer;
