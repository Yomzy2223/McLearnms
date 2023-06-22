import Image from "next/image";
import React from "react";
import { CardWrapper, Description, Left, Right, Title } from "./styled";

const FeatureCard = ({ title, description, image }) => {
  return (
    <CardWrapper className="interactive__click">
      <Left>
        <Image src={image} alt="" />
      </Left>
      <Right>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Right>
    </CardWrapper>
  );
};

export default FeatureCard;
