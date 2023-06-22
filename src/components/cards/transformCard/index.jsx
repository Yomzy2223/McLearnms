import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  CardWrapper,
  Description,
  DesktopImage,
  EachInfo,
  Info,
  Left,
  MobileImage,
  More,
  Right,
  Title,
} from "./styled";

const TransformCard = ({
  title,
  description,
  info,
  image,
  mobileImage,
  reverse,
}) => {
  return (
    <CardWrapper $reverse={reverse}>
      <Left>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <MobileImage>
          <Image src={mobileImage} alt="" />
        </MobileImage>
        <Info>
          {info.map((el, i) => (
            <EachInfo key={i}>{el}</EachInfo>
          ))}
        </Info>
        <More>
          <Link href="#" />
        </More>
      </Left>

      <Right>
        <DesktopImage>
          <Image src={image} alt="" />
        </DesktopImage>
      </Right>
    </CardWrapper>
  );
};

export default TransformCard;
