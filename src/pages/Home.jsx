import React, { useEffect } from "react";
import HeroSection from "../Features/home/HeroSection";
import Training from "../Features/home/Training";
import Banner from "../Features/home/Banner";
import Heading from "../Components/Heading/Heading";
import Cards from "../Components/Cards/Cards";
import { dummyData } from "../assets/dummyData/dummyData";
import { secondData } from "../assets/dummyData/secondData";
import { GalleryImg } from "../assets/dummyData/galleryimg";
import Sports from "../Features/home/Sports";
import styled from "styled-components";
import { thirdData } from "../assets/dummyData/thirdData";
import { CiFacebook } from "react-icons/ci";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaGooglePlusG } from "react-icons/fa";
import Clientfeeds from "../Features/home/Clientfeeds";
import { useNavigate, useParams } from "react-router-dom";

const useCard = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
};

const nxtCard = {
  display: "flex",
  alignItem: "center",
  justifyContent: "Center",
  gap: "20px",
};

const ImgStyle = {
  display: "flex",
  flexWrap: "wrap",
  alignItem: "center",
  justifyContent: "center",
  gap: "20px",
  width: "80%",
  margin: "auto",
  marginBottom: "20%",
};

const ItemImg = styled.div`
  position: relative;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: auto;
    transition: transform 0.3s ease;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0); /* No overlay by default */
    transition: background-color 0.3s ease;
  }

  &:hover::after {
    background-color: rgba(0, 0, 0, 0.5); /* Transparent black on hover */
  }

  &:hover img {
    transform: scale(1.05); /* Optional: Slight zoom on hover */
  }
`;

const Home = () => {
 



  return (
    <>
      <HeroSection />
      <Training />
      <Banner />
      <Heading title="Our Course" para="Our Top Boxing Course." />
      <div style={useCard}>
        {dummyData.map((obj,index) => {
          return (
            <Cards
              key={index}
              image={obj.image}
              title={obj.title}
              description={obj.description}
            />
          );
        })}
      </div>
      <Heading
        title="Our Programs"
        para="Become A Professional Boxer Player."
      />
      <div style={nxtCard}>
        {secondData.map((obj,index) => {
          return (
            <Cards
              key={index}
              image={obj.image}
              title={obj.title}
              description={obj.description}
            />
          );
        })}
      </div>
      <Sports />
      <Heading
        title="Martial Projects"
        para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, aperiam ea eligendi consectetur et quas ipsa impedit."
      />
      <div style={ImgStyle}>
        {GalleryImg.map((item, index) => (
          <ItemImg key={index}>
            <img src={item.img} style={{ width: "200px", height: "auto" }} />
          </ItemImg>
        ))}
      </div>
      <Heading
        title="Our Coach"
        para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, aperiam ea eligendi consectetur et quas ipsa impedit."
      />
      <div style={nxtCard}>
        {thirdData.map((obj,index) => {
          return (
            <Cards
              key={index}
              image={obj.image}
              title={obj.title}
              description={obj.description}
            >
              <CiFacebook style={{ color: "#4867AA", fontSize: "20px" }} />
              <TiSocialLinkedinCircular
                style={{ color: "#007BB6", fontSize: "20px" }}
              />
              <FaGooglePlusG style={{ color: "#DD5144", fontSize: "20px",}} />
            </Cards>
          );
        })}
      </div>
      <Clientfeeds/>
    </>
  );
};

export default Home;
