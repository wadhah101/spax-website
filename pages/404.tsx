import { NextPage } from "next";
import React from "react";
import NotFoundComp from "../components/app/NotFoundComp";
import BasePage from "../components/shared/BasePage";

const NotFound: NextPage = () => {
  return (
    <BasePage>
      <NotFoundComp />
    </BasePage>
  );
};

export default NotFound;
