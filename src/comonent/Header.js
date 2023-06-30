import React from "react";
import Anh from "../image/icons/menu.svg";
import Anh1 from "../image/backgrounds/Flag.svg";

class Header extends React.Component {
  state = { backgroundColor: "#12203a" };

  CrollEven = (e) => {
    if (window.scrollY > 0) {
      this.setState({ backgroundColor: "#12203a" });
    } else {
      this.setState({ backgroundColor: "" });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.CrollEven);
  }
  componentWillUnmount() {
    window.addEventListener("scroll", this.CrollEven);
  }

  render() {
    return (
      <div
        className="header"
        id="main-header"
        style={{ backgroundColor: this.state.backgroundColor }}
      >
        <div className="logo"></div>
        <nav>
          <ul>
            <li id="home">
              {" "}
              <a href="./duy1.html">HOME</a>
            </li>
            <li>
              <a href="./duy1.html">
                <img src={Anh1} />
                <span>日本</span>{" "}
              </a>
            </li>

            <li>
              <a href="./duy1.html">
                <img src={Anh} />
              </a>
            </li>
            <li>
              <button
                id="btn-menu"
                className="btn-menu"
                onClick={this.props.renderLogin}
              >
                Login
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Header;
