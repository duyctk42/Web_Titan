import React from "react";
import Anh9 from "../image/box/ai.png";
import Anh4 from "../image/box/blockchain.png";
import Anh5 from "../image/box/cloud.png";
import Anh6 from "../image/box/testing (1).png";
import Anh7 from "../image/box/crm.png";
import Anh8 from "../image/box/web.png";
import Anh10 from "../image/box/web.png";
import Anh11 from "../image/box/web.png";
import Anh_1 from "../image/icons/back.svg";
import Anh_2 from "../image/icons/next.svg";

export default class Slider3 extends React.Component {
  constructor(props) {
    super(props);
    this.currentSubSlider1Item = 1;
    this.subSlider1ItemCount = 8;
    setInterval(() => {
      this.nextSubSlider1(
        this.currentSubSlider1Item,
        this.subSlider1ItemCount,
        document.getElementsByClassName("main-khungchua")[0].clientWidth / 3
      );
    }, 5000);
  }
  nextSubSlider1(currentSubSlider1Item, subSlider1ItemCount, width) {
    if (currentSubSlider1Item === subSlider1ItemCount - 3) {
      this.currentSubSlider1Item = 1;
    } else {
      this.currentSubSlider1Item++;
    }
    let leftPosition = (this.currentSubSlider1Item - 1) * width;
    console.log(leftPosition);
    let subSlider1Element = document.getElementById("sub-slider-1-items");
    if (subSlider1Element) {
      if (this.currentSubSlider1Item === 1) {
        subSlider1Element.style.left = "0";
      } else {
        subSlider1Element.style.left = "-" + leftPosition + "px";
      }
    }
  }
  backSubSlider1(currentSubSlider1Item, subSlider1ItemCount, width) {
    if (currentSubSlider1Item === 1) {
      this.currentSubSlider1Item = subSlider1ItemCount - 3;
    } else {
      this.currentSubSlider1Item--;
    }
    let leftPosition = (this.currentSubSlider1Item - 1) * width;
    let subSlider1Element = document.getElementById("sub-slider-1-items");
    if (subSlider1Element) {
      if (this.currentSubSlider1Item === 1) {
        subSlider1Element.style.left = "0";
      } else {
        subSlider1Element.style.left = "-" + leftPosition + "px";
      }
    }
  }
  loadSubSlider() {
    let subSlider1Elm = document.getElementById("sub-slider-1-items");
    if (subSlider1Elm) {
      subSlider1Elm.style.width =
        (document.getElementsByClassName("main-khungchua")[0].clientWidth / 3) *
          this.subSlider1ItemCount +
        "px";
    }
    let subSlider1Items = document.querySelectorAll(
      "#sub-slider-1-items .icon-app"
    );
    subSlider1Items.forEach((elm) => {
      elm.style.width =
        document.getElementById("sub-slider-1").clientWidth / 3 + "px";
    });
  }
  componentDidMount() {
    window.addEventListener("load", this.loadSubSlider);
  }
  componentWillUnmount() {
    window.removeEventListener("unload", this.loadSubSlider);
  }
  render() {
    return (
      <div className="full-box full-box-1">
        <div className="box sub-slider" id="sub-slider-1">
          <h2>DOMAINS & TECHNOLOGIES</h2>
          <div className="items">
            <div className="main-khungchua">
              <div className="khungchua" id="sub-slider-1-items">
                <div className="slide-item">
                  <img src={Anh4} />
                  <h2>Mobile Development</h2>
                  <p>
                    We have expertise in building mobile applications and mobile
                    games on multiple platforms
                  </p>
                </div>
                <div className="slide-item">
                  <img src={Anh5} />
                  <h2>Mobile Development</h2>
                  <p>
                    We have expertise in building mobile applications and mobile
                    games on multiple platforms
                  </p>
                </div>
                <div className="slide-item">
                  <img src={Anh6} />
                  <h2>Mobile Development</h2>
                  <p>
                    We have expertise in building mobile applications and mobile
                    games on multiple platforms
                  </p>
                </div>
                <div className="slide-item">
                  <img src={Anh7} />
                  <h2>Mobile Development</h2>
                  <p>
                    We have expertise in building mobile applications and mobile
                    games on multiple platforms
                  </p>
                </div>
                <div className="slide-item">
                  <img src={Anh8} />
                  <h2>Mobile Development</h2>
                  <p>
                    We have expertise in building mobile applications and mobile
                    games on multiple platforms
                  </p>
                </div>
                <div className="slide-item">
                  <img src={Anh9} />
                  <h2>Mobile Development</h2>
                  <p>
                    We have expertise in building mobile applications and mobile
                    games on multiple platforms
                  </p>
                </div>
                <div className="slide-item">
                  <img src={Anh10} />
                  <h2>Mobile Development</h2>
                  <p>
                    We have expertise in building mobile applications and mobile
                    games on multiple platforms
                  </p>
                </div>
                <div className="slide-item">
                  <img src={Anh11} />
                  <h2>Mobile Development</h2>
                  <p>
                    We have expertise in building mobile applications and mobile
                    games on multiple platforms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="btn-previus"
          onClick={() =>
            this.backSubSlider1(
              this.currentSubSlider1Item,
              this.subSlider1ItemCount,
              document.getElementsByClassName("main-khungchua")[0].clientWidth /
                3
            )
          }
        >
          <img src={Anh_1} />
        </button>
        <button
          className="btn-next"
          onClick={() =>
            this.nextSubSlider1(
              this.currentSubSlider1Item,
              this.subSlider1ItemCount,
              document.getElementsByClassName("main-khungchua")[0].clientWidth /
                3
            )
          }
        >
          <img src={Anh_2} />
        </button>
      </div>
    );
  }
}
