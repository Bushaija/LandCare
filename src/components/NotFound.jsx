import React from 'react';
import { Link } from 'react-router-dom';
import { astronaut, planet } from '../assets';

const NotFound = () => {
  return (
    <div>
      <div id="tsparticles"></div>
      <div className="denied__wrapper text-white">
          <h1>404</h1>
          <h3>LOST IN <span>SPACE</span> Landcare? Hmm, looks like that page doesn't exist.</h3>
          <img id="astronaut" src={astronaut} />
          <img id="planet" src={planet} />
          <Link to="/">
            <button className="denied__link text-white">Go Home</button></Link>
      </div>
    </div>
  )
}

export default NotFound