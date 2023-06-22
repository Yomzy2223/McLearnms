import FeatureCard from "@/components/cards/featureCard";
import SectionContainer from "@/container/section";
import React from "react";
import { Connect, ConnectLeft, ConnectRight, ConnectWrapper } from "./styled";
import BookOpenBlue from "../../../assets/svgs/BookOpenBlue.svg";
import BookOpenOrange from "../../../assets/svgs/BookOpenOrange.svg";
import BookOpenGreen from "../../../assets/svgs/BookOpenGreen.svg";
import ConnectImage from "../../../assets/svgs/ConnectImage.svg";
import Image from "next/image";

const ConnectSection = () => {
  return (
    <Connect>
      <SectionContainer
        top="Why Mclearnms?"
        title="Equipping Lecturers and Students with Cutting-Edge Tools to Create, Collaborate, and Connect Like Never Before"
      >
        <ConnectWrapper>
          <ConnectLeft>
            <FeatureCard
              title="Seamless learning experience"
              description="With powerful tools for content development, online collaboration, and real-time communication, Mclearnms helps to foster engagement, retention, and success in the classroom."
              image={BookOpenBlue}
            />
            <FeatureCard
              title="Course management simplified"
              description="A system built for lecturers to create, manage, and deliver learning content. Save time and reduce the effort dedicated to infrastructure and course management, using features like: course registration, and assignment and test management."
              image={BookOpenOrange}
            />
            <FeatureCard
              title="An all in one robust learning system"
              description="Whether it's a small classroom or a large university, Mclearnms provides the tools and features needed to deliver and track learning initiatives in one place."
              image={BookOpenGreen}
            />
          </ConnectLeft>
          <ConnectRight>
            <Image src={ConnectImage} alt="" />
          </ConnectRight>
        </ConnectWrapper>
      </SectionContainer>
    </Connect>
  );
};

export default ConnectSection;
