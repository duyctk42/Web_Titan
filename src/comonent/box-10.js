import React from "react";
import Anh_1 from "../image/icons/Contact-no.svg";
import Anh_2 from "../image/icons/Mail-light.svg";
import Anh_3 from "../image/icons/Name.svg";
import Anh_4 from "../image/icons/Subject.svg";
import Anh_5 from "../image/icons/Capture.PNG";

function Box10() {
  return (
    <div className="box box-10">
      <div className="container">
        <div className="title">
          <h1>REQUEST FOR INFORMATION</h1>
          <p>
            Thank for your interest in Titan. Please fill out the form to tell
            us about your area of needs. Our representative will contact you
            shortly.
          </p>
        </div>
        <form
          name="contactForm"
          onSubmit="return onSubmitContactForm()"
          className="contact-form"
        >
          <div className="table1">
            <div className="cot cot1">
              <div className="image">
                <img src={Anh_3} />
                <input
                  className="input"
                  type="text"
                  name="contactName"
                  id="contactName"
                  placeholder="Name"
                />
              </div>
              <div className="image">
                <img src={Anh_2} />
                <input
                  className="input"
                  type="text"
                  name="contactEmail"
                  id="contactEmail"
                  placeholder="Email"
                />
              </div>
              <div className="image">
                <img src={Anh_1} />
                <input
                  className="input"
                  type="number"
                  name="contactPhone"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div className="cot cot2">
              <div className="image">
                <img src={Anh_4} />
                <input
                  className="input"
                  type="text"
                  name="contactSubject"
                  placeholder="Subject"
                />
              </div>
              <div className="container-text">
                <textarea
                  name="contactDescription"
                  rows="4"
                  placeholder="Description"
                ></textarea>
              </div>
            </div>
            <div className="cot cot3">
              <div className="anh"></div>

              <input
                id="btnSubmitContact"
                type="submit"
                className="request-button"
                value="Request Now"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Box10;
