import TransformCard from "@/components/cards/transformCard";
import SectionContainer from "@/container/section";
import React from "react";
import { GetStarted, Transform, TransformWrapper } from "./styled";
import TImage1 from "../../../assets/svgs/transformImage1.svg";
import TImage2 from "../../../assets/svgs/transformImage2.svg";
import TImage2Mobile from "../../../assets/svgs/transformImage2Mobile.svg";
import TImage3 from "../../../assets/svgs/transformImage3.svg";
import CommonButton from "@/components/buttons/CommonButton";

const TransformSection = () => {
  return (
    <Transform>
      <SectionContainer
        top="Who and who benefits from McLearnms?"
        title="Transform your institution, by delivering high quality education"
      >
        <TransformWrapper>
          <TransformCard
            title="Institution Administrator"
            description="A comprehensive platform for managing the e-learning process, from course creation to student enrollment to assessment and grading"
            info={[
              "Manage course catalog",
              "Manage lecturers and students",
              "Manage academic semesters and sessions",
            ]}
            image={TImage1}
            mobileImage={TImage1}
          />
          <TransformCard
            title="Lecturers"
            description="With our powerful suite of tools, you will have everything you need to create top-notch content and engage with your student like never before."
            info={[
              "Create and publish courses",
              "Host live classes",
              "Easily publish assessments",
              "Grade assessments on the go",
            ]}
            image={TImage2}
            mobileImage={TImage2Mobile}
            reverse
          />
          <TransformCard
            title="Students"
            description="Students are not left behind as Mclearnms offers a seamless online experience with intuitive interfaces and easy-to-use features. The platform allows students to access course materials, learn at their convenience, interact with their peers, and submit assignments online, all in one convenient location."
            info={[
              "Watch recorded classes at convenience",
              "Never miss a test or class with a schedule tailored to you",
              "Access discuss forum for every course",
              "Take tests and submit assignments seamlessly",
            ]}
            image={TImage3}
            mobileImage={TImage3}
          />
        </TransformWrapper>
        <GetStarted>
          <CommonButton text="Get Started now, it's free!" />
        </GetStarted>
      </SectionContainer>
    </Transform>
  );
};

export default TransformSection;
