import React from "react";
import Anh_1 from "../image/backgrounds/Award_01.png";
import Anh_2 from "../image/backgrounds/Award_03.png";
import Anh_3 from "../image/backgrounds/Award_04.png";
import Anh_4 from "../image/backgrounds/Award_05.png";
import Anh_5 from "../image/backgrounds/Award_08.png";
function Box6() {
  return (
    <div className="box box-6">
      <div className="slider">
        <div className="text">
          <h3>As Recognized By</h3>
        </div>
        <div className="slide">
          <ul>
            <li>
              <img src={Anh_1} />
            </li>
            <li>
              <img src={Anh_2} />
            </li>
            <li>
              <img src={Anh_3} />
            </li>
            <li>
              <img src={Anh_4} />
            </li>
            <li>
              <img src={Anh_5} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Box6;
