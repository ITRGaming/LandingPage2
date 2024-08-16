import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Header.css";
import {
  GetState,
  GetCity
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

// Components
// Assets
import HeaderImage from "../../assets/img/add/student.jpg";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import { useState, useEffect } from "react";

export default function Header() {
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([
    { id: 57837, name: 'Bamboo Flat', latitude: '11.70000000', longitude: '92.71667000' },
    { id: 133213, name: 'Nicobar', latitude: '7.03002000', longitude: '93.79028000' },
    { id: 133482, name: 'Port Blair', latitude: '11.66613000', longitude: '92.74635000' },
    { id: 134006, name: 'South Andaman', latitude: '10.75776000', longitude: '92.52136000'   
   }
  ]);

  useEffect(()=> {
    GetState(101).then((result) => {
      setStateList(result);
    });
  })

  return (
    <div className="headerContainer">
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
        <form className="g-3 row enquiryForm">
            <div className="header">
              <h3 className="title">Enquire Now</h3>
              {/* <i className="imp">
                *Please provide the information below, and our counsellor will
                get in touch with you.
              </i> */}
            </div>
            <div className="form-group col-lg-6 col-md-6 mb-1 input-group-sm">
              <label className="form-label " name="name">
                Name:
              </label>
              <br />
              <input
                className="form-control "
                type="text"
                name="name"
                placeholder="Name"
              ></input>
            </div>
            <div className="form-group col-lg-6 col-md-6 mb-1 input-group-sm">
              <label className="form-label " name="email">
                Email:
              </label>
              <br />
              <input
                className="form-control"
                type="text"
                name="email"
                placeholder="Email"
              ></input>
            </div>

            <div className="form-group col-lg-6 col-md-6 mb-1 input-group-sm">
              <label className="form-label" name="number">
                Number:
              </label>
              <br />
              <input
                className="form-control"
                type="tel"
                name="number"
                pattern={"[0-9]{5}-[0-9]{5}"}
                placeholder="Number"
              ></input>
            </div>
            <div className="form-group col-lg-6 col-md-6 mb-1 input-group-sm">
              <label className="form-label" name="state">
                State:
              </label>
              <select
                className="form-control level"
                onChange={(e) => {
                  const state = stateList[e.target.value]; //here you will get full state object.
                  // setStateid(state.id);
                 
        
                  GetCity(101, state.id).then((result) => {
                    setCityList(result);
                    console.log(result);
                    console.log(cityList);
                  });
                }}
              >
                 {stateList.map((item, index) => (
                    <option key={index} value={index}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="form-group col-lg-6 col-md-6 mb-1 input-group-sm">
              <label className="form-label" name="city">
                City:
              </label>
              <select
                className="form-control level"
              >
                {cityList.map((item, index) => (
                  <option key={index} value={index}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-lg-6 col-md-6 mb-1 input-group-sm">
              <label className="form-label" name="degree">
                Degree:
              </label>
              <select
                className="form-control level"
                id="level"
                name="level"
                required=""
              >
                <option value="Doctorate">Doctorate</option>
                <option value="Post Graduate">Post Graduate</option>
                <option value="Post Graduate Diploma">
                  Post Graduate Diploma
                </option>
                <option value="Graduate">Graduate</option>
                <option value="Diploma">Diploma</option>
                <option value="Advance Diploma">Advance Diploma</option>
                <option value="Management Certification Courses">
                  Management Certification Courses
                </option>
                <option value="Professional Courses">
                  Professional Courses
                </option>
                <option value="Advance Certificate">Advance Certificate</option>
              </select>
            </div>
            <div className="form-group input-group-sm">
              <label className="form-label" name="program">
                Program:
              </label>
              <select
                className="form-control course"
                id="course"
                name="course"
                required=""
              >
                <option value="">Select course</option>
              </select>
            </div>
            <div className="checkbox">
              <input type="checkbox"></input>
              <p className="imp">
                By clicking on the above button, I authorize ISTM and/or their
                representative to contact me via Phone, SMS, WhatsApp, and/or
                email.
              </p>
            </div>
            <div className="">
              <button type="submit" className="customBtn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img className="radius8" src={HeaderImage} alt="office" style={{zIndex: '9', height: '607px', width: '426px'}} />
          <QuoteWrapper className="flexCenter darkBg radius8">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <div>
              <p className="font15 whiteColor">
                <em>Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it.</em>
              </p>
              <p className="font13 darkpinkColor textRight" style={{marginTop: '10px'}}>Ralph Waldo Emerson</p>
            </div>
          </QuoteWrapper>
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide>
    </Wrapper>
    </div>
  );
}


const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;


