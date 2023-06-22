import styled from "styled-components";

export const FooterWrapper = styled.div``;

export const SectionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: auto;
  padding-block: 110px clamp(45px, 10vw, 140px);

  > div {
    max-width: 90%;
  }

  img {
    position: absolute;
    right: 0;
    top: 0;
    width: 70%;
    z-index: -1;

    @media screen and (max-width: 600px) {
      top: 20%;
    }
  }
`;

export const Body = styled.div`
  p {
    margin-block: 24px 48px;
    text-align: center;
  }
`;

export const Button = styled.div`
  max-width: 365px;
  margin: auto;
`;

export const MainFooterWrapper = styled.div`
  display: flex;
  flex-flow: column;
  background: #0041aa;
  margin-inline: clamp(-60px, -4vw, -16px);
  padding-bottom: 73px;
`;

export const FooterContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  gap: clamp(80px, 10vw, 128px);

  margin-block: clamp(21px, 3vw, 46px);
  margin-inline: clamp(0px, 6vw, 100px);
  padding: 0 clamp(16px, 2vw, 32px) 28px;
  border-bottom: 1px solid #d4dff155;
  color: #ffffffdd;

  @media screen and (max-width: 950px) {
    flex-flow: column;
  }
`;

export const FooterLeft = styled.div`
  flex: 1;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(16px, 1.8vw, 20px);
  margin-bottom: 32px;
  font-weight: 700;
  font-size: 22px;
  line-height: 125%;
  color: #fff;
`;

export const Info = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 160%;
`;

export const Connect = styled.div`
  display: flex;
  flex-flow: column;
  gap: 16px;

  margin-top: 40px;
  font-weight: 400;
  font-size: 16px;
  font-family: "Calibri";
`;

export const FooterRight = styled.div`
  display: flex;
  flex-flow: row;
  flex: 1;
  justify-content: space-between;
  gap: 16px;
  /* width: 60%; */

  @media screen and (max-width: 450px) {
    flex-flow: column;
  }
`;

export const EachList = styled.div`
  display: flex;
  flex-flow: column;
  gap: 32px;
`;

export const EachListTitle = styled.div`
  font-weight: 700;
  color: #fff;
`;

export const EachListBody = styled.ul`
  display: flex;
  flex-flow: column;
  gap: 16px;
  list-style: none;
`;

export const Copyright = styled.p`
  color: #d4dff1;
  margin: auto;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  opacity: 0.8;
`;
