<p align="center" width="200">
<img src="/src/bank.png" alt="Alt text" title="Optional title">
</p>


## Summary ⚡

A Decentralized Finance app where users are being airdropped tokens as a reward for staking.

It's main focus is to demonstrate the fundamentals of staking/yield-farming.

Read through __Usage__ and __Important Notes__ before trying your self.

In the near future, the Dapp will exist in a broader DAO environment.

Reward tokens will then have use case (such as voting power, access to specific social events etc).


The Dapp is currently been deployed on the folllowing test networks:

- **[Mumbai](https://mumbai.polygonscan.com/)**
- **[Rinkeby](https://www.rinkeby.io/#stats)**
- **[Stardust](https://stardust-explorer.metis.io/)**
- **[Meter](https://scan-warringstakes.meter.io/)**


It allows us to:

- `stakeTokens`: Add a token to the staking contract for yield farming.

- `unStakeTokens`: Remove tokens from the staking contract.

- `claimTokens`: Mint mock USDT required for staking.

- `issueTokens`: Issue a reward to the users who are staking.


For the above interactions with the blockchain, we created 3 __smart contracts__ namely:

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

- **[Mumbai](https://mumbai.polygonscan.com/)**
- **[Rinkeby](https://www.rinkeby.io/#stats)**
- **[Stardust](https://stardust-explorer.metis.io/)**
- **[Meter](https://scan-warringstakes.meter.io/)**

To add a network, I would personally recommend to read through this page: **[Chainlist](https://chainlist.org/)**.

After you succesfully connect, mint some free mUSDT and stake it. The airdrop will occur every 1 min.

The amount of reward tokens (RWD) being airdropped, equals to __one fifth__ of the amount of mUSDT being staked. 
__( RWD = mUSDT/5 )__.

Patiently wait between transactions and feel free to interact with the blockchain in any way you want :)



## Important Notes ⚠

__- To prevent crashing, staked mUSDT amount should be less than 60. The app serves as a demonstration of yield farming after all).__

__- Do NOT proceed if MetaMask reports error (with huge gas cost). It means you did something wrong!__

__- ALWAYS wait for a transaction to finish before moving to a new one. You don't want to block your wallet.__

__- Refresh the page after successful transactions if the frontend is not updated automatically.__



## Developer Docs 💻

1. Please install or have installed the following: [nodejs](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/package/npm)


2. Install [Truffle](https://trufflesuite.com/docs/truffle/getting-started/installation/), if you haven't already. Learn more [here](https://trufflesuite.com/).


3. Download and install [Ganache](https://trufflesuite.com/docs/ganache/quickstart/). 


4. Clone this repo

```
git clone https://github.com/defi-staking
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



## Tests ✔

__Truffle suite__ is ideal for testing our smart contracts. 

The subfoloder `test`, contains custom tests I wrote such as:

- Names of the contracts match before and after deployment.
- DecentralBank is being sent the tokens during the initial Migration.
- DecentralBank functionalities are working properly. And more..

<img src="/public/defi-tests1.png" alt="Alt tests" title="tests">



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

<img src="/public/defi-deploy.png" alt="Alt deploy" title="deploy">



## Future ideas 💡

The are currently a lot of idead to be implemented such as:

- Transition the dapp to exist inside a __DAO__-native environment.

- Render different __apps__ for each __unique__ network.

- Add __claim RWD tokens__ button and functionality.

- Provide the option of __unstaking specific amount__ of tokens instead of all.

- Allow bigger amounts of tokens to be staked in order for stakers to earn more juicy rewards.

- Add __color theme switcher__.



## Stack Used ⚙

```
- React.js
- Bootstrap
- Metamask
- Solidity
- Truffle
- Ganache
- Vercel
- Web3
- Git
```



## License 🧾

This project is licensed under the [MIT license](LICENSE).
