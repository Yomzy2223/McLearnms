"use client";
import CommonButton from "@/components/buttons/CommonButton";
import Image from "next/image";
import React from "react";
import PlayIcon from "../../../assets/svgs/pointer.svg";
import {
  Actions,
  Button,
  Description,
  HeroLeft,
  HeroRight,
  HeroWrapper,
  Text,
  Title,
} from "./styled";
import LaptopLady from "../../../assets/images/laptop_lady.png";
import Count from "./Count";

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroLeft>
        <Text>
          <Title>Unlock a new learning experience</Title>
          <Description>
            The future of education is here, re-event traditional learning and
            gain access to seamless learning and management experience. The best
            eLearning solutions for intuitions of all sizes. Everything you need
            in-one-place.
          </Description>
        </Text>
        <Actions>
          <Button>
            <CommonButton text="Get Started" />
          </Button>
          <Button>
            <Image src={PlayIcon} alt="" /> <span>See in actions</span>
          </Button>
        </Actions>
        <Count left />
      </HeroLeft>
      <HeroRight>
        <Image src={LaptopLady} alt="" />
        <Count right />
      </HeroRight>
    </HeroWrapper>
  );
};

export default Hero;
