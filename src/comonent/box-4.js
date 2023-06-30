import React from "react";
import Anh_1 from "../image/slider/http___mindgeek_com_.jpeg";
import Anh_2 from "../image/slider/http___superhippo_com_.jpeg";
import Anh_3 from "../image/slider/http___www_collectiveclarity_net_.jpeg";
import Anh_4 from "../image/slider/http___www_digitalperformance_de_.jpeg";
import Anh_5 from "../image/slider/http___www_greenpacket_com_.jpeg";
import Anh_6 from "../image/slider/http___www_saigonx_com_.jpeg";
import Anh_7 from "../image/slider/http___www_techwisenetworks_com_.jpeg";
import Anh_8 from "../image/slider/http___www_televz_com_.jpeg";
import Anh_9 from "../image/slider/https___www_bgx_ai_.jpeg";
import Anh_10 from "../image/slider/https___www_mobileiron_com_.jpeg";
import Anh_11 from "../image/icons/back.svg";
import Anh_12 from "../image/icons/next.svg";

export default class Slider3 extends React.Component {
  constructor(props) {
    super(props);
    this.currentSubSlider1Item = 1;
    this.subSlider1ItemCount = 10;
    setInterval(() => {
      this.nextSubSlider1(
        this.currentSubSlider1Item,
        this.subSlider1ItemCount,
        document.getElementsByClassName("khung_Nhin")[0].clientWidth / 4
      );
    }, 3000);
  }
  nextSubSlider1(currentSubSlider1Item, subSlider1ItemCount, width) {
    if (currentSubSlider1Item === subSlider1ItemCount - 4) {
      this.currentSubSlider1Item = 1;
    } else {
      this.currentSubSlider1Item++;
    }
    let leftPosition = (this.currentSubSlider1Item - 1) * width;
    let subSlider1Element = document.getElementById("left");
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
      this.currentSubSlider1Item = subSlider1ItemCount - 4;
    } else {
      this.currentSubSlider1Item--;
    }
    let leftPosition = (this.currentSubSlider1Item - 1) * width;
    let subSlider1Element = document.getElementById("left");
    if (subSlider1Element) {
      if (this.currentSubSlider1Item === 1) {
        subSlider1Element.style.left = "0";
      } else {
        subSlider1Element.style.left = "-" + leftPosition + "px";
      }
    }
  }
  loadSubSlider() {
    let subSlider1Elm = document.getElementById("left");
    if (subSlider1Elm) {
      subSlider1Elm.style.width =
        (document.getElementsByClassName("khung_Nhin")[0].clientWidth / 4) *
          this.subSlider1ItemCount +
        "px";
    }
    let subSlider1Items = document.querySelectorAll(
      "#sub-slider-1-items .icon-app"
    );
    subSlider1Items.forEach((elm) => {
      elm.style.width = document.getElementById("left").clientWidth / 4 + "px";
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
      <div className="box-4">
        <div className="container">
          <div className="title-venture">
            <h2>OUR CLIENTS</h2>
          </div>
          <div className="khung_Nhin">
            <div className="clients-slider" id="left">
              <div className="item">
                {" "}
                <img src={Anh_1} />
              </div>
              <div className="item">
                {" "}
                <img src={Anh_2} />
              </div>
              <div className="item">
                {" "}
                <img src={Anh_3} />
              </div>
              <div className="item">
                {" "}
                <img src={Anh_4} />
              </div>
              <div className="item">
                {" "}
                <img src={Anh_5} />
              </div>
              <div className="item">
                {" "}
                <img src={Anh_6} />
              </div>
              <div className="item">
                {" "}
                <img src={Anh_7} />
              </div>
              <div className="item">
                {" "}
                <img src={Anh_8} />
              </div>
              <div className="item">
                {" "}
                <img src={Anh_9} />
              </div>
              <div className="item">
                {" "}
                <img src={Anh_10} />
              </div>
            </div>
          </div>
          <button
            className="btn-previus"
            onClick={() =>
              this.backSubSlider1(
                this.currentSubSlider1Item,
                this.subSlider1ItemCount,
                document.getElementsByClassName("khung_Nhin")[0].clientWidth / 4
              )
            }
          >
            <img src={Anh_11} />
          </button>
          <button
            className="btn-next"
            onClick={() =>
              this.nextSubSlider1(
                this.currentSubSlider1Item,
                this.subSlider1ItemCount,
                document.getElementsByClassName("khung_Nhin")[0].clientWidth / 4
              )
            }
          >
            <img src={Anh_12} />
          </button>
        </div>
      </div>
    );
  }
}
