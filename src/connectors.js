import { InjectedConnector } from '@web3-react/injected-connector';
// import { NetworkConnector } from '@web3-react/network-connector'
// import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
// import { INFURA_PREFIXES } from './sdk/constant';


const supportedChainIds = [
    1, // Mainet
    3, // Ropsten
    4, // Rinkeby
    42, // Kovan
]
export const injected = new InjectedConnector({
    supportedChainIds
})

