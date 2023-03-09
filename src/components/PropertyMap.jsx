import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Map, {Marker, Popup} from 'react-map-gl';
import { houses } from '../constants';
import { home } from '../assets';

const REACT_APP_MAPBOX_TOKEN='pk.eyJ1Ijoicml3YS0xMSIsImEiOiJjbGVjeHVheGQwMWsxM29teDU2d3ZxZ2t2In0._hvy4DkLh0XTPbTuOnH95A';
const mapStyles = "mapbox://styles/riwa-11/clezjauoa001o01pbs308hg85";



const propertyMap = () => {
  const { id } = useParams();
  const house = houses.find(house => house.id === id);

  const [ viewport, setViewpoert ] = useState({
    latitude: house.latitude,
    longitude: house.longitude,
    zoom: 12,
  });

  const [ selectedPark, setSelectedPark ] = useState(null);
  useEffect(() => {
    const listener = e => {
      if(e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    }
  }, []);
  
  return (
    <div>
      <Map
      {...viewport}
      mapboxAccessToken={REACT_APP_MAPBOX_TOKEN}
      style={{
        width: "80vw",
        height: "450px",
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
      <Marker
        latitude={viewport.latitude}
        longitude={viewport.longitude}
      >
        <button
        onClick={(e) => {
          e.preventDefault();
          setSelectedPark(house);
        }}
        >
          <img src={home} alt="home marker" className='w-8 h-8' />
        </button>
      </Marker>
      {
        selectedPark ? (
          <Popup
            latitude={viewport.latitude}
            longitude={viewport.longitude}
            onClose={() => {
              selectedPark(null);
            }}
          >
            <div className='flex flex-col gap-2'>
              <p>{house.description}</p>
              <p>
                {house.address.cell},
                {house.address.province},
                {house.address.city}
              </p>
            </div>
          </Popup>
        ): null
      }
     </Map>
    </div>
  )
}

export default propertyMap