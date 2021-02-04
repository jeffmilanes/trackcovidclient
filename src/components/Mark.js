import React, {useRef, useEffect} from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import Image from '../assets/images/virus-icon@2x.png';

const Icon = L.icon({
    iconUrl: Image,
    iconSize: [60],
    popupAnchor: [-5, -5],
    iconAnchor: [34, 15],
});

export default function Mark({ data, openPopup }) {

    const markerRef = useRef(null);
  
    useEffect(() => {
      if (openPopup) markerRef.current.leafletElement.openPopup();
    }, [openPopup]);

    return (
        <Marker icon={Icon} ref={markerRef} key={data.id} position={[data.latitude, data.longitude]}>
          <Popup>
            <div className="popup">
            {data.result} 
            <div className="popup-count">{data.count}</div>
            </div>
          </Popup>
        </Marker>
    )
}
