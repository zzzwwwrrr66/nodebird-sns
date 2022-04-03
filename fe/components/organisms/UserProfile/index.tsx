import { VFC, useState } from "react";
import { Button } from "antd";
import axios from "axios";
import useSWR from "swr";
import { fetcher } from "../../../utils/fether";
interface IProps {
  userInfo: {
    name: string;
    email: string;
  };
}
interface IUser {
  isLogin: false;
  info: {
    email: string;
    name: string;
  } | null;
}

const UserProfile: VFC<IProps> = ({ userInfo }) => {
  const [buttonLoading, setButtonLoading] = useState(false);
  const { mutate } = useSWR<IUser>("/api/user", fetcher);
  const onLogOut = () => {
    setButtonLoading(true);
    axios.post("api/logout").then((res) => {
      setButtonLoading(false);
      mutate();
    });
  };

  return (
    <>
      <div>name: {userInfo.name}</div>
      <div>email: {userInfo.email}</div>

      <Button onClick={onLogOut} loading={buttonLoading}>
        {buttonLoading ? "Loading..." : "Logout"}
      </Button>
    </>
  );
};
export default UserProfile;
