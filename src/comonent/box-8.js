import React from "react";
import Anh_1 from "../image/backgrounds/2022.png";
import Anh_2 from "../image/backgrounds/20220607.jpeg";
import Anh_3 from "../image/backgrounds/Titan.jpeg";
function Box8() {
  return (
    <div className="box box-8">
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
              <p>2020 TAX COMPLIANCE AWARDS</p>
            </div>
            <div className="post-content">
              <p>
                Titan Technology Corporation won the “2020 Tax Compliance
                Excellence Award” and the “2020 Taxation Responsibility
                Fulfillment Excellence Awa… ...
              </p>
            </div>
          </div>
          <div className="table-1">
            <div>
              <img src={Anh_2} />
            </div>
            <div className="post-title">
              <p>WELCOMING THE YEAR OF THE TIGER</p>
            </div>
            <div className="post-content">
              <p>
                Tiger is a confident, enthusiastic, courageous, and competitive
                animal. 2022 is the Year of the Tiger. Titan Technology wishes
                you a new yea… ...
              </p>
            </div>
          </div>
          <div className="table-1">
            <div>
              <img src={Anh_3} />
              <div className="post-title">
                <p>CHARITABLE GIVING IN CELEBRATION OF THE YEAR OF TIGER</p>
              </div>
              <div className="post-content">
                <p>
                  Lunar New Year is almost upon us. Family, friends, and
                  spreading goodwill and cheer are what the holidays really
                  mean. Being a socially cons. ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box8;
