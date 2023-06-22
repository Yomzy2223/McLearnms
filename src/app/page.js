"use client";
import Header from "@/components/header";
import styled from "styled-components";
import ConnectSection from "./sections/connect";
import FaqSection from "./sections/faq";
import Footer from "./sections/footer";
import Hero from "./sections/hero";
import TestimonialSection from "./sections/testimonial";
import TransformSection from "./sections/transform";

export default function Home() {
  return (
    <AppContainer>
      <Header />
      <Hero />
      <ConnectSection />
      <TransformSection />
      <TestimonialSection />
      <FaqSection />
      <Footer />
    </AppContainer>
  );
}

export const AppContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 24px;
  padding: 0 clamp(16px, 4vw, 60px);
`;
