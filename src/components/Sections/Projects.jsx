import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
// Assets
import ProjectImg1 from "../../assets/img/courses/1.jpg";
import ProjectImg2 from "../../assets/img/courses/2.jpg";
import ProjectImg3 from "../../assets/img/courses/3.jpg";
import ProjectImg4 from "../../assets/img/courses/4.jpg";
import ProjectImg5 from "../../assets/img/courses/5.jpg";
import ProjectImg6 from "../../assets/img/courses/6.jpg";
import ProjectImg7 from "../../assets/img/courses/7.jpg";
import ProjectImg8 from "../../assets/img/courses/8.jpg";
import ProjectImg9 from "../../assets/img/courses/9.jpg";

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Featured Courses</h1>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="Doctorate in Management Studies"
                text="Our Institute seeks to ensure that DMS students are among the best equipped to meet the needs of high quality management education in the country."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                title="Diploma in SMM"
                text="Master the latest techniques in social media marketing; gain knowledge in the creation of high-quality content and implement paid and organic social media campaigns."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                title="Diploma in Big Data"
                text="The course examines digital marketing strategy, implementation and execution considerations for B2B and B2C brands and provides a detailed understanding of all digital channels and platforms."
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg4}
                title="Diploma in Digital Marketing"
                text="The course examines digital marketing strategy, implementation and execution considerations for B2B and B2C brands and provides a detailed understanding of all digital channels and platforms."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg5}
                title="Post Graduate"
                text="Earning a Post Graduate certificate can advance your knowledge and add distinction to your credentials."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg6}
                title="Diploma"
                text="You can earn an diploma from ISBM, whether you're beginning your college education or you're pursuing an diploma at the doctoral level."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg7}
                title="Advance Diploma"
                text="ISBM courses have been designed to ensure that the students get the best relevant knowledge of high class."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg8}
                title="Advanced Certificate"
                text="Studying Advanced Certificate Courses in Management can help you to hone your leadership and personnel skills."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg9}
                title="Professional Courses"
                text="At ISBM, our Professional Courses are designed to help you keep abreast of the latest knowledge and techniques in your field. They're also designed to fit your busy lifestyle."
                action={() => alert("clicked")}
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
