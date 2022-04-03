import axios from "axios";
import React, { useEffect } from "react";
import AppLayOut from "../../components/templates/AppLayOut";
import useSWR from "swr";
import { fetcher } from "../../utils/fether";

const Profile = () => {
  interface IData {
    wooram: string;
  }
  const { data, error } = useSWR<IData>("/api/profile", fetcher);
  console.log(data.wooram);

  return (
    <AppLayOut>
      <h2>My profile {data?.wooram}</h2>
    </AppLayOut>
  );
};

export default Profile;
