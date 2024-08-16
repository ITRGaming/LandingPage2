import React from "react";
import styled from "styled-components";
// Assets
import EyeIcon from "../../assets/svg/Services/EyeIcon";
import GoalIcon from "../../assets/svg/Services/GoalIcon";
import QualityIcon from "../../assets/svg/Services/StarIcon";
import OverviewIcon from "../../assets/svg/Services/OverviewIcon";

export default function ServiceBox({icon, title, subtitle}) {
  let getIcon;

  switch (icon) {
    case "eye":
      getIcon = <EyeIcon />;
      break;
    case "monitor":
      getIcon = <GoalIcon />;
      break;
    case "browser":
      getIcon = <QualityIcon />;
      break;
    case "printer":
      getIcon = <OverviewIcon />;
      break;
    default:
      getIcon = <EyeIcon />;
      break;
  }


  return (
    <Wrapper className="flex flexColumn">
      <IconStyle className="text-center">{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold text-center">{title}</TitleStyle>
      <SubtitleStyle className="font13 text-center">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;