import { VFC, useState } from "react";
import { Button, Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import axios from "axios";
import useSWR from "swr";
import { fetcher } from "../../../utils/fether";
import { IUser } from "../../../types";
const { Meta } = Card;

interface IProps {
  userInfo: {
    name: string;
    email: string;
  };
}

const UserProfile: VFC<IProps> = ({ userInfo }) => {
  const [buttonLoading, setButtonLoading] = useState(false);
  const { data: userData, mutate } = useSWR<IUser>("/api/user", fetcher);

  const onLogOut = () => {
    setButtonLoading(true);
    axios.post("api/logout").then((res) => {
      setButtonLoading(false);
      mutate();
    });
  };

  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />
          {/* {me.Posts.length} */}
        </div>,
        <div key="following">
          팔로잉
          <br />
          {/* {me.Followings.length} */}
        </div>,
        <div key="follower">
          팔로워
          <br />
          {/* {me.Followers.length} */}
        </div>,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title={userInfo.name}
        description={userInfo.email}
      />
      <Button onClick={onLogOut} loading={buttonLoading}>
        {buttonLoading ? "Loading..." : "Logout"}
      </Button>
    </Card>
  );
};
export default UserProfile;
