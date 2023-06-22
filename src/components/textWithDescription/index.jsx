import React from "react";
import { TextWrapper } from "./styled";

const TextWithDescription = () => {
  return (
    <TextWrapper>
      <p>{title}</p>
      <p>{description}</p>
    </TextWrapper>
  );
};

export default TextWithDescription;
