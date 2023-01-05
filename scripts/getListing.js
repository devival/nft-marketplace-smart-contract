const { ethers, network } = require("hardhat")

const TOKEN_ID = 0

async function getPrice() {
    console.log("Checking Listing...")
    const nftMarketplace = await ethers.getContract("NftMarketplace")
    const basicNft = await ethers.getContract("BasicNft")
    const tx = await nftMarketplace.getListing(basicNft.address, TOKEN_ID)
    //await tx.wait(1)
    console.log("Marketplace address = ", nftMarketplace.address.toString())
    console.log("Price of the NFT = ", tx.price.toString())
}

getPrice()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
