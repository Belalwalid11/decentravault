const HDWalletProvider = require('@truffle/hdwallet-provider');


const MNEMONIC = 'wear student sample face depart abandon congress grape excuse shine confirm cereal';


const GANACHE_URL = 'http://127.0.0.1:7545';

module.exports = {
  networks: {
    
   
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777",
    },

   
    hdwallet: {
      provider: function() {
        return new HDWalletProvider({
          mnemonic: {
            phrase: MNEMONIC
          },
          providerOrUrl: GANACHE_URL,
          addressIndex: 0,
          numberOfAddresses: 5
        });
      },
      network_id: 5777,    // ← Changed from "*" to 5777
      gas: 6721975,        // ← Added gas limit
      gasPrice: 20000000000  // ← Added gas price
    }

  },

  compilers: {
    solc: {
      version: "0.8.19",
      evmVersion: "london"  
    }
  }
};
