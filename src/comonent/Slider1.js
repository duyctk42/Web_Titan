import React from "react";
import Anh1 from "../image/box/file.png";
import Anh2 from "../image/box/service.png";
import Anh3 from "../image/box/testing.png";
function Slider1() {
  return (
    <div className="box box-1">
      <h2>WE PROVIDE</h2>
      <p>
        Professional and trusted services with cost-effective and exceptional
        expertise to deal with any complexities in scalable projects
      </p>
      <div className="items">
        <div className="item">
          <img src={Anh1} />
          <h3>SOFTWARE DEVELOPMENT</h3>
          <p>
            Develop software applications from business ideas to deployment,
            develop based on product definition, the initial designs, or develop
            modules with multiple teams for concurrent development thus reducing
            time to market.
          </p>
        </div>
        <div className="item">
          <img src={Anh2} />
          <h3>SOFTWARE DEVELOPMENT</h3>
          <p>
            Develop software applications from business ideas to deployment,
            develop based on product definition, the initial designs, or develop
            modules with multiple teams for concurrent development thus reducing
            time to market.
          </p>
        </div>
        <div className="item">
          <img src={Anh3} />
          <h3>SOFTWARE DEVELOPMENT</h3>
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

export default Slider1;
