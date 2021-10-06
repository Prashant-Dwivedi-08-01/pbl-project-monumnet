import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getMonument, updateScore } from '../../actions';
import mapboxgl from 'mapbox-gl';
import MonumentDeatails from './monument-details';
import './style.css';

export default function Result() {
    const location = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();

    const presentMonument = useSelector(state => state.data);
    console.log(presentMonument.coordinates);
    const currentCount = useSelector(state => state.count);
    const presentScore = useSelector(state => state.score);

    const monumnets = [
        "Taj Mahal",
        "Hawa Mahal",
        "Konark temple",
        "Charminar",
        "Mysore Palace",
        "Ajanta Caves",
        "Chota Imambara",
        "Statue of Unity",
    ]

    let answerFromUser = location.state.detail;
    let isCorrect = false;

    if (answerFromUser === presentMonument?.name) isCorrect = true
    else isCorrect = false;

    if(isCorrect){
        if(presentMonument?.name === 'Taj Mahal')
        dispatch(updateScore(0));
        else
        dispatch(updateScore(100));
    }



    const handleEndGame = () => {
        dispatch(updateScore(-presentScore+100));
        history.push('/home');
    }

    let name = monumnets[currentCount]; // NAME OF NEXT MONUMENT THAT WE NEED TO SERVE
    const handleNextMonument = () => {
        dispatch(getMonument(name, currentCount));
        history.push('/game');
    }

    // MAPBOX CODE START

    mapboxgl.accessToken = 'pk.eyJ1IjoicHJhc2hhbnQxOTQiLCJhIjoiY2twY2U4NDlnMDM2eDJvcDdjenpwbzJrdSJ9.1oQ67A0udzQw2mwUEP4GYA';

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(presentMonument.coordinates[1]);
    const [lat, setLat] = useState(presentMonument.coordinates[0]);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
        // map.resize();

    });

    // MAPBOX CODE END HERE

    return (
        <div className="result-div">
            <div className="monumnet-info" style={{marginRight: "20px",  width: "38%"}}>
                <MonumentDeatails handleEndGame = {handleEndGame} handleNextMonument = {handleNextMonument} monument = {presentMonument} answerFromUser = {answerFromUser} isCorrect = {isCorrect}/>
            </div>
            {/* <div> */}
                <div ref={mapContainer} className="map-container" />
            {/* </div> */}
        </div>
    )
}
