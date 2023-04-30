import { ethers } from "hardhat";
import { Varibles, Varibles__factory } from "../typechain-types";
async function main() {
  const Varibles:Varibles__factory = await ethers.getContractFactory("Varibles")
  const varibles:Varibles = await Varibles.deploy();

  await varibles.deployed();
  console.log("Variables deployed to",varibles.address);
  
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
