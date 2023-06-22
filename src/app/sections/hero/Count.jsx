import React from "react";
import { CountDescription, CountNumber, Counts, EachCount } from "./styled";

const Count = ({ left, right }) => {
  return (
    <Counts $left={left} $right={right}>
      <EachCount>
        <CountNumber>50+</CountNumber>
        <CountDescription>Active Schools</CountDescription>
      </EachCount>
      <EachCount>
        <CountNumber>500+</CountNumber>
        <CountDescription>Satisfied Lecturers</CountDescription>
      </EachCount>
      <EachCount>
        <CountNumber>1000+</CountNumber>
        <CountDescription>Happy Students</CountDescription>
      </EachCount>
    </Counts>
  );
};

export default Count;
