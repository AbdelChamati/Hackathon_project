import React from "react";
import "./Footer.css";
// import { Link } from "react-router-dom"
//import { BsMouse } from "react-icons/bs";
//import { BsInstagram } from "react-icons/bs";
//import { FaFacebookF } from "react-icons/fa";
// import { TiSocialDribbble } from "react-icons/ti";
//import { TiSocialYoutube } from "react-icons/ti";
// import { TiSocialGithub } from "react-icons/ti";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faFacebook } from "@fortawesome/free-brands-svg-icons"

// const icon = <FontAwesomeIcon icon={faFacebook} />

const Footer = () => {
  // return (
  //   <div id='footer' className='container footer-container'>
  //     <h1>M.A.D.S
  //       <a href="Main">
  //         <h2>
  //           <BsMouse />- scroll up-
  //         </h2>
  //       </a>
  //     </h1>
  //     <div className="social-links">
  //       <a href="https://Instagram.com">
  //         <BsInstagram className='social' />
  //       </a>
  //       <a href="https://facebook.com">
  //         <FaFacebookF className='social' />
  //       </a>
  //       {/* <a href="#a">
  //         <TiSocialDribbble className='social' />
  //       </a> */}
  //       <a href="https://youtube.com">
  //         <TiSocialYoutube className='social' />
  //       </a>
  //       {/* <a href="https://github.com">
  //         <TiSocialGithub className='social' />
  //       </a> */}

  //     </div>
  //     <div className='social-links'>
  //       <span>© 2022 All rights reserved.</span>
  //       {/* <span>Terms · Privacy Policy</span> */}
  //     </div>
  //   </div>
  // )

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>M.A.D.S</h4>
            <ul>
              <li>
                <a href="home">about us</a>
              </li>
              <li>
                <a href="home">our services</a>
              </li>
              <li>
                <a href="home">privacy policy</a>
              </li>
              <li>
                <a href="home">affiliate program</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <a href="home">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Career</h4>
            <ul>
              <li>
                <a href="home">Vacancies</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact us</h4>
            <ul>
              <li>
                <a href="../users/Subscribe.jsx">Form</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
