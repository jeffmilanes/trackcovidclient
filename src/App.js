import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

import Intro from './components/Intro';
import AlertInfo from './components/AlertInfo';
import Status from './components/Status';
import Location from './components/Location';

// 

import Awareness from './components/Awareness';
import Description from './components/Description';
import Steps from './components/Steps';
import Symptoms from './components/Symptoms';
import Todo from './components/Todo';


import './App.css';

function App() {
  
    const [state, setState] = useState({
        location: {
            lat: 14.676041,
            lon: 121.043700,
        },
        selected: false,
        zoom: 12,
    });
    const [stateCount, setStateCount] = useState([]);
    const [statePerHealthFacility, setPerHealthFacility] = useState([]);
    //const [statePerLocation, setPerLocation] = useState([]);
    

    const getCount = async () => {
        let res = await fetch('https://services5.arcgis.com/mnYJ21GiFTR97WFg/arcgis/rest/services/slide_fig/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*')
        res = await res.json()
    
        setStateCount(res.features[0].attributes)
    }

    const getPerHealthFacility = async () => {
        let res = await fetch('https://services5.arcgis.com/mnYJ21GiFTR97WFg/arcgis/rest/services/municitycent/FeatureServer/0/query?f=json&where=count_%3E%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*')
        res = await res.json()

        setPerHealthFacility(res.features)
    }

    // const getPerLocation = async () => {
    //     let res = await fetch('http://localhost:5000/api/v2/local-cases')
    //     res = await res.json()

    //     setPerLocation(res)
    // }

    const clickLocation = (lat, lon, index) => {
        setState({
            ...state,
            location: {
                lat: lat,
                lon: lon,
            },
            selected: index
        })
    }
    useEffect(() => {
        async function fetchAPI() {
            await Promise.all([getCount(), getPerHealthFacility()]);
        }
        fetchAPI();
    }, [])
      return (
        <Router>
            <Route path='/' exact render={props => 
            <>
                <Header />
                <Intro />
                <AlertInfo />
                <Status 
                    data={stateCount}
                />
                <Location 
                    state={state} 
                    data={statePerHealthFacility} 
                    location={clickLocation}
                />
                <Footer />
            </>
            } />
            <Route path='/awareness' render={props => 
            <>
                <Header />
                <Awareness />
                <Description />
                <Steps />
                <Symptoms />
                <Todo />
                <Footer />
            </>
            } />
        </Router>
      );
}

export default App;
