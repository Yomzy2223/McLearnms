import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;

  background: linear-gradient(
    111.49deg,
    rgba(255, 255, 255, 0.4) -8.95%,
    rgba(212, 223, 241, 0.1) 114%
  );
  backdrop-filter: blur(50px);
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0px;
  gap: clamp(12px, 1.5vw, 20px);
  color: #0041aa;
  font-weight: 700;
  font-size: clamp(16px, 2vw, 22px);

  img {
    width: clamp(24px, 3vw, 40px);
    height: auto;
  }

  @media and (max-width: 400px) {
    font-family: "Calibri";
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(20px, 3.5vw, 56px);
  color: #060c3c;

  line-height: 125%;
  padding: 0px;

  a {
    display: flex;
    align-items: center;
    gap: 9px;
    font-size: clamp(16px, 1.7vw, 18px);
    font-weight: 400;
  }

  @media screen and (max-width: 650px) {
    display: none;
  }
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
  width: clamp(160px, 17vw, 190px);

  @media screen and (max-width: 650px) {
    display: none;
  }
`;

export const Menu = styled.div`
  margin-top: 5px;

  @media screen and (min-width: 651px) {
    display: none;
  }
`;
