const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["cat", "bull", "bear"],
    [
      "https://i.imgur.com/NMN73lp.jpeg",
      "https://i.imgur.com/2a8WsxN.jpeg",
      "https://i.imgur.com/3jxqrKP.jpeg",
    ],
    [300, 200, 100],
    [20, 50, 100],
    "Big Boss",
    "https://full-count.jp/wp-content/uploads/2021/11/06152945/20211106_shinjo2_ay-560x373.jpg",
    10000,
    50
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  //   const tokenUri = await gameContract.tokenURI(1);
  //   console.log(`Token URI: ${tokenUri}`);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
