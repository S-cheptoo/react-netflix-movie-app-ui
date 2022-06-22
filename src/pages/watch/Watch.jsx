import { ArrowBackOutlined } from '@material-ui/icons';
import React from 'react';
import "./watch.scss";

const Watch = () => {
  return (
      <div className="watch">
          <div className="back">
              <ArrowBackOutlined />
              Home
          </div>
          <video className="video" autoPlay progress controls src=" "/>
    </div>
  )
}

export default Watch