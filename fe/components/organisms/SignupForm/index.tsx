import { useForm } from "react-hook-form";
import { Button, Input, Form } from "antd";
import { useEffect, useState } from "react";
import useInput from "../../../utils/useInput";
import useSWR from "swr";
import { fetcher } from "../../../utils/fether";
import { ErrorMassege } from "./style";

const SignupFrom = () => {
  // name, email, password

  const onSubmit = () => {
    console.log(userName, email, password, passwordCheck);
  };
  const [userName, changeUserName, setUserName] = useInput("");
  const [email, changeEmail, setEmail] = useInput("");
  const [password, changePassword, setPassword] = useInput("");
  const [passwordCheck, changePasswordCheck, setPasswordCheck] = useInput("");
  const [passwordCheckError, setPasswordCheckError] = useState(true);
  const [userNameError, setUserNameError] = useState(true);
  const [emailCheckError, setEmailCheckError] = useState(true);

  useEffect(() => {
    //userName
    if (userName.trim().length) setUserNameError(false);
    else setUserNameError(true);

    //email
    if (email.trim().length) setEmailCheckError(false);
    else setEmailCheckError(true);

    // password
    if (password !== passwordCheck) {
      setPasswordCheckError(true);
    } else {
      setPasswordCheckError(false);
    }
  }, [userName, email, passwordCheck, password]);

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
          {passwordCheckError && (
            <ErrorMassege>password 가 다릅니다</ErrorMassege>
          )}
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            disabled={userNameError && passwordCheckError && emailCheckError}
          >
            회원가입
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default SignupFrom;
