import React from "react";
import { Main, SectionWrapper, Title, Top, TopText } from "./styled";

const SectionContainer = ({ children, top, title }) => {
  return (
    <SectionWrapper>
      <Top>
        {top && <TopText>{top}</TopText>}
        <Title>{title}</Title>
      </Top>
      <Main>{children}</Main>
    </SectionWrapper>
  );
};

export default SectionContainer;
