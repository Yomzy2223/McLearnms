import CommonButton from "@/components/buttons/CommonButton";
import SectionContainer from "@/container/section";
import Image from "next/image";
import React from "react";
import footerImg from "../../../assets/svgs/FooterImg.svg";
import MainFooter from "./MainFooter";
import { Body, Button, FooterWrapper, SectionWrapper } from "./styled";

const Footer = () => {
  return (
    <FooterWrapper>
      <SectionWrapper>
        <SectionContainer title="Beat the competition with Seamless Online Learning - Join the League of Leading Institutions Today!">
          <Body>
            <p>Sign up now and experience a new level of education</p>
            <Button>
              <CommonButton text="Get started now, it's free!" />
            </Button>
          </Body>
        </SectionContainer>
        <Image src={footerImg} />
      </SectionWrapper>
      <MainFooter />
    </FooterWrapper>
  );
};

export default Footer;
