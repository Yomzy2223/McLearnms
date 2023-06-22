import SectionContainer from "@/container/section";
import React from "react";
import { Testimonial } from "./styled";
import Carousel from "react-multi-carousel";
import TestimonyCard from "@/components/cards/testimonyCard";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Stroke from "../../../assets/svgs/Stroke.svg";

const TestimonialSection = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 550 },
      items: 2,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 550, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
    },
  };

  const Testimonies = [
    {
      testimony:
        "McLearnMS has been an essential tool for our university in providing seamless online learning experiences for our students. The platform is intuitive and user-friendly, and the support team is always responsive and helpful.",
      name: "Adebisi Olamide",
      identity: "VC University of Ibadan",
    },
    {
      testimony:
        "McLearnMS has been an essential tool for our university in providing seamless online learning experiences for our students. The platform is intuitive and user-friendly, and the support team is always responsive and helpful.",
      name: "Amantha Sina",
      identity: "Student, OAU",
    },
    {
      testimony:
        "McLearnMS has been an essential tool for our university in providing seamless online learning experiences for our students. The platform is intuitive and user-friendly, and the support team is always responsive and helpful.",
      name: "Adebisi Olamide",
      identity: "VC University of Ibadan",
    },
    {
      testimony:
        "McLearnMS has been an essential tool for our university in providing seamless online learning experiences for our students. The platform is intuitive and user-friendly, and the support team is always responsive and helpful.",
      name: "Amantha Sina",
      identity: "Student, OAU",
    },
  ];

  return (
    <Testimonial>
      <SectionContainer
        top="Testimonials"
        title="See how you are making difference"
      >
        <Image src={Stroke} alt="" />
        <Carousel
          ssr
          //   partialVisbile
          responsive={responsive}
          autoPlay
          arrows={false}
          infinite
          draggable
          swipeable
          showDots
          keyBoardControl
          containerClass="carousel-container"
        >
          {Testimonies.map((testimony, i) => {
            return (
              <TestimonyCard
                key={i}
                identity={testimony.identity}
                name={testimony.name}
                testimony={testimony.testimony}
              />
            );
          })}
        </Carousel>
      </SectionContainer>
    </Testimonial>
  );
};

export default TestimonialSection;
