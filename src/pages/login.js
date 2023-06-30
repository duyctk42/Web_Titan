import React from "react";
import userAPI from "../services/user";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  validateForm() {
    return true;
  }

  handleLogin() {
    let user = { userName: "Huy", passWord: "123456" };
    let isValid = this.validateForm(user);

    if (isValid) {
      let response = userAPI.login(user);
      if (response) {
        alert("Login thành công");
        this.props.handleCloseModal();
      } else {
        alert("Login thất bại");
      }
    }
  }

  render() {
    if (this.props.renderLogin) {
      return (
        <div className="loginPage">
          <div class="login-box">
            <h2>Login</h2>
            <form>
              <div class="user-box">
                <input type="text" name="" required="" />
                <label>Username</label>
              </div>
              <div class="user-box">
                <input type="password" name="" required="" />
                <label>Password</label>
              </div>
            </form>
            <div className="button">
              <button className="button1" onClick={this.handleLogin}>
                Login
              </button>
              <button onClick={this.props.handleCloseModal}>Close</button>
            </div>
          </div>
        </div>
      );
    }

    return null;
  }
}

export default Login;
