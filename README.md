<p align="center" width="200">
   <img align="center" width="100" src="https://raw.githubusercontent.com/chrisstef/defi-staking/public/bank.png" />   
</p>

## Summary ⚡

A decentralize finance app built with Ganache, Solidity &amp; React.
Deployed on the folllowing test networks:
- **[Stardust](https://stardust-explorer.metis.io/)**
- **[Mumbai](https://mumbai.polygonscan.com/)**
- **[Meter](https://scan-warringstakes.meter.io/)**
- **[Rinkeby](https://www.rinkeby.io/#stats)**



The dapp allows us to:

- `stakeTokens`: Add a token to the farming contract for yield farming.

- `unStakeTokens`: Remove tokens from the staking contract.

- `claimTokens`: Mint mock USDT required for staking.

- `issueTokens`: Issue a reward to the users who are staking.


For the above interactions with the blockchain, we created 3 smart contracts namely:

- `RWD` : A reward token(RWD), which is being airdropped to the staking addresses.

- `Tether` : A mock Tether stablecoin(mUSDT), which will be used for staking and trigger the above functionality.

- `DecentralBank` : DecentralBank which serves as a decentralized bank, where both tokens 

   have been initially transfered and will use upgraded logic to handle the operations.
   
The total supply of `RWD` and `mUSDT` is 1M tokens and they are located in the `Decentralbank` address.   
   
   

## Live Project 🌐

The deployed dapp can be viewed here: 

https://defi-staking.vercel.app/


## Video Preview 📽

https://youtu.be/k7Vmh-2DWIM



## Usage ⛓

You need to have **[Metamask](https://metamask.io/)** installed and make sure you are connected to one of the following networks:

- **[Stardust](https://stardust-explorer.metis.io/)**
- **[Mumbai](https://mumbai.polygonscan.com/)**
- **[Meter](https://scan-warringstakes.meter.io/)**
- **[Rinkeby](https://www.rinkeby.io/#stats)**

To add a network, I would personally recommend to read through this page: **[Chainlist](https://chainlist.org/)**

After you succesfully connect, mint some free USDT and stake it. The airdrop will occur every 1 min.

Patiently wait between transactions and refresh the page after every interaction with the blockchain in order to update the frontend(if needed).

**(Note: to prevent crashing, USDT amount staked should be less than 60. The app serves as a demonstration of yield farming after all).**



## Developer Docs 💻

1. Please install or have installed the following: [nodejs and npm](https://nodejs.org/en/download/)


2. Install [Truffle](https://trufflesuite.com/docs/truffle/getting-started/installation/), if you haven't already. Learn more [here](https://trufflesuite.com/).


3. Download and install [Ganache](https://trufflesuite.com/docs/ganache/quickstart/). 


4. Clone this repo

```
git clone https://github.com/staking-dapp
defi-staking-app-starter
```

5. Install project packages:

```
npm install
```

6. Start the project:

```
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## Tests ⚠


Truffle suite is ideal for testing our smart contracts. 

The subfoloder `test`, contains custom tests I wrote such as:

- Names of the contracts match before and after deployment.
- DecentralBank is being sent the tokens during the initial Migration.
- DecentralBank functionalities are working properly. And more..

[tests]



## Deployments ✨

The smart contracts have been deployed in the following (test) networks.

### Mumbai:

`DecentralBank` Smart Contract Address:

* https://mumbai.polygonscan.com/address/0xEEA9dE7D00FD7080d67074E57F233151532578AD

`RWD` token Smart Contract Address:

* https://mumbai.polygonscan.com/address/0x253650822be3bea0e210765200514d24a4e265c9

`Tether` token Smart Contract Address:

* https://mumbai.polygonscan.com/address/0xc0a59dd1b11527069411d22b1dc6ca0204f095ec

### Metis(Stardust):

`DecentralBank` Smart Contract Address:

* https://stardust-explorer.metis.io/address/0xEEA9dE7D00FD7080d67074E57F233151532578AD/transactions

`RWD` token Smart Contract Address:

* https://stardust-explorer.metis.io/token/0x253650822bE3bEA0e210765200514D24A4E265C9/token-transfers

`Tether` token Smart Contract Address:

* https://stardust-explorer.metis.io/token/0xC0A59DD1B11527069411D22B1DC6CA0204F095Ec/token-transfers

### Rinkeby:

`DecentralBank` Smart Contract Address:

* https://rinkeby.etherscan.io/address/0x17836fe1234460221167ce4df2390996ae5e5dd4

`RWD` token Smart Contract Address:

* https://rinkeby.etherscan.io/address/0xb44c0447b54ee3152b61d366cfe28f35f61032fa

`Tether` token Smart Contract Address:

* https://rinkeby.etherscan.io/address/0xf5f6b924332c350e3fcd3a50fc94db822f0b760f

### Meter:

`DecentralBank` creation, Smart Contract Transaction:

* https://scan-warringstakes.meter.io/tx/0x1529d8723ad483092514571f7552e5ecb2bdf2ee54560cbdf3658928d285c051

`RWD` token Smart Contract Address:

* https://scan-warringstakes.meter.io/address/0x2491962cfad605acaf55dd114b905556a6888d53

`Tether` token Smart Contract Address:

* https://scan-warringstakes.meter.io/address/0x7e1e5edf904a5a1f901ecef902a8510b60d0c872



## Future ideas 💡

mpla mpla mpla 



## License ✅

This project is licensed under the [MIT license](LICENSE).
