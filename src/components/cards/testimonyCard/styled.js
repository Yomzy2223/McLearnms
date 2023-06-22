import styled from "styled-components";

export const CardWrapper = styled.div`
  cursor: grab;
  display: flex;
  flex-flow: column;
  padding: clamp(16px, 1.8vw, 24px);
  margin-bottom: 50px;

  background: #ffffff;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: #d4dff1;
  box-shadow: 0px 12px 24px -4px rgba(41, 76, 171, 0.05),
    0px 4px 6px -2px rgba(41, 76, 171, 0.05);
  border-radius: 8px;

  font-weight: 400;
  font-size: clamp(14px, 1.6vw, 18px);
  line-height: 170%;
  text-align: center;

  height: clamp(226px, 26vw, 291px;);
  max-height: clamp(226px, 26vw, 291px;);
`;

export const Testimony = styled.div`
  color: #000d22;
  margin-bottom: clamp(16px, 2vw, 24px);
  margin-bottom: clamp(16px, 1.8vw, 24px);
  font-size: clamp(14px, 1.6vw, 18px);
`;

export const Name = styled.div`
  color: #44484f;
  /* margin-bottom: clamp(8px, 1.2vw, 16px); */
`;

export const Identity = styled.div`
  color: #000d22;
  font-weight: 700;
`;
