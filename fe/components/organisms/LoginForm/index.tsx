import { useForm } from "react-hook-form";
import { Button, Input, Form } from "antd";
import { useEffect, useState } from "react";
import useInput from "../../../utils/useInput";
import Link from "next/link";
import useSWR from "swr";
import axios from "axios";
import { fetcher } from "../../../utils/fether";

interface IUser {
  isLogin: boolean;
  info: {
    email: string;
    name: string;
  };
}

const LoginForm = () => {
  const { mutate } = useSWR<IUser>("/api/user", fetcher);
  // name, email, password
  const [buttonLoading, setButtonLoading] = useState(false);

  const onSubmit = () => {
    if (!email.trim() || !password.trim()) return;

    setButtonLoading(true);
    axios
      .post("api/login", { email, password })
      .then((res) => res.data)
      .then((data: IUser) => {
        setButtonLoading(false);
        mutate();
      });
  };
  const [email, changeEmail, setEmail] = useInput("");
  const [password, changePassword, setPassword] = useInput("");

  return (
    <>
      <Form onFinish={onSubmit}>
        <Form.Item label="email" name="email">
          <Input value={email} onChange={changeEmail} />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password value={password} onChange={changePassword} />
        </Form.Item>
        <div>
          <Button type="primary" htmlType="submit" loading={buttonLoading}>
            {buttonLoading ? "Loading..." : "Login"}
          </Button>
          <Button type="ghost">
            <Link href="/signup">
              <a>회원가입</a>
            </Link>
          </Button>
        </div>
      </Form>
    </>
  );
};
export default LoginForm;
