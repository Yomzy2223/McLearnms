import styled from "styled-components";

export const QuestionWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  padding: 0px;
`;

export const Question = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 16px;
  background: #f5f7fc;
  border-radius: 24px;
`;

export const Arrow = styled.div`
  transform: ${({ $open }) => ($open ? "rotate(90deg)" : "rotate(0deg)")};
  transition: 0.3s all ease;
`;

export const Answer = styled.div`
  margin-top: 16px;
  padding: ${({ $open }) => ($open ? "clamp(12px, 3vw, 32px)" : "0px")};
  border: ${({ $open }) => ($open ? "1px solid #d4dff1" : "none")};
  border-radius: 12px;
  transition: 0.3s ease all;
  overflow: hidden;

  height: ${({ $open }) => ($open ? "100%" : "0px")};
  opacity: ${({ $open }) => ($open ? "1" : "0")};
  color: #000d22;

  /* ${({ $open }) =>
    $open
      ? `
     height: "100%";
     padding: 0;
     border: none;
     margin: 0;
  `
      : `
     height: 0;
     
  `} */
`;
