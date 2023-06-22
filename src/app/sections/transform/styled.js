import styled from "styled-components";

export const Transform = styled.div`
  display: flex;
  flex-flow: column;
  padding: 88px 0 46px;
`;

export const TransformWrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: clamp(40px, 4.4vw, 48px);

  margin-top: clamp(32px, 4.5vw, 62px);
`;

export const GetStarted = styled.div`
  max-width: min(365px, 100%);
  margin: auto;
  margin-top: clamp(48px, 5.5vw, 62px);
`;
