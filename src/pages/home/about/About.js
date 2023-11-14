import React from 'react';
import './style.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

export const About = () => {
  return (
    <div className="about sm-about">
      <div className="sub-about-infor sm-about-infor">
        <div className="infor">
          <h1>Nguyen Van Son</h1>
          <h2>FRONTEND WEB DEVELOPER</h2>
        </div>
        <ul>
          <li>
            <b>
              <LocalPhoneIcon />
            </b>
            <p>
              <a href="tel:0375521434">+84 3755 213 34</a>
            </p>
          </li>
          <li>
            <b>
              <EmailIcon />
            </b>
            <p>
              <a href="mailto:nvs.dev.vn@gmail.com">nvs.dev.vn@gmail.com</a>
            </p>
          </li>
          <li>
            <b>
              <PictureAsPdfIcon />
            </b>
            <p>
              <a href="https://drive.google.com/file/d/1I74I_UrlkVg4Y8pbVs-qOAvZZr8COjKY/view?usp=sharing ">
                Link CV Online
              </a>
            </p>
          </li>
          <li>
            <b>
              <HomeIcon />
            </b>
            <p>Nghia Trung - Tu Nghia - Quang Ngai</p>
          </li>
        </ul>
      </div>
      <div className="sub-about-sumary md-about-sumary sm-about-sumary">
        <p>
          Perseverance and eager to learn are two words that describe me. With
          the desire to learn and accumulate useful experiences to become a
          practical software development engineer, bringing many valuable
          products to your company. I am willing to learn new technologies to
          apply your company's product.
        </p>
      </div>
      <div className="sub-about-contact md-about-contact sm-about-contact">
        <div className="contact-me">
          <a href="https://www.facebook.com/profile.php?id=100013919431514">
            <FacebookIcon />
          </a>
        </div>
        <div className="contact-me">
          <a href="https://www.youtube.com/channel/UCr2BxKRWiHS5n2jwoabrUag">
            <YouTubeIcon />
          </a>
        </div>
        <div className="contact-me">
          <a href="https://github.com/sonnv1801">
            <GitHubIcon />
          </a>
        </div>
        <div className="contact-me">
          <a href="/">
            <WhatsAppIcon />
          </a>
        </div>
      </div>
    </div>
  );
};
