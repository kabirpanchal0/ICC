import React from 'react'
import Header from "../../../Header"
import Footer from '../../../Footer'
import { NavLink } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";
import { useState, useEffect } from 'react';
import axios from "axios";
import Coursestable from '../../courses/coursestable/Coursestable';

const Usacollages = () => {
  const [collages, setCollages] = useState([]);

  useEffect(() => {
      axios.get(`http://localhost:5000/usacolleges`)
          .then(res => {
              if (res.data) {
                  setCollages(res.data);
                  console.log("Usa colleges");
              }
          })
          .catch(err => console.log(err));
  }, []);
  return (
    <>
      <Header />

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-10 mx-auto ">
            <NavLink to="/" className="links">Home<span ><FaAngleRight /></span></NavLink><NavLink to="/countries/7" className="links"> U S A <span><FaAngleRight /></span> </NavLink>U S A Colleges
          </div>
        </div>
      </div>
      {/* <Coursestable /> */}
      <div className="container-fluid mt-5 ">
        <div className="row">
          <div className="col-12 mx-auto">
            <h1 className="text-center"></h1>
            <h1 className="text-center">U S A Colleges</h1>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-10 mx-auto">    
            {collages.map(collage => (

              <NavLink to={collage.link} className="commoncolleges-link" >
              <div class="card mt-4" key={collage.id}>
                <div class="card-body" >
                  <h5 class="card-title ">{collage.name}</h5>
                  <h6 class="card-text mb-2 mt-4">{collage.location}</h6>
                  <p class="card-text mt-4">{collage.description}</p>

                
                </div>
              </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}


export default Usacollages
