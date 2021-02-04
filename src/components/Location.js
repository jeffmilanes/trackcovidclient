import React, {useState, useEffect} from 'react';
import { Map, TileLayer } from 'react-leaflet';

import Mark from './Mark';

// reference: https://stackblitz.com/edit/react-v451tg?file=Map.js

export default function Location({ data, state, location }) {

    const [stateData, setStateData] = useState({
        data: []
    });

    const search = value => {
        let result = data.filter(data => (
            (data.result).toLowerCase().includes((value.target.value).toLowerCase()) 
        ));

        setStateData({
            ...stateData,
            data: result
        })
    }

    useEffect(() => {
        setStateData({
            data: data,
        })
    }, [data]);

    return (
        <div className="container location">
                <div className="card card-padding flex-flow">
                    <div class="left-side" >
                    <input type="text" className="search" placeholder="Search" onChange={search}/>
                    <div className="table-1 scrollbar">
                        
                        <table class="sidebar">
                            <tbody>
                            {stateData.data.map((response) => (
                                <tr onClick={()=> location(response.latitude, response.longitude, response.id)} key={response.id}>
                                    <td>{ response.result }</td>
                                    <td>{ response.count }</td>
                                </tr>
                            ))}
                            </tbody>
                            </table>
                        </div>
                        </div>
                        <div className="map">
                           
                        <Map center={[state.location.lat, state.location.lon]} zoom={state.zoom}>
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"/>
                            {data.map((response) => (
                                <Mark data={response} openPopup={state.selected === response.id} key={response.id}/>
                            ))}
                        </Map>

                        </div>
                    </div>
                </div> 
    )
}
