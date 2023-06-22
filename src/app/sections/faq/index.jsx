import QuestionCard from "@/components/cards/questionCard";
import SectionContainer from "@/container/section";
import React from "react";
import { questions } from "./constants";
import { Faq, More, Questions } from "./styled";
import { MdKeyboardArrowRight } from "react-icons/md";

const FaqSection = () => {
  return (
    <Faq>
      <SectionContainer top="FAQ's" title="Frequently asked questions">
        <Questions>
          {questions.map((el, i) => (
            <QuestionCard question={el.question} answer={el.answer} key={i} />
          ))}
        </Questions>
        <More>
          See more FAQ's <MdKeyboardArrowRight size={24} />
        </More>
      </SectionContainer>
    </Faq>
  );
};

export default FaqSection;
