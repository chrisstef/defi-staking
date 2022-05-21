import React, { Component } from "react";

class Airdrop extends Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: 60 }; // the airdrop will run 60 sec after staking.
    this.timer = 0; // Initialize timer.
    this.startTimer = this.startTimer.bind(this); // We bind this keyword (start time).
    this.countDown = this.countDown.bind(this);
  }

  // Build startTimer functionality.
  startTimer() {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000); // 1000 --> take us down one seconds at a time.
    }
  }

  // Build countdown functionallity.
  countDown() {
    // 1. countdown one second at a time.
    let seconds = this.state.seconds - 1;

    this.setState({
      time: this.secondstoTime(seconds),
      seconds: seconds,
    });

    // 2. Stop counting when we hit zero.
    if (seconds === 0) {
      this.props.issueTokens();
      clearInterval(this.timer);
    }
  }

  secondstoTime(secs) {
    let hours, seconds, minutes;
    hours = Math.floor(secs / (60 * 60));

    let devisor_for_minutes = secs % (60 * 60);
    minutes = Math.floor(devisor_for_minutes / 60);

    let devisor_for_seconds = devisor_for_minutes % 60;
    seconds = Math.ceil(devisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondstoTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  airdropReleaseTokens() {
    let stakingB = this.props.stakingBalance;
    if (stakingB >= "50000000000000000000") {
      // If staking balance is more than 50 usdt, begin the airdrop of reward token.
      this.startTimer();
    }
  }

  render() {
    this.airdropReleaseTokens();
    return (
      <div style={{ color: "white" }}>
        {this.state.time.m}:{this.state.time.s}
      </div>
    );
  }
}

export default Airdrop;
