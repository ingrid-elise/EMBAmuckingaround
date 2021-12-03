import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import "./ScrollMagicPracticeCSS.css";

const ClassToggle = () => (
  <div>
    <div className="section" />
    <div id="trigger" />
    <Controller>
      <Scene
        duration={0}
        classToggle="zap"
        triggerElement="#trigger"
        indicators={false}
      >
        <div className="test">Pin Test</div>
      </Scene>
    </Controller>
    <div className="section" />
  </div>
);

export default ClassToggle;
