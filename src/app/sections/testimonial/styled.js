import styled from "styled-components";

export const Testimonial = styled.div`
  background: #d4dff155;
  padding: clamp(32px, 5vw, 74px) clamp(32px, 5vw, 74px);
  margin-inline: clamp(-60px, -4vw, -16px);

  img {
    position: relative;
    left: -25px;
    margin-top: 24px;
    width: clamp(20px, 4vw, 54px);
  }

  .carousel-container {
    margin-top: clamp(16px, 1.8vw, 24px);

    ul {
      display: flex;
    }
    li {
      /* margin-right: 32px; */
    }
  }
  .react-multi-carousel-dot-list {
    margin-top: 50px;
  }
`;
