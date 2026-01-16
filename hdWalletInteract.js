const IPFSStorage = artifacts.require("IPFSStorage");

async function main(callback) {
    try {
        console.log("============================================================");
        console.log("HD WALLET INTERACTION SCRIPT");
        console.log("============================================================");

        // Step 1: Get accounts from HD Wallet
        const accounts = await web3.eth.getAccounts();
        console.log("\nHD Wallet Accounts:");
        for (let i = 0; i < accounts.length; i++) {
            console.log("   Account " + i + ": " + accounts[i]);
        }

        // Step 2: Get contract instance
        const instance = await IPFSStorage.deployed();
        console.log("\nContract Address:", instance.address);

        // Step 3: Check balances
        console.log("\nAccount Balances:");
        for (let i = 0; i < accounts.length; i++) {
            const balance = await web3.eth.getBalance(accounts[i]);
            const etherBalance = web3.utils.fromWei(balance, "ether");
            console.log("   Account " + i + ": " + etherBalance + " ETH");
        }

        // Step 4: Store IPFS hash
        const ipfsHash = "QmbFMke1KXqnYyBBWxB74N4c5SBnJMVAiMNRcGu6x1AwQH";
        console.log("\nStoring IPFS hash...");
        console.log("   Using account:", accounts[0]);
        
        const tx = await instance.setHash(ipfsHash, { from: accounts[0] });
        console.log("   Transaction hash:", tx.tx);
        console.log("   Gas used:", tx.receipt.gasUsed);

        // Step 5: Retrieve the hash
        console.log("\nRetrieving stored hash...");
        const storedHash = await instance.getHash();
        console.log("   Stored hash:", storedHash);

        // Step 6: Summary
        console.log("\n============================================================");
        console.log("SUMMARY");
        console.log("============================================================");
        console.log("HD Wallet Account:", accounts[0]);
        console.log("Contract Address: ", instance.address);
        console.log("IPFS Hash Stored: ", storedHash);
        console.log("IPFS URL:         ", "https://ipfs.io/ipfs/" + storedHash);
        console.log("============================================================");
        console.log("BONUS 2 COMPLETE: HD Wallet Integration Successful!");
        console.log("============================================================");

        callback();

    } catch (error) {
        console.log("\nError:", error.message);
        callback(error);
    }
}

module.exports = main;