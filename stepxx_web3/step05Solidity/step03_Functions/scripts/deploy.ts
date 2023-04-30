import { ethers } from "hardhat";
import { Function, Function__factory } from "../typechain-types";
async function main() {
  const Function:Function__factory = await ethers.getContractFactory("Function")
  const functions:Function = await Function.deploy();
  await functions.deployed();
  console.log("Function are deployed to ",functions.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
