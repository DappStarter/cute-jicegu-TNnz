require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom produce bone food pledge random night upgrade coral light army giggle'; 
let testAccounts = [
"0xff6724a5b4d5c2f7f8d1540cdff687ed4e6f04b739d72bdc6c7b8a3670112abc",
"0x0cc3d7eaccb14c536ae5aeb86dd374e8ceff7c5d499fb1a0ae7d46f09b6105b1",
"0x7ed558563d606390c8e1b673b32cf699d40a244eaa1822a4fbf97ecd89b916c5",
"0x608e98dba1a7a4528849ad0ac012ab2a1f1a18164bf75a31ba4ab315960e2ce5",
"0x6a584563223ab1376d74286dbfd577a084bf56c699235ae9ee389553c277fd42",
"0xad3294da63cd15b1c6b5e33436acbcda4f3739a1ae8d0a390912e03b92671e82",
"0x9fa1c2d3d052c9353ef2bf5bb03c2d3446ad555220b042437a28463465f7fc5d",
"0xbf1e632e3f23ab3b1e3185c49567588255b60b81eb2c48e968ef6a0cdfde01ab",
"0x9290002f1cffcaa848b5baaf827c37bee6ad6bad28f557b15fdf09370dfa7283",
"0x35da5daae01604ecf87d6d60f90567c2effdd65d2af2b383e44e55c1233172a6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

