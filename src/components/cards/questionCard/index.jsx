import React, { useState } from "react";
import { Answer, Arrow, Question, QuestionWrapper } from "./styled";
import { MdKeyboardArrowRight } from "react-icons/md";

const QuestionCard = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <QuestionWrapper>
      <Question onClick={() => setOpen(!open)}>
        <Arrow $open={open}>
          <MdKeyboardArrowRight />
        </Arrow>
        <span>{question}</span>
      </Question>
      <Answer $open={open}>{answer}</Answer>
    </QuestionWrapper>
  );
};

export default QuestionCard;
