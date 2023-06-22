import styled from "styled-components";

export const Connect = styled.div`
  padding-top: clamp(44px, 6vw, 88px);
`;

export const ConnectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: clamp(32px, 5vw, 96px);
  margin-top: clamp(32px, 4.5vw, 62px);
`;

export const ConnectLeft = styled.div`
  display: flex;
  flex-flow: column;
  gap: clamp(24px, 2.7vw, 32px);
  flex: 1;
`;

export const ConnectRight = styled.div`
  max-width: 50%;

  img {
    flex: 1;
    width: 100%;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;
