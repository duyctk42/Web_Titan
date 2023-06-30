import "./App.css";
import React from "react";
import Header from "../src/comonent/Header";
import TopSlider from "../src/comonent/Slider";
import Slider1 from "../src/comonent/Slider1";
import Slider3 from "../src/comonent/Slider3";
import LoginModal from "../src/pages/login";
import Box2 from "../src/comonent/Box-2";
import Box3 from "../src/comonent/box-3";
import Box4 from "../src/comonent/box-4";
import Box5 from "../src/comonent/box-5";
import Box6 from "../src/comonent/box-6";
import Box7 from "../src/comonent/box-7";
import Box8 from "../src/comonent/box-8";
import Box9 from "../src/comonent/box-9";
import Box10 from "../src/comonent/box-10";
import Box11 from "../src/comonent/box-11";
import Box12 from "../src/comonent/box-12";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderPage: "",
    };

    this.renderLogin = this.renderLogin.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  renderLogin() {
    this.setState({ renderPage: "login" });
  }

  handleCloseModal() {
    this.setState({ renderPage: "" });
  }

  render() {
    let { renderPage } = this.state;
    return (
      <div className="App">
        <Header renderLogin={this.renderLogin} />
        <TopSlider />
        <Slider1 />
        <Slider3 />
        <LoginModal
          renderLogin={renderPage === "login"}
          handleCloseModal={this.handleCloseModal}
        />
        <Box2 />
        <Box3 />
        <Box4 />
        <Box5 />
        <Box6 />
        <Box7 />
        <Box8 />
        <Box9 />
        <Box10 />
        <Box11 />
        <Box12 />
      </div>
    );
  }
}

export default App;
