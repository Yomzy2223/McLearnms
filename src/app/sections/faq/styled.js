import styled from "styled-components";

export const Faq = styled.div`
  padding: 88px 0 46px;
`;
export const Questions = styled.div`
  display: flex;
  flex-flow: column;
  gap: 24px;
  margin-top: clamp(24px, 7vw, 121px);
`;

export const More = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(14px, 1.5vw, 16px);

  color: #0041aa;
  font-weight: 700;
  font-size: clamp(14px, 1.5vw, 16px);
  line-height: 125%;
  margin-top: clamp(16px, 2.5vw, 32px);
`;
