import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  gap: clamp(16px, 2vw, 32px);

  background: #ffffff;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: #d4dff1;
  box-shadow: 0px 12px 24px -4px rgba(16, 24, 40, 0.05),
    0px 4px 6px -2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  padding: 24px 32px;
  width: 100%;
`;

export const Left = styled.div`
  img {
    width: clamp(32px, 4vw, 56px);
  }
`;

export const Right = styled.div`
  display: flex;
  flex-flow: column;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: clamp(18px, 2vw, 22px);
  line-height: 125%;
  color: #000d22;
`;

export const Description = styled.div`
  font-weight: 400;
  font-size: clamp(14px, 1.5vw, 18px);
  line-height: 160%;
  color: #000d22;
`;
