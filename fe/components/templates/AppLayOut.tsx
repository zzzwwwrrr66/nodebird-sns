import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { DatePicker } from "antd";

import { Menu, Row, Col, Input } from "antd";

// organisms
import LoginForm from "../organisms/LoginForm/";
import UserProfile from "../organisms/UserProfile";
// molecules
import Nav from "../molecules/Nav";
import useSWR from "swr";
import { fetcher } from "../../utils/fether";

interface IUser {
  isLogin: false;
  info: {
    email: string;
    name: string;
  } | null;
}

const AppLayOut = ({ children }) => {
  const { data: userData, error } = useSWR<IUser>("/api/user", fetcher);
  return (
    <>
      <Nav />
      <Row gutter={8} style={{ padding: "10px" }}>
        <Col xs={24} md={6}>
          {userData?.isLogin ? (
            <UserProfile userInfo={userData?.info} />
          ) : (
            <LoginForm />
          )}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <div>
            <li>
              <a
                href={"https://zzzwwwrrr66.github.io/pf-wooram-r"}
                target="_blank"
              >
                Portfolo
              </a>
            </li>
            <li>
              <a
                href={"https://github.com/zzzwwwrrr66?tab=repositories"}
                target="_blank"
              >
                git hub
              </a>
            </li>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AppLayOut;
