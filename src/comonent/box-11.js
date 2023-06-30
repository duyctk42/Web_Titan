import React from "react";
import Anh_1 from "../image/icons/map.svg";
import Anh_2 from "../image/icons/Mail-1.svg";
import Anh_3 from "../image/icons/Skype.svg";
import Anh_4 from "../image/icons/talk-with-us.svg";
import Anh_5 from "../image/icons/chat-with-us.svg";

function Box11() {
  return (
    <div className="box11">
      <div className="footer-google-map">
        <div className="content-text">
          <div className="cot cot1">
            <p>CONTACT US</p>
          </div>
          <div className="cot cot2">
            <span>FIND OUT US ON GOOGLE MAP</span>
            <div>
              <img src={Anh_1} />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-location">
        <div className="table-1">
          <div className="cot cot1">
            <h3>Headquarters:</h3>
            <p>
              40 Lam Son Street, Ward 2, Tan Binh District, Ho Chi Minh City,
              Vietnam
            </p>
            <a>Tel: +84-28-3997-7233</a>
          </div>
          <div className="cot cot2">
            <h3>Branch office:</h3>
            <p>
              50 Cuu Long Street, Ward 2, Tan Binh District, Ho Chi Minh City,
              Vietnam.
            </p>
            <a>Tel: +84-28-3997-7233</a>
          </div>
          <div className="cot cot3">
            <h3>Headquarters:</h3>
            <p>9/1/2 Tran Dai Nghia Street, Ward 8, Da Lat City, Vietnam.</p>
            <a>Tel: +84-26-3382-8379</a>
          </div>
        </div>
        <div className="table-2">
          <div className="cot cot1">
            <h3>General Inquiries:</h3>
            <div className="icon-cot1">
              <img src={Anh_2} />
              <a href="#">info@titancorpvn.com</a>
            </div>
            <div className="icon-cot1">
              <img src={Anh_3} />
              <a href="#">info@titancorpvn.com</a>
            </div>
          </div>
          <div className="cot cot2">
            <h3>Sales & Support:</h3>
            <div className="icon-cot1">
              <img src={Anh_2} />
              <a href="#">info@titancorpvn.com</a>
            </div>
            <div className="icon-cot1">
              <img src={Anh_2} />
              <a href="#">info@titancorpvn.com</a>
            </div>
          </div>
          <div className="cot cot3">
            <h3>Online Support:</h3>
            <div>
              <div>
                {" "}
                <button>
                  <img src={Anh_4} />
                  <span>Talk With Us</span>
                </button>
                <button>
                  <img src={Anh_5} />
                  <span>Chat With Us</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box11;
