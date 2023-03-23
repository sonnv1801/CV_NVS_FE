import React from 'react';
import './style.css';

export const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="sub-skills">
        <p>Front-end</p>
        <ul>
          <li>HTML/CSS, Javascript, Reactjs, Redux</li>
          <li>Boostrap, Material UI, Cloudinary</li>
        </ul>
      </div>
      <div className="sub-skills">
        <p>Back-end</p>
        <ul>
          <li>Nodejs, Mongoose</li>
        </ul>
      </div>
      <div className="sub-skills">
        <p>Tools</p>
        <ul>
          <li>Github, Trello</li>
        </ul>
      </div>
      <div className="sub-skills">
        <p>English</p>
        <ul>
          <li>Read documents in English</li>
        </ul>
      </div>
    </div>
  );
};
