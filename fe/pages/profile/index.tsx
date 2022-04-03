import axios from "axios";
import React, { useEffect } from "react";
import AppLayOut from "../../components/templates/AppLayOut";
import useSWR from "swr";
import { fetcher } from "../../utils/fether";
import { IUser } from "../../types";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  const { data, error, isValidating } = useSWR<IUser>("/api/user", fetcher);
  console.log("profile page isValidaing", isValidating);

  if (isValidating) return <div>Loding...</div>;

  if (!isValidating) {
    return (
      <AppLayOut>
        <div>profile page</div>
      </AppLayOut>
    );
  }
};

export default Profile;
