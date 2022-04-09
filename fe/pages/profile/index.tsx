import axios from "axios";
import React, { useEffect } from "react";
import AppLayOut from "../../components/templates/AppLayOut";
import useSWR from "swr";
import { fetcher } from "../../utils/fether";
import { IUser, IFollowData } from "../../types";
import { useRouter } from "next/router";
import FlowingList from "../../components/organisms/FlowingList";
import SearchBar from "../../components/molecules/SerchBar";

const Profile = () => {
  const router = useRouter();
  const { data, error, isValidating } = useSWR<IUser>("/api/user", fetcher);
  const {
    data: followData,
    mutate,
    error: followDataError,
    isValidating: followDataLoading,
  } = useSWR<IFollowData>("api/followData", fetcher);
  console.log("profile page isValidaing", isValidating);

  if (isValidating) return <div>Loding...</div>;

  if (!isValidating) {
    return (
      <AppLayOut>
        <SearchBar />
        <div>
          <h3>followList</h3>
          <FlowingList
            followData={followData?.followList}
            me={data}
            loading={followDataLoading}
          />
        </div>
        <div>
          <h3>followingList</h3>
          <FlowingList
            followData={followData?.followingList}
            me={data}
            loading={followDataLoading}
          />
        </div>
      </AppLayOut>
    );
  }
};

export default Profile;
