import styled from "styled-components";

export const SectionWrapper = styled.div`
  display: flex;
  flex-flow: column;
`;

export const Top = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: clamp(36px, 4vw, 48px);
`;

export const TopText = styled.p`
  font-family: "Calibri";
  font-weight: 700;
  font-size: clamp(14px, 1.5vw, 16px);
  line-height: 26px;
  color: #0041aa;

  background: #f5f7fc;
  border-radius: 24px;
  padding: 8px 24px;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: clamp(27px, 3vw, 43px);
  line-height: 150%;
  color: #060c3c;
  text-align: center;
`;

export const Main = styled.div`
  width: 100%;
`;
