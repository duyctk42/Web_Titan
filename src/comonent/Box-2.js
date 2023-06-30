import React from "react";
import Anh_1 from "../image/box/innovation.jpg";
function Box2() {
  return (
    <div className="box box-2">
      <h2>INNOVATIONS</h2>
      <div className="items">
        <div className="item">
          <img src={Anh_1} />
        </div>
        <div className="item">
          <p>
            Develop software applications from business ideas to deployment,
            develop based on product definition, the initial designs, or develop
            modules with multiple teams for concurrent development thus reducing
            time to market.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Box2;
