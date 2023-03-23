import React from 'react';
import './style.css';

export const Experience = () => {
  return (
    <div className="experience">
      <h1>Experience</h1>
      <div className="container-exp">
        <div className="row sub-experience-title md-experience-title">
          <div className="col-xl-6 col-md-12">
            <h1>
              TMA Binh Dinh Company
              <img
                src="https://images.careerbuilder.vn/employer_folders/lot2/4642/111600tma-logo.png"
                alt="tma"
              />
            </h1>
            <p>INTERN FULL-STACK</p>
          </div>
          <div className="col-xl-6 col-md-12">
            <h1>December 28, 2022 - March 18, 2023</h1>
          </div>
        </div>
        <div className="sub-experience md-experience">
          <p>
            Internship at TMA Binh Dinh Company for 3 months. Learn some
            knowledge like Reactjs, Redux, Nodejs, and Mongoose. Use some
            Material Ui, Bootstrap & Cloudinary libraries. And did a project to
            sell phones, applying the above knowledge
          </p>
        </div>
        <div className="sub-experience-link">
          <b>
            Link Product:{' '}
            <a href="https://maizoshop.vercel.app">Maizo - Shop</a>
          </b>
          <b>
            Link GitHub:
            <a href="https://github.com/sonnv1801/FinalProject-Inter-TMA/tree/develop">
              Git Maizo - Shop
            </a>
          </b>
        </div>
      </div>
      <div className="container-exp">
        <div className="row sub-experience-title md-experience-title">
          <div className="col-xl-6 col-md-12">
            <h1>
              FPT Software Company
              <img
                src="https://www.fpt-software.com/wp-content/uploads/sites/2/2018/03/logo_white.svg"
                alt="tma"
              />
            </h1>
            <p>INTERN FRONT-END</p>
          </div>
          <div className="col-xl-6 col-md-12">
            <h1>July 4, 2022 - August 5, 2022</h1>
          </div>
        </div>
        <div className="sub-experience md-experience">
          <p>
            Internship at FPT Software company for 1 month. Learn some knowledge
            like Reactjs, Redux, Nodejs, and Mongoose. Use some Material Ui,
            Bootstrap & Cloudinary libraries.
          </p>
        </div>
        <div className="sub-experience-link">
          <b>
            Link Product:
            <a href="/">Update late</a>
          </b>
          <b>
            Link GitHub:
            <a href="/">Update late</a>
          </b>
        </div>
      </div>
    </div>
  );
};
