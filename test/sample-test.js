const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("EvilNFT", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("EvilNFT");
    const greeter = await Greeter.deploy();
    await greeter.deployed();
  });
});
