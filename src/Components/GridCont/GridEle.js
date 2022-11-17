import { Paper } from '@mui/material';
import React from 'react'
import lab_image from "../../assets/Images/lab_image.png";
import './GridEle.css'

function GridEle() {
  return (
                <Paper  style={{width:'350px',height:'250px'}}>
                <div className="card">
                    <img src={lab_image} className="card-img-top" alt='Lab_image'/>
                    <div className="card-body">
                        <h4 className="card-heading">Labs</h4>
                        <div className="card-content">
                            <i className="fa-sharp fa-solid fa-location-dot card-icon"></i>
                            <div className="location-detail">
                                <h5>Velachery</h5>
                                <p>Distance : 4Km</p>
                            </div>
                        </div>
                    </div>
                </div>
                </Paper>
  )
}

export default GridEle