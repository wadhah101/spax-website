import { NextPage } from "next";
import React from "react";
import Banner from "../components/pages/challenge/Banner";
import BasePage from "../components/shared/BasePage";

const challenge: NextPage = () => {
  return (
    <BasePage>
      <Banner />
    </BasePage>
  );
};

export default challenge;
