"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BookSvg from "../../assets/svgs/BookOpen.svg";
import CommonButton from "../buttons/CommonButton";
import { Button, HeaderWrapper, Logo, Menu, Nav } from "./styled";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>
        <Image src={BookSvg} alt="McLearnms" />
        <span>McLearnms</span>
      </Logo>
      <Nav>
        <Link href="#">
          Features <IoIosArrowDown />
        </Link>
        <Link href="#">Pricing</Link>
        <Link href="#">Support</Link>
      </Nav>
      <Button>
        <CommonButton text="Get Started" />
      </Button>
      <Menu>
        <FiMenu color="#333333" size={24} />
      </Menu>
    </HeaderWrapper>
  );
};

export default Header;
