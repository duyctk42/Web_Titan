import React from "react";
import Anh_1 from "../image/backgrounds/hiring.jpg";
function Box7() {
  return (
    <div className="box box-7">
      <div className="nice-box">
        <div className="text">
          <h1>As Recognized By</h1>
        </div>
        <div className="table">
          <div>
            <img src={Anh_1} />
          </div>
          <div className="contai">
            <p>
              Titan Technology Corporation is the place where we care about
              individuals. We offer a friendly, challenging, and collaborative
              home, where every staff is well-treated, enjoy valuable benefits
              and willing to share ownership with us. JOIN US
            </p>
            <button>JOIN US</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box7;
