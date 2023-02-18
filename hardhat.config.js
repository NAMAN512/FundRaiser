require("@nomiclabs/hardhat-waffle");

// require('dotenv').config({path: './.env.local'});

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts){
    console.log(account.address);
  }
});

// const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "polygon",
  networks: {
    hardhat: {},
    polygon: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/cS4uPBtW8x-7Wx6wxR8kMOIBC286wOU4",
      accounts: ["6620ca6d1c4ab63414ba892e973f1140ee7c627027b60101b731688edd0b7c90"]
    }
  }
};

