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
import Test from "../Test/Test";

const Portfolio = () => {
  
  return (
    <>

    <FollowingCursor/>
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
        <MySkill/>
        <Qoute />
        <Footer />
        <Copyright />
      </div>
    </>
  );
};

export default Portfolio;
