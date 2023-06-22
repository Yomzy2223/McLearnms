import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-flow: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  @media screen and (max-width: 800px) {
    flex-flow: column;
  }
`;

export const Left = styled.div`
  flex: 1;
`;

export const Title = styled.div`
  color: #060c3c;
  font-weight: 700;
  font-size: clamp(22px, 2.7vw, 34px);
  line-height: 125%;
`;

export const Description = styled.div`
  color: #060c3c;
  font-weight: 400;
  font-size: clamp(16px, 1.7vw, 18px);
  line-height: 170%;
  margin-top: clamp(8px, 1.4vw, 18px);
`;

export const Info = styled.div`
  display: flex;
  flex-flow: column;
  gap: clamp(8px, 1.2vw, 16px);
  margin-top: clamp(8px, 1.8vw, 24px);
`;

export const EachInfo = styled.div`
  padding: clamp(8px, 1.2vw, 16px);
  background: #ffffff;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: #d4dff1;
  border-radius: 8px;
`;

export const More = styled.div`
  a {
    color: #0041aa;
    font-weight: 700;
    font-size: clamp(14px, 1.5vw, 16px);
    line-height: 125%;
  }
`;

export const Right = styled.div`
  flex: 1;
  max-width: 50%;

  img {
    width: 100%;
  }

  @media screen and (max-width: 800px) {
    max-width: 100%;
  }
`;

export const DesktopImage = styled.div`
  display: flex;

  img {
    height: max-content;
    max-width: 100%;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const MobileImage = styled.div`
  display: none;
  max-width: 100%;
  width: 100%;

  img {
    height: max-content;
    max-width: 100%;
    width: 100%;
  }

  @media screen and (max-width: 800px) {
    display: flex;
  }
`;
