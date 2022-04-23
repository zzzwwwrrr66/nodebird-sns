/*
  data info 
  mainPosts: [{
    User: {
      id: 1,
      nickname: '제로초',
    },
    content: '첫 번째 게시글',
    img: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
  }],
*/
const dummyMainContents = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: "wooram",
      },
      content: "첫 번째 게시글",
      img: "https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726",
    },
  ],
};

const dummyComments = [
  {
    User: {
      nickname: "nero",
    },
    content: "우와 개정판이 나왔군요~",
  },
  {
    User: {
      nickname: "hero",
    },
    content: "얼른 사고싶어요~",
  },
];
import useSWR from "swr";
import { IUser } from "../../../types";
import { fetcher } from "../../../utils/fether";
import { Input, Form, Button } from "antd";
import { useState } from "react";
import useInput from "../../../utils/useInput";

const ContentAddForm = () => {
  const { data } = useSWR<IUser>("/api/user", fetcher);
  const [content, onChangeContent, setContent] = useInput("");

  const addContent = () => {
    console.log("tweet!", content);
    setContent("");
  };

  return (
    <>
      <div>
        <Form onFinish={addContent}>
          <Input.TextArea
            placeholder="add conetnt"
            autoSize={{ minRows: 2, maxRows: 6 }}
            // value={content}
            value={content}
            onChange={onChangeContent}
          />
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};
export default ContentAddForm;
