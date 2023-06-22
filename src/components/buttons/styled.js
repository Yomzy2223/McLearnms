"use client";
import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  transition: 0.3s ease all;

  color: #fff;
  background: #0041aa;
  border-radius: 8px;
  height: 44px;

  font-size: clamp(14px, 1.5vw, 16px);
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }
  :active {
    opacity: 0.7;
    scale: 0.9;
  }
`;
