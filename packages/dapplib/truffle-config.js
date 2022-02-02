require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include enroll sure tribe street crawl noble pudding grid end army genuine'; 
let testAccounts = [
"0x3e88d0e0793d32b455e10d358a43f63a10c28717ea39e7af3cd030ac25ab5f41",
"0xcb92c962e2c3ced582da53490edcf2608263a006e429c5021de9a77aed629af7",
"0x343dfc42e80a1f5e97b5676665e7345ea20f6402f224e7a4e227f5d564768043",
"0xec53a634c71053fd9903a3a20275653694d8815e496129cb32cbc93d2911b8c1",
"0xcadbee86f37cd381e3efc8b80af6c544a12fa9318dca4b95d136dc2f086d3242",
"0x3aed1ceed8b4fc494c479c241a42a2d68be9d0fa0e9a273bf98bfcfe4d2a24f9",
"0x723abef65d6bc92f79ccac91703886ad0f7853552c1be7b2639fd2d5118019bf",
"0xbdd93a7eb818cdfedd5bb61baff04a7ccf913c2fdbb4060a26eec0ce3d9eaa33",
"0x67448a5d75bce73483fbd28ad5e06d64045ef2199197fef8589abf43940e9c95",
"0xa62da51bdecc56a0cedfeec70e98b3a319da4a26746094f16ecd1de193026e7d"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

