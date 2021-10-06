import React from 'react'
import monuments from '../../images/monuments.jpg'
import logo from '../../images/logo.jpg'
import './style.css'
import { useHistory } from 'react-router-dom'
import { getMonument } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'

export default function Home() {
    const history = useHistory();
    const dispatch = useDispatch();
    
    const name = 'Taj Mahal';
    const handlePlay = () => {
        dispatch(getMonument(name, 0));
        history.push({
            pathname: '/game',
        });
    }

    function openNav() {
        console.log("Open");
        if (document.getElementById("mySidenav"))
            document.getElementById("mySidenav").style.width = "360px";
    }

    function closeNav() {
        console.log("Close");
        if (document.getElementById("mySidenav"))
            document.getElementById("mySidenav").style.width = "0";
    }
    return (
        <div className="home-div">

            {/* NAV BAR WITH LOG AND SLIDER */}
            <div id="homeHeadder">
                <div id="gameLogoDiv">
                    <img src={logo} width="100px" id="logo" />
                    <span style={{ color: 'yellow', marginLeft:"10px","fontSize": "30px", fontWeight: "bold"}}>Monumnets Game</span>
                </div>
                <span style={{
                    "fontSize": "30px", "cursor": "pointer", "color": "yellow"
                }} onClick={() => openNav()}>&#9776; Rules</span>
            </div>


            {/* CONTENTS OF THE SLIDER. RULES */}
            
            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>&times;</a>
                <h3 style={{ textAlign: 'center' }}>How to Play</h3>
                <ul>
                    <li>
                        <p>There are 10 monuments to predict with increasing difficulty</p>
                    </li>
                    <li>
                        <p>For each monumnet you get 5 hints at regulat interval of time</p>
                    </li>
                    <li>
                        <p>After all 5 hints you need to predict the name of the monument from the give 4 options</p>
                    </li>
                    <li>
                        <p>After answering you will be taken to new page which has more info about the monument and the result of prediction</p>
                    </li>
                    <li>
                        <p>If you predicted right, then we move to next monumnet and process repeats, games ends otherwise!</p>
                    </li>
                    <center>
                        <img src={monuments} width="230px" />
                    </center>
                </ul>
            </div>


                 {/* CEMTER PLAY BUTTON*/}
            <center>
                <button id="playButton"  onClick={handlePlay}>Let's Play</button>
            </center>
        </div>
    )
}
