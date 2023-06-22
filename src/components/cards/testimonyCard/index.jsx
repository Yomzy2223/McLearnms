import React from "react";
import { CardWrapper, Identity, Name, Testimony } from "./styled";

const TestimonyCard = ({ testimony, name, identity }) => {
  return (
    <CardWrapper>
      <Testimony>{testimony}</Testimony>
      <Name>{name}</Name>
      <Identity>{identity}</Identity>
    </CardWrapper>
  );
};

export default TestimonyCard;
