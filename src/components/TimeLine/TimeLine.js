import React from "react";
import "./TimeLine.css";

export const TimeLine = () => {
  return (
    <div className="Time_Line">
      <div className="timeline1">
        <div className="container1 left1">
          <div className="date1"></div>
          <i className="icon1 fa fa-home" />

          {/* <h1 className="content1">
           1 januray - 31 march
           </h1> */}
          <div className="content1">
            <h3> 1 januray - 31 march </h3>
            <h2>Research quarter</h2>
            {/* <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
              erat sagittis non. Ut blandit semper pretium.
            </p> */}
            <ul>
              <li>Initial concept</li>
              <li>Focus group testing</li>
              <li>Competitors analysis</li>
            </ul>
          </div>
        </div>
        <div className="container1 right1">
          <div className="date1"></div>
          <i className="icon1 fa fa-gift" />
          <div className="content1">
            <h3> 1 april-30 june </h3>
            <h2>Concept and Selection quarter</h2>
            <ul>
              <li>Concept detalization</li>
              <li>Conceptual art</li>
              <li>Game developer selected</li>
            </ul>
          </div>
        </div>
        <div className="container1 left1">
          <div className="date1"></div>
          <i className="icon1 fa fa-user" />
          <div className="content1">
            <h3> 1 july - 3 september </h3>
            <h2> Building quarter</h2>
            <ul>
              <li>Community building starts</li>
              <li>Gameplay design</li>
              <li>Balance Game engine development (PoC)</li>
            </ul>
          </div>
        </div>
        <div className="container1 right1">
          <div className="date1"></div>
          <i className="icon1 fa fa-running" />
          <div className="content1">
            <h3> 1 october-31 december </h3>
            <h2> Revealing quarter</h2>

            <ul>
              <li>Game trailer reveal</li>
              <li>Whitepaper final version</li>
              <li>Private NFT collection sales</li>
            </ul>
          </div>
        </div>
        <div className="container1 left1">
          <div className="date1"></div>
          <i className="icon1 fa fa-cog" />
          <div className="content1">
            <h3> 1 january-31 december </h3>

            <h2> Q1 2023 </h2>
            <ul>
              <li>Private alpha testing of the game</li>
              <li>First partnerships with companies</li>
              <li>Public NFT collection sales</li>
            </ul>
            <h2> Q2 2023 </h2>
            <ul>
              <li>Private alpha testing of the game</li>
              <li>Offline ...</li>
            </ul>
          </div>
        </div>
        {/* <div className="container1 right1">
          <div className="date1">01 Jan</div>
          <i className="icon1 fa fa-certificate" />
          <div className="content1">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
              erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};
