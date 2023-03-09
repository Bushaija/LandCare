import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Map, {Marker, Popup} from 'react-map-gl';
import { houses } from '../constants';
import { home } from '../assets';

const REACT_APP_MAPBOX_TOKEN='pk.eyJ1Ijoicml3YS0xMSIsImEiOiJjbGVjeHVheGQwMWsxM29teDU2d3ZxZ2t2In0._hvy4DkLh0XTPbTuOnH95A';
const mapStyles = "mapbox://styles/riwa-11/clezjauoa001o01pbs308hg85";



const AllPropertiesMap = () => {
//   const { id } = useParams();
//   const house = houses.find(house => house.id === id);

  const [ viewport, setViewpoert ] = useState({
    "latitude": -1.967760,
    "longitude": 30.011104,
    zoom: 10,
  });

  const [ selectedPark, setSelectedPark ] = useState(null);
  
  return (
    <div>
      <Map
      {...viewport}
      mapboxAccessToken={REACT_APP_MAPBOX_TOKEN}
      style={{
        width: "80vw",
        height: "500px",
        padding:"4px",
        border:"2px solid orange",
        borderRadius: "10px",
      }}
      onViewportChange = {
        viewport => {
          setViewpoert(viewport)
        }
      }

      mapStyle={mapStyles}
     >
      {
        houses.map(house => (
            <Marker
                key={house.id}
                latitude={house.latitude}
                longitude={house.longitude}
            >
                <button
                onClick={e => {
                e.preventDefault();
                setSelectedPark(house);
                }}
                >
                <img src={home} alt="home marker" className='w-8 h-8' />
                </button>
            </Marker>
        ))
      }
      {
        selectedPark ? (
          <Popup
            latitude={selectedPark.latitude}
            longitude={selectedPark.longitude}
          >
            <div>
              <h2>title</h2>
              <p>description</p>
              
            </div>
          </Popup>
        ): null
      }
     </Map>
    </div>
  )
}

export default AllPropertiesMap