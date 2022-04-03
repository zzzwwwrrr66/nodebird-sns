import { Menu, Row, Col, Input } from "antd";
import Link from "next/link";
import styled from "styled-components";

//css
import { SSerchInput, SMenuWrap } from "./StyledComponents";

const Nav = () => {
  return (
    <>
      <SMenuWrap mode="horizontal">
        <Menu.Item key="1">
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/profile">
            <a>profile</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link href="/signup">
            <a>signup</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <SSerchInput />
        </Menu.Item>
      </SMenuWrap>
    </>
  );
};
export default Nav;
