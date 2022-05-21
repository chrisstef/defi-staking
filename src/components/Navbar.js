import React, { Component } from "react";
import bank from "../bank.png";

// A fancy function to shorten someones wallet address, no need to show the whole thing.
const account = (str) => {
  return str.substring(0, 5) + "..." + str.substring(str.length - 4);
};

class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-dark fixed-top shadow p-0"
        style={{
          backgroundColor: "#8991D3",
          height: "49px",
          opacity: ".85",
        }}
      >
        <a
          href="/#"
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          style={{ color: "white" }}
        >
          <img
            src={bank}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="bank"
          />
          &nbsp; defi-staking-app
        </a>
        <ul className="navbar-nav px-3">
          <li className="text-nowrap d-done nav-item d-sm-none d-sm-block">
            <small style={{ color: "white" }}>
              Address: {account(this.props.account)}{" "}
            </small>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
