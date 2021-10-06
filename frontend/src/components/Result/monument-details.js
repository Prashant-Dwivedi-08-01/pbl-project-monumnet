import React from 'react';
import { Typography, Divider, Paper, Button } from '@material-ui/core';
import useStyles from './styles';

export default function MonumentDeatails(props) {
    const classes = useStyles();
    return (
        <Paper style={{ padding: "20px", borderRadius: "15px", marginTop: "12px" }} elevation={6}>
            <div className={classes.card} style={{display: "flex", flexDirection: "column", alignItems:'center', justifyContent: 'center'}}>
                <div className={classes.imageSection} style={{width:"74%", display:'flex',justifyContent:'center'}} >
                    <img className={classes.media} src={props.monument.image} style={{float:'none'}}/>
                </div>
                <div className={classes.section}>
                    <Typography variant="h3" component="h2">{props.monument.name}</Typography>
                    <Typography gutterBottom variant="body1" component="p">{props.monument.desc}</Typography>
                    <Typography variant="h6">{props.monument.state}</Typography>
                    <Typography variant="body1">{props.monument.city}</Typography>
                    <Divider style={{ margin: '20px 0' }} />
                    {
                        props.isCorrect
                            ? (
                                <>
                                    <Typography variant="body1" style={{ color: "green" }}><b>Great!</b> Correct Answer</Typography>
                                    <button className="btn btn-success mt-2" onClick={props.handleNextMonument} type="submit">Next Monument</button>
                                </>
                            )
                            : (
                                <>
                                    <Typography variant="body1" style={{ color: "red" }}><b>Opps!</b> Incorrect Answer</Typography>
                                    <button className="btn btn-danger mt-2" onClick={props.handleEndGame} type="submit">End Game</button>
                                </>
                            )
                    }
                    <Divider style={{ margin: '20px 0' }} />
                </div>

            </div>
        </Paper>
    )
}
