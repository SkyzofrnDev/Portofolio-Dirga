import React from "react";
import { Copyright, FollowingCursor, Footer, Navbar } from "../../components";
import {
  About,
  Certificate,
  Herosection,
  JobTitle,
  Journey,
  MyProject,
  MySkill,
  Qoute,
} from "../../layout";

const Portfolio = () => {
  return (
    <>
      <FollowingCursor />
      <div className="">
        <div className="bg-[url('/Background.png')] bg-cover">
          <div className="">
            <Navbar />
          </div>
          <Herosection />
          <About />
        </div>
        <JobTitle />
        <Certificate />
        <MyProject />
        <Journey />
        <MySkill />
        <Qoute>
          Unlock your true potential. Believe, take action, and achieve
          greatness, because you are unstoppable.
        </Qoute>
        <Footer />
        <Copyright />
      </div>
    </>
  );
};

export default Portfolio;
