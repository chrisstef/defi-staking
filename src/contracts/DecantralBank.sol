pragma solidity ^0.5.0;

import "./RWD.sol";
import "./Tether.sol";

// Our contract for DecentralBank.
contract DecentralBank {
    string public name = "Decentral Bank";
    address public owner;
    Tether public tether;
    RWD public rwd;
    uint256 public totalStaked;

    // Initialize a stakers array to keep track of them.
    address[] public stakers;

    // Users staking balance.
    mapping(address => uint256) public stakingBalance;
    // mapping list of users who ever staked.
    mapping(address => bool) public hasStaked;
    // mapping list of users who are staking at the moment.
    mapping(address => bool) public isStaking;

    constructor(RWD _rwd, Tether _tether) public payable {
        rwd = _rwd;
        tether = _tether;
        owner = msg.sender;
    }

    // Staking function with upgraded logic.
    function depositTokens(uint256 _amount) public {
        // Require staking amount to be greater than 0.
        require(_amount > 0, "Staking amount cannot be 0");

        // Transfer tether tokens to this contract address for staking.
        tether.transferFrom(msg.sender, address(this), _amount);
        totalStaked = totalStaked + _amount;

        // Update Staking Balance.
        stakingBalance[msg.sender] = stakingBalance[msg.sender] + _amount;

        // If the message sender haven't staked, then we can push our new amount. and update our logic.
        if (!hasStaked[msg.sender]) {
            stakers.push(msg.sender);
        }

        // Update staking balance.
        isStaking[msg.sender] = true;
        hasStaked[msg.sender] = true;
    }

    // unstake tokens
    function unstakeTokens() public {
        uint256 balance = stakingBalance[msg.sender];
        // require the amount to be greater than zero.
        require(balance > 0, "staking balance cannot be less than zero");

        // transfer the tokens to the specified contract address from our bank.
        tether.transfer(msg.sender, balance);
        totalStaked = totalStaked - balance;

        // reset staking balance.
        stakingBalance[msg.sender] = 0;

        // Update Staking Status.
        isStaking[msg.sender] = false;
    }

    // issue airdrop reward for stakers.
    function issueTokens() public {
        // // Only owner can issue airdrop.
        // require(msg.sender == owner, "caller must be the owner");

        // issue tokens to all stakers.
        for (uint256 i = 0; i < stakers.length; i++) {
            // Loop through all the stakers in the array.
            address recipient = stakers[i]; // Those who have stake go to the recipient address.
            uint256 balance = stakingBalance[recipient] / 5; // We set a balance equal to 1/5th of the staking balance to create percentage incentive for stakers.
            if (balance > 0) {
                rwd.transfer(recipient, balance); // Transfer the balance to the recipient.
            }
        }
    }

    // Issue 1000 USDT for everyone entering the app.
    function claimTokens() public {
        // transfer 1000 USDT tokens to the specified contract address from our bank.
        uint256 starting_balance = 50000000000000000000;
        tether.transfer(msg.sender, starting_balance);
    }
}
