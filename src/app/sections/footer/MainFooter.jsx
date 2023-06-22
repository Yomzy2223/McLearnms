import Image from "next/image";
import React from "react";
import BookOpenWhite from "../../../assets/svgs/BookOpenWhite.svg";
import SocialMediaIcons from "../../../assets/svgs/SocialMediaIcons.svg";
import {
  Connect,
  Copyright,
  EachList,
  EachListBody,
  EachListTitle,
  FooterContent,
  FooterLeft,
  FooterRight,
  Info,
  MainFooterWrapper,
  Title,
} from "./styled";

const MainFooter = () => {
  const list = [
    {
      title: "Features",
      body: ["For Schools", "For lecturers", "For students"],
    },
    {
      title: "Pricing",
      body: ["Pricing 1", "Pricing 2", "Pricing 3"],
    },
    {
      title: "Support",
      body: ["FAQs", "Help  & Support", "Privacy Policy", "Terms & Conditions"],
    },
  ];

  return (
    <MainFooterWrapper>
      <FooterContent>
        <FooterLeft>
          <Title>
            <Image src={BookOpenWhite} alt="" /> McLearnms
          </Title>
          <Info>
            Transform your Institution into a Digital Powerhouse with Mclearnms
          </Info>
          <Connect>
            <p>Connect with us on social media</p>
            <Image src={SocialMediaIcons} alt="" />
          </Connect>
        </FooterLeft>
        <FooterRight>
          {list.map((el, ind) => (
            <EachList key={ind}>
              <EachListTitle>{el.title}</EachListTitle>
              <EachListBody>
                {el.body.map((each, i) => (
                  <li key={i}>{each}</li>
                ))}
              </EachListBody>
            </EachList>
          ))}
        </FooterRight>
      </FooterContent>
      <Copyright>© 2023 Mclearnms. All Right Reserved</Copyright>
    </MainFooterWrapper>
  );
};

export default MainFooter;
