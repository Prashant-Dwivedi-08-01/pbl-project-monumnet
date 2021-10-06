import React, { useState, useEffect }  from 'react';
import { useDispatch , useSelector} from "react-redux"
import { useHistory, useLocation } from 'react-router-dom';
import { getMonument } from '../../actions/index'
import "./style.css";

export default function Game() {


    let lst = [
        "Declared as one of the 7 Wonders of the world",
        "Located on the banks of river Yamuna",
        "It is a monument of true love",
        "It has Islamic calligraphy inscriptions all over",
        "Cars and buses must stay at least 500 meters away from me"
    ]

    let optionsArray = []


    const history = useHistory();
    
    const [hint, setHint] = useState([]);
    const [option, setOption] = useState([]);
    const [count, setCount] = useState(0);
    const [ans, setAns] = useState('');


    const monument = useSelector(state => state.data);
    const score = useSelector(state => state.score);
    console.log(score);
    optionsArray  = monument.option;
    if(count != 0)
        lst = monument.hint;

    const handleSubmit = (e) => {
        e.preventDefault();

        history.push({
            pathname: '/result',
            state: { detail: ans }
        });
    }
    
    useEffect(() => {
        let counter = count;
        const interval = setInterval(() => {
          if (counter >= 5) {
              setOption(optionsArray)
            clearInterval(interval);
          } else {
            setHint(...hint, lst[count]);
            setCount(count => count + 1);
            counter++; // local variable that this closure will see
          }
        }, 1000);
        return () => clearInterval(interval); 
      }, [hint]);


    // PREPARING THE LIST OF HINTS  
    let hints =  lst.slice(0, count).map((hint, index) => (
        <li key={index} className="hint">{hint}</li>
      ));


    return (
        <div className="game-div"  style={{ height : "100vh"}}>
            <div className="container">
                <div className="row" style={{boxShadow: "0px 16px 43px 0px #848400",borderRadius:'15px', display:"flex", justifyContent:'center', alignItems:'center'}}>
                    <div className="col-11">
                        <h1 style={{color: 'yellow', textAlign: 'center',marginTop: '50px'}}>Monuments Game</h1>
                    </div>
                    <div className="col-1" style={{color: 'yellow', textAlign: 'center',marginTop: '50px'}}>
                        Score: {score}
                    </div>
                </div>
                <div className="row mt-5" style={{marginTop: '20px'}}>
                    <div className="col-6">
                        <ul style={{listStyle: 'none'}}>
                       {
                         hints
                       }
                       </ul>
                    </div>
                    <div className="col-6 options-div" style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent: 'center'}}>
                        <h1 style={{color: 'white', fontWeight:'bold'}}>Guess The Monument!</h1>
                        <form  id="options-form" onSubmit={handleSubmit}>
                            {
                            option.map((val, index) => (
                                <div class="form-check options-value">
                                    <input class="form-check-input" onChange={(e)=>setAns(val)} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                    <label class="form-check-label" for="flexRadioDefault1">
                                    {val}
                                    </label>
                                </div>
                            ))
                            }
                            <button type="submit" class="btn btn-dark mt-5">Submit</button>
                       </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
