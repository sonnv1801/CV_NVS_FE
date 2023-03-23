import React from 'react';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import './style.css';
export const Awards = () => {
  return (
    <div className="awards">
      <h1>AWARDS & CERTIFICATIONS</h1>
      <div className="sub-awards md-sub-awards">
        <ul>
          <li>
            <i>
              <EmojiEventsIcon />
            </i>
            Certificate of excellent students 2021 - 2022
          </li>
          <li>
            <i>
              <EmojiEventsIcon />
            </i>
            Certificate of Internship FPT Software Co., Ltd
          </li>
          <li>
            <i>
              <EmojiEventsIcon />
            </i>
            Certificate of Internship at TMA Binh Dinh Company
          </li>
        </ul>
      </div>
    </div>
  );
};
