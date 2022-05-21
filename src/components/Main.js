import React, { Component } from "react";
import tether from "../tether.png";
import Airdrop from "./Airdrop";

class Main extends Component {
  render() {
    return (
      <div>
        <div
          class="card mt-5 text-center"
          style={{
            borderRadius: ".5rem",
            border: "1px solid transparent",
            backgroundColor: "rgba(137, 145, 211, .7)",
            backdropFilter: "blur(0.2rem)",
            boxShadow: "1.3rem 1.3rem 1.3rem rgba(0, 0, 0, 0.1)",
            borderTopColor: "rgba(225, 225, 225, 0.5)",
            borderLeftColor: "rgba(225, 225, 225, 0.5)",
            borderBottomColor: "rgba(225, 225, 225, 0.1)",
            borderRightColor: "rgba(225, 225, 225, 0.1)",
          }}
        >
          <h5 class="card-header" style={{ color: "white" }}>
            Rules
          </h5>
          <div class="card-body">
            <p class="card-text" style={{ color: "white" }}>
              <ul class="list">
                <li>1. Connect your MetaMask wallet to participate.</li>
                <li>
                  2. Live test Networks: Rinkeby, Stardust, Mumbai, Meter.
                </li>
                <li>3. Claim 50 mUSDT for staking.</li>
                <li>4. Stake mUSDT tokens and wait for 1 minute.</li>
                <li>5. Enjoy some particle interactions in the meantime.</li>
                <li>
                  6. Wait until the timer ends and receive an aidrop of RWD.
                </li>
                <li>7. Unstake mUSDT tokens anytime you want.</li>
              </ul>
            </p>
            <a
              href="https://github.com/chrisstef/defi-staking/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
        <div id="content" className="mt-5">
          <button
            type="submit"
            onClick={(event) => {
              event.preventDefault(this.props.claimTokens());
            }}
            className="btn btn-outline-light btn-md btn-block btn-white-space nowrap tr"
          >
            Claim USDT
          </button>
          &nbsp;&nbsp;
          <table className="table text-muted text-center">
            <thead>
              <tr style={{ color: "white" }}>
                <th scope="col">Staking Balance</th>
                <th scope="col">Reward Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ color: "white" }}>
                <td>
                  {window.web3.utils.fromWei(
                    this.props.stakingBalance,
                    "Ether"
                  )}{" "}
                  mUSDT
                </td>
                <td>
                  {window.web3.utils.fromWei(this.props.rwdBalance, "Ether")}{" "}
                  RWD
                </td>
              </tr>
            </tbody>
          </table>
          <div
            className="card mb-2"
            style={{
              borderRadius: ".5rem",
              border: "1px solid transparent",
              backgroundColor: "rgba(137, 145, 211, .7)",
              backdropFilter: "blur(0.2rem)",
              boxShadow: "1.3rem 1.3rem 1.3rem rgba(0, 0, 0, 0.1)",
              borderTopColor: "rgba(225, 225, 225, 0.5)",
              borderLeftColor: "rgba(225, 225, 225, 0.5)",
              borderBottomColor: "rgba(225, 225, 225, 0.1)",
              borderRightColor: "rgba(225, 225, 225, 0.1)",
            }}
          >
            <form
              onSubmit={(event) => {
                event.preventDefault();
                let amount;
                amount = this.input.value.toString();
                amount = window.web3.utils.toWei(amount, "Ether");
                this.props.stakeTokens(amount);
              }}
              className="mb-3"
            >
              <div
                style={{
                  borderSpacing: "0 1em",
                  width: "100%",
                  padding: "0 10px",
                }}
              >
                <span
                  className="float-right"
                  style={{ color: "white", margin: "8px", marginRight: "1px" }}
                >
                  Balance:{" "}
                  {window.web3.utils.fromWei(this.props.tetherBalance, "Ether")}
                </span>
                <div className="input-group mb-4 ml-0.6">
                  <input
                    ref={(input) => {
                      this.input = input;
                    }}
                    type="number"
                    placeholder="0"
                    style={{
                      border: "1px solid azure",
                      borderRadius: ".2rem",
                    }}
                    required
                  />
                  <div className="input-group-open">
                    <div
                      className="input-group-text ml-1"
                      style={{
                        backgroundColor: "rgba(137, 145, 211, 0.38)",
                        cursor: "pointer",
                        boxShadow: "2px 3px 68px -46px rgba(0, 123, 255, 1)",
                        color: "white",
                      }}
                    >
                      <img src={tether} alt="tether" height="25" />
                      &nbsp;&nbsp; mUSDT
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block btn-white-space nowrap"
                >
                  Stake
                </button>
                <button
                  type="submit"
                  onClick={(event) => {
                    event.preventDefault(this.props.unstakeTokens());
                  }}
                  className="btn btn-primary btn-lg btn-block btn-white-space nowrap"
                >
                  Unstake All
                </button>
              </div>
            </form>
            <div className="card-body text-center" style={{ color: "white" }}>
              Airdrop
              <Airdrop
                stakingBalance={this.props.stakingBalance}
                issueTokens={this.props.issueTokens}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
