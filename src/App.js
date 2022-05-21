import React, { Component } from "react";
import Navbar from "./components/Navbar";

import Web3 from "web3";
import "./components/App.css";

import Main from "./components/Main";
import Spinner from "./components/Spinner/Spinner";

// import our smart contract from truffle_abis directory.
import Tether from "./truffle_abis/Tether.json";
import RWD from "./truffle_abis/RWD.json";
import DecentralBank from "./truffle_abis/DecentralBank.json";

import ParticleSettings from "./components/ParticleSettings";

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadBlockchainData() {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    this.setState({ account: accounts[0] });
    const networkId = await web3.eth.net.getId();

    //Load Tether Token.
    const tetherData = Tether.networks[networkId];
    if (tetherData) {
      const tether = new web3.eth.Contract(Tether.abi, tetherData.address);
      this.setState({ tether });
      let tetherBalance = await tether.methods
        .balanceOf(this.state.account)
        .call();
      this.setState({ tetherBalance: tetherBalance.toString() });
    } else {
      window.alert(
        "Tether contract not deployed to current network. Please switch to a compatible network."
      );
    }

    //Load RWD token.
    const rwdTokenData = RWD.networks[networkId];
    if (rwdTokenData) {
      const rwd = new web3.eth.Contract(RWD.abi, rwdTokenData.address);
      this.setState({ RWD });
      let rwdTokenBalance = await rwd.methods
        .balanceOf(this.state.account)
        .call();
      this.setState({ rwdTokenBalance: rwdTokenBalance.toString() });
    } else {
      window.alert(
        "Reward Token contract not deployed to current network. Please switch to a compatible network."
      );
    }

    //Load DecentralBank contract.
    const decentralBankData = DecentralBank.networks[networkId];
    if (decentralBankData) {
      const decentralBank = new web3.eth.Contract(
        DecentralBank.abi,
        decentralBankData.address
      );
      this.setState({ decentralBank });
      let stakingBalance = await decentralBank.methods
        .stakingBalance(this.state.account)
        .call();
      this.setState({ stakingBalance: stakingBalance.toString() });
    } else {
      window.alert(
        "Decentralbank not deployed to current network. Please switch to a compatible network."
      );
    }

    this.setState({ loading: false });
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert("No virtual wallet detected. You should install Metamask!");
    }
  }

  stakeTokens = (amount) => {
    this.setState({ loading: true });
    this.state.tether.methods
      .approve(this.state.decentralBank._address, amount)
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.state.decentralBank.methods
          .depositTokens(amount)
          .send({ from: this.state.account })
          .on("transactionHash", (hash) => {
            this.setState({ loading: false });
            window.location.reload();
          });
      });
  };

  unstakeTokens = () => {
    this.setState({ loading: true });
    this.state.decentralBank.methods
      .unstakeTokens()
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.setState({ loading: false });
        window.location.reload();
      });
  };

  issueTokens = () => {
    this.setState({ loading: true });
    this.state.decentralBank.methods
      .issueTokens()
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.setState({ loading: false });
        window.location.reload();
      });
  };

  claimTokens = () => {
    this.setState({ loading: true });
    this.state.decentralBank.methods
      .claimTokens()
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.setState({ loading: false });
        window.location.reload();
      });
  };

  constructor(props) {
    super(props);
    this.state = {
      account: "0x0",
      tether: {},
      rwd: {},
      decentralBank: {},
      tetherBalance: "0",
      rwdTokenBalance: "0",
      stakingBalance: "0",
      loading: true,
    };
  }

  render() {
    let content;

    this.state.loading
      ? (content = (
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
                    <li>
                      5. Enjoy some particle interactions in the meantime.
                    </li>
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
            <p style={{ color: "white", margin: "32%", padding: "14%" }}>
              <Spinner />
            </p>
          </div>
        ))
      : (content = (
          <Main
            tetherBalance={this.state.tetherBalance}
            rwdBalance={this.state.rwdTokenBalance}
            stakingBalance={this.state.stakingBalance}
            stakeTokens={this.stakeTokens}
            unstakeTokens={this.unstakeTokens}
            decentralBankContract={this.decentralBank}
            issueTokens={this.issueTokens}
            claimTokens={this.claimTokens}
          />
        ));

    return (
      <div className="App" style={{ position: "relative" }}>
        <div style={{ position: "absolute" }}>
          <ParticleSettings />
        </div>
        <Navbar account={this.state.account} />
        <div className="container-fluid mt-5">
          <div className="row">
            <main
              role="main"
              className="col-lg-5 ml-auto mr-auto"
              style={{ maxWidth: "100%", minHeight: "100vm" }}
            >
              <div>{content}</div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
