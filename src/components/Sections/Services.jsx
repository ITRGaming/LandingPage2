import React from "react";
import styled from "styled-components";
import "./Services.css";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
// Assets
import AddImage1 from "../../assets/img/add/Newspaper.jpg";
import AddImage2 from "../../assets/img/add/paper.jpg";
import AddImage3 from "../../assets/img/add/MGS.jpg";
import AddImage4 from "../../assets/img/add/award.jpg";

export default function Services() {
  return (
    <Wrapper id="services">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <div className="whiteBg">
        <div className="container aboutContainer">
          <HeaderInfo>
            <h1 className="font40 extraBold">About ISBM</h1>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper className="animate hoverWhite">
              <ServiceBox
                icon="eye"
                title="Vision"
                subtitle="ISBM is committed to provide high quality management education through distance learning across the globe. The key benefit is flexibility of learning anytime anywhere. The curriculum combines latest academic knowledge with international competence."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper className="animate hoverWhite">
              <ServiceBox
                icon="goal"
                title="Mission"
                subtitle="ISBM is committed to provide high quality management education through distance learning across the globe. The key benefit is flexibility of learning anytime anywhere. The curriculum combines latest academic knowledge with international competence."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper className="animate hoverWhite">
              <ServiceBox
                icon="quality"
                title="Quality Policy"
                subtitle="We at ISBM are committed to satisfy our students by providing excellent service in the field of education. We do this by carrying out research, consultancy and training to fulfill the needs and expectation of students, business and society at large."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper className="animate hoverWhite">
              <ServiceBox
                icon="overview"
                title="Overview"
                subtitle="ISBM paves a path to early success in life through its fast-track short duration correspondence courses. These courses consist of concepts and case studies that provide broad exposure to relevant business concepts and management specifics."
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="lightBg heightContainer">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h2 className="font40 extraBold">Why ISBM?</h2>
                <p className="font18">
                  ISBM paves a path to early success in life by fulfilling the
                  dreams of our students by providing fast track short duration
                  correspondence courses consisting of concepts and case studies
                  that provide broad exposure to relevant business concepts and
                  management specifics thus providing impeccable service in the
                  field of management education. We believe in carrying out
                  research, consultancy and training to fulfill the needs and
                  expectation of students, business and society at large. We aim
                  to do this with a high degree of social sensitivity through
                  innovation and focus on continual reviewing of institutional
                  processes by involvement of faculties, students and staff.
                </p>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={AddImage3} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={AddImage4} alt="office" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  margin-top: 20px;
  padding: 30px 10px;
  border-radius: 10px;
  border: 2px solid black;
  box-shadow: 6px 6px 8px 4px rgba(136, 144, 195, 0.5);
  background-color: #fff4f9;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
    }
    :hover {
      border: 2px solid white;
      background-color: #6e2f52;
    }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 0 0 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 40%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 40%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
