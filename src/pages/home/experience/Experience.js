import React from 'react';
import './style.css';

export const Experience = () => {
  return (
    <div className="experience">
      <h1>Experience</h1>
      <div className="container-exp">
        <div className="row sub-experience-title md-experience-title">
          <div className="col-xl-8 col-md-12">
            <h1>Motorcycle spare parts website project</h1>
          </div>
          <div className="col-xl-4 col-md-12">
            <h1 className="title-float-right">5/2023 - Present</h1>
          </div>
        </div>
        <div className="sub-experience md-experience">
          <p>
            <br />
            <b>Member:</b> 01 <br />
            <b>Technical</b>: ReactJS, MongoDB, NodeJS <br />
            <b>Role:</b> Fullstacks <br />
            <b>Task:</b>
            <ul>
              <li>
                <b> UI:</b> homepage, product details, combo details, cart,
                payment, invoice, contact, admin page
              </li>
              <li>
                <b>API:</b> product type, product, product combo, user,
                registration, login
              </li>
            </ul>
          </p>
        </div>
        <div className="sub-experience-link">
          <b>
            Product link:
            <a href="https://phutungxemay.vercel.app/">PhuTungXeMay - Shop</a>
          </b>
        </div>
      </div>
      <div className="container-exp">
        <div className="row sub-experience-title md-experience-title">
          <div className="col-xl-4 col-md-12">
            <h1>TMA Binh Dinh Company</h1>
            <p>INTERN FULL-STACK</p>
          </div>
          <div className="col-xl-8 col-md-12">
            <h1 className="title-float-right">
              December 28, 2022 - March 18, 2023
            </h1>
          </div>
        </div>
        <div className="sub-experience md-experience">
          <p>
            <br />
            <b>Member:</b> 02 <br />
            <b>Technical</b>: ReactJS, MongoDB, NodeJS <br />
            <b>Role:</b> Fullstacks <br />
            <b>Task:</b>
            <ul>
              <li>Write DocAPI, draw Mock UI & Design database</li>
              <li>
                <b> UI:</b> Home page, shop, product details, cart, payment,
                invoice
              </li>
              <li>
                <b>API:</b> CRUD users, banners, type-products, products,
                comments, orders
              </li>
            </ul>
          </p>
        </div>
        <div className="sub-experience-link">
          <b>
            Product link:
            <a href="https://maizoshop.vercel.app">Maizo - Shop</a>
          </b>
          <b>
            Source code:
            <a href="https://github.com/sonnv1801/FinalProject-Inter-TMA.git">
              Git Maizo - Shop
            </a>
          </b>
        </div>
      </div>
      <div className="container-exp">
        <div className="row sub-experience-title md-experience-title">
          <div className="col-xl-8 col-md-12">
            <h1>FPT Software Company</h1>
            <p>INTERN FULL-STACK</p>
          </div>
          <div className="col-xl-4 col-md-12">
            <h1 className="title-float-right">
              July 4, 2022 - November 5, 2022
            </h1>
          </div>
        </div>
        <div className="sub-experience md-experience">
          <p>
            <br />
            <b>Member:</b> 04 <br />
            <b>Technical</b>: Java, SQL server
            <br />
            <b>Role:</b> Fullstacks <br />
            <b>Task:</b>
            <ul>
              <li>
                <b> UI:</b> home page, product details, shopping cart, register,
                login
              </li>
              <li>
                <b>API:</b> product type, product details, registration, login
              </li>
            </ul>
          </p>
        </div>
        <div className="sub-experience-link">
          <b>
            Link Product:
            <a href="/">Update late</a>
          </b>
          <b>
            Link GitHub:
            <a href="https://github.com/sonnv1801/Shop-Accessory.git">
              Git Accessory - Shop
            </a>
          </b>
        </div>
      </div>
    </div>
  );
};
