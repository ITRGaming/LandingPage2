import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
// Assets
import LogoIcon from "../../assets/img/logo.jpg";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);


  return (
    <>
      <Wrapper className="flexCenter animate whiteBg" style={{ height: "115px" }}>
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <img src={LogoIcon} alt="logo" />
          </Link>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
  padding-bottom: 15px;
`;


