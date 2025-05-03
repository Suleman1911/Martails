import React from "react";
import "./Training.css";
import About from "../../assets/imgs/about-3.jpg";

const Training = () => {
  return (
    <>
      <div className="train-main">
        <div className="t-img">
          <img src={About} alt="" />
        </div>
        <div className="t-desc">
          <h4 style={{marginTop:"-40px"}}>We the Martial Arts & Karate Training Center.</h4>
          <p style={{color:"#dc3545"}}>Join our martial art club and be healthy.</p>
          <p style={{fontSize:"14px",lineHeight:"1.5"}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            repudiandae odit dolorum quis laudantium impedit beatae perferendis
            natus, hic libero sed atque quibusdam possimus error, voluptate est
            molestiae doloremque necessitatibus illum rerum sunt! Ad sunt
            obcaecati voluptatem sint sequi quos, qui non deleniti a
            praesentium, sapiente accusantium odit.
          </p>
          <div className="btn">
        <button>OUR SERVICES</button>
      </div>
        </div>
      </div>
    </>
  );
};

export default Training;
