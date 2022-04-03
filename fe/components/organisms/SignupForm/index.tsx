import { useForm } from "react-hook-form";
import { Button, Input, Form } from "antd";
import { useEffect, useState } from "react";
import useInput from "../../../utils/useInput";
import useSWR from "swr";
import { fetcher } from "../../../utils/fether";
interface IUser {
  isLogin: false;
  info: {
    email: string;
    name: string;
  } | null;
}
const LoginForm = () => {
  // name, email, password
  const { mutate } = useSWR<IUser>("/api/user", fetcher);

  const onSubmit = () => {
    console.log(userName, email, password, passwordCheck);
  };
  const [userName, changeUserName, setUserName] = useInput("");
  const [email, changeEmail, setEmail] = useInput("");
  const [password, changePassword, setPassword] = useInput("");
  const [passwordCheck, changePasswordCheck, setPasswordCheck] = useInput("");

  return (
    <>
      <Form onFinish={onSubmit}>
        <Form.Item label="Username" name="username">
          <Input value={userName} onChange={changeUserName} />
        </Form.Item>
        <Form.Item label="email" name="email">
          <Input value={email} onChange={changeEmail} />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password value={password} onChange={changePassword} />
        </Form.Item>
        <Form.Item label="PasswordCheck" name="passwordCheck">
          <Input.Password
            value={passwordCheck}
            onChange={changePasswordCheck}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            회원가입
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default LoginForm;
