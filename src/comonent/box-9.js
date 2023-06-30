import React from "react";
import Anh_1 from "../image/backgrounds/alo1.jpg";
import Anh_2 from "../image/backgrounds/alo2.jpg";
import Anh_3 from "../image/backgrounds/alo3.jpg";
function Box9() {
  return (
    <div className="box box-9">
      <div className="box-box">
        <div className="text">
          <h1>NEWS & EVENTS</h1>
        </div>
        <div className="table">
          <div className="table-1">
            <div>
              <img src={Anh_1} />
            </div>
            <div className="post-title">
              <p>5 TECH TRENDS IN HEALTHCARE AND MEDICAL APP DEVELOPMENT</p>
            </div>
            <div className="post-content">
              <p>
                By Admin - 10/06/2021 <br /> There are many medical apps on the
                market; every day there are more and more healthcare startups.
                If you decide to create a medical app, you need to think outside
                the box and you need to....
              </p>
            </div>
          </div>
          <div className="table-1">
            <div>
              <img src={Anh_2} />
            </div>
            <div className="post-title">
              <p>A DEVELOPER’S TALE OF DEADLINES AND FANTASY TIME ESTI …</p>
            </div>
            <div className="post-content">
              <p>
                By Admin - 10/06/2021 <br /> You were asked to write a program,
                and during the discovery phase of the discussions, you were
                asked how long it was going to take.....
              </p>
            </div>
          </div>
          <div className="table-1">
            <div>
              <img src={Anh_3} />
              <div className="post-title">
                <p>A PRACTICAL GUIDE TO BETTER CODE REVIEWS</p>
              </div>
              <div className="post-content">
                <p>
                  By Admin - 10/06/2021 <br /> A CODE REVIEW is a part of the
                  development process in which a developer and their colleagues
                  work together and look for bugs within some code...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box9;
