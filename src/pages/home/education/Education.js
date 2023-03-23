import React from 'react';
import './style.css';

export const Education = () => {
  return (
    <div className="education">
      <h1>Education</h1>
      <div className="logo-uda">
        <img
          src="https://donga.edu.vn/portals/0/logo/c2971a90-9e31-4b00-a5f7-f1581310d7c3.svg"
          alt="..."
        />
      </div>
      <div className="sub-education">
        <div>
          <h5>2019-2023</h5>
        </div>
        <div className="infor-education">
          <h5>DONG A UNIVERSITY</h5>
          <p>GPA: 3.01 (2019 - 2023)</p>
          <p>Major: Software Technology</p>
        </div>
      </div>
    </div>
  );
};
