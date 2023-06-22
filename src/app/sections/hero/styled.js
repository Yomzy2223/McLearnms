import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 650px) {
    flex-flow: column;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-flow: column;
  gap: clamp(32px, 4vw, 64px);

  width: 53%;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const Text = styled.div`
  color: #060c3c;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: clamp(30px, 4vw, 45px);
  line-height: 125%;
`;

export const Description = styled.div`
  font-weight: 400;
  font-size: clamp(14px, 1.8vw, 18px);
  line-height: 170%;
  margin-top: 24px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(16px, 3vw, 48px);
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  width: clamp(160px, max(max-content, 17vw), 190px);
  max-width: 190px;

  span {
    font-size: clamp(14px, 1.5vw, 16px);
  }
`;

export const Counts = styled.div`
  display: ${({ $left }) => ($left ? "flex" : "none")};
  gap: 24px;

  @media screen and (max-width: 650px) {
    display: ${({ $right }) => ($right ? "flex" : "none")};
  }
`;

export const EachCount = styled.div`
  display: flex;
  flex-flow: column;
  gap: 4px;
`;

export const CountNumber = styled.div`
  font-weight: 700;
  font-size: clamp(18px, 3vw, 28px);
  line-height: 125%;
  color: #666d77;
`;

export const CountDescription = styled.div`
  font-weight: 400;
  font-size: clamp(14px, 1.5vw, 16px);
  line-height: 125%;
  color: #88919f;
`;

export const HeroRight = styled.div`
  display: flex;
  flex-flow: column;
  gap: 32px;
  width: 47%;

  img {
    object-fit: contain;
    max-width: 100%;
    height: max-content;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;
