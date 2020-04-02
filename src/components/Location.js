import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

import Mark from './Mark';

// reference: https://stackblitz.com/edit/react-v451tg?file=Map.js

export default function Location({ data, state, location }) {

    return (
        <div className="container location">
                <div className="card card-padding flex-flow">
                    <div className="table-1 scrollbar">
                        <table>
                            <tbody>
                            {data.map((response, index) => (
                                <tr onClick={()=> location(response.attributes.latitude, response.attributes.longitude, index)} key={index}>
                                    <td>{response.attributes.ADM3_EN }, {response.attributes.ADM2_EN}, {response.attributes.ADM1_EN}</td>
                                    <td>{response.attributes.count_ }</td>
                                </tr>
                            ))}
                            </tbody>
                            </table>
                        </div>
                        <div className="map">
                           
                        <Map center={[state.location.lat, state.location.lon]} zoom={state.zoom}>
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"/>
                            {data.map((response, index) => (
                                <Mark data={response} openPopup={state.selected === index} key={index}/>
                            ))}
                        </Map>

                        </div>
                    </div>
                </div> 
    )
}
