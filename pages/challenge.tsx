import { NextPage } from "next";
import React from "react";
import Banner from "../components/pages/challenge/Banner";
import Goal from "../components/pages/challenge/Introduction";
import PitchCompetition from "../components/pages/challenge/PitchCompetition";
import BasePage from "../components/shared/BasePage";

const challenge: NextPage = () => {
  return (
    <BasePage>
      <Banner />
      <Goal />
      <PitchCompetition />
    </BasePage>
  );
};

export default challenge;
