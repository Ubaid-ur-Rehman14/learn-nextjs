#What is hardhat?
Hardhat is a development environment for building, testing, and deploying smart contracts on Ethereum blockchain. It provides a suite of tools and libraries that make it easy for developers to write, compile, and test their smart contracts. It also provides a local blockchain network for testing and debugging smart contracts. Hardhat is commonly used by Solidity developers to build decentralized applications, non-fungible tokens (NFTs), and other blockchain-based projects.


#Why we use hardhat?
hardhat can help developers save time, reduce errors, and improve the quality of their smart contract code.

#Installation
open your Termial and write the following coommands


#creating a folder
mkdir hardhat-tutorial
cd hardhat-tutorial

#For package.json
npm init

#installing hardhat
npm install --save-dev hardhat


#to start hardhat project
npx hardhat

👷 Welcome to Hardhat v2.9.9 👷‍

? What do you want to do? …
  Create a JavaScript project
  Create a TypeScript project
❯ Create an empty hardhat.config.js
  Quit
  
  
  In this tutorial we are going to use our recommended plugin, 
@nomicfoundation/hardhat-toolbox
, which has everything you need for developing smart contracts.


npm install --save-dev @nomicfoundation/hardhat-toolbox

