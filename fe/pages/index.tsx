import React from "react";

// component templete
import AppLayOut from "../components/templates/AppLayOut";
import ContentAddForm from "../components/organisms/ContentAddForm";

const Home = () => {
  return (
    <AppLayOut>
      <h1>Hello next from wooram</h1>
      <ContentAddForm />
    </AppLayOut>
  );
};

export default Home;
