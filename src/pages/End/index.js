import React from 'react';
import ReactPlayer from "react-player";

import './styles.css';

export default function Question(){  
  return (
    <div className="end-container">
      <ReactPlayer
        url="https://youtu.be/qeAtn_iXt_8"
      />
    </div>
  );
}