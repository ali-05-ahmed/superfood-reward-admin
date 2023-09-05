import { InjectedConnector } from "@web3-react/injected-connector";

export const injectedConnector = new InjectedConnector({
  supportedChainIds: [
    1, // Mainet
    // 3, // Ropsten
    // 4, // Rinkeby
    5, // Goerli
    //42, // Kovan
    1337,
    11155111,
    421613,
    80001
  ],
});
