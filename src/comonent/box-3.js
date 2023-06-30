import React from "react";
import Anh_1 from "../image/box/time.png";
import Anh_2 from "../image/box/teams.png";
import Anh_3 from "../image/box/cost.png";
function Box3() {
  return (
    <div className="box box-3">
      <h2>WE PROVIDE</h2>
      <p>
        We provide flexible business engagement models for offshore software
        testing and development services. They can be altered or combined at any
        stages of the business engagement.
      </p>
      <div className="items">
        <div className="item">
          <img src={Anh_1} />
          <h3>FIXED COST</h3>
          <ul>
            <li>Dedicated professional team work for your projects.</li>
            <li>Virtual extension of your engineering team.</li>
            <li>Flexible task assignments based on your needs.</li>
            <li>Stable and scalable resources.</li>
            <li>Budget is measured in man-months.</li>
            <li>
              The separate team of professionals will work over your project.
            </li>
          </ul>
        </div>
        <div className="item">
          <img src={Anh_2} />
          <h3>TIME & MATERIAL</h3>
          <ul>
            <li>Task assignments are defined clearly at the requirements.</li>
            <li>Project schedule is planned clearly.</li>
            <li>Budget is fixed based on requirements.</li>
            <li>
              Fixed project budget (measured in man hours) and time limits.
            </li>
          </ul>
        </div>
        <div className="item">
          <img src={Anh_3} />
          <h3>SOFTWARE DEVELOPMENT</h3>
          <ul>
            <li>
              Flexible task assignments based on your needs within time limits.
            </li>
            <li>Adjustable and designated resources.</li>
            <li>
              Budget is flexible and can be adjusted based on your requirements.
            </li>
            <li>Stable and scalable resources.</li>
            <li>Budget is measured in man-months.</li>
            <li>
              Project budget is flexible and can be adjusted according to your
              requirements.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Box3;
