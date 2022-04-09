import React, { VFC } from "react";
import { List, Card } from "antd";
import useSWR from "swr";
import { fetcher } from "../../../utils/fether";
import { IFollowData, IUser } from "../../../types/index";

interface IProps {
  me: IUser;
  followData: { nickname: string }[];
  loading: boolean;
}
const FlowingList: VFC<IProps> = ({ followData, me, loading }) => {
  return (
    <List
      loading={loading}
      grid={{ gutter: 16, column: 3 }}
      dataSource={followData}
      renderItem={(item) => (
        <List.Item>
          <Card title={item.nickname}>Card content</Card>
        </List.Item>
      )}
    />
  );
};
export default FlowingList;
