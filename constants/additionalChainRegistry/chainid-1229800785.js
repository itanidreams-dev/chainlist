export const data = {
  name: "iTani Network Chain",
  chain: "ITN",
  icon: "itani",
  rpc: [
    "https://node.itaninetworkchain.com/jsonrpc",
    "https://relay.itaninetworkchain.com/jsonrpc"
  ],
  faucets: [],
  nativeCurrency: {
    name: "iTani",
    symbol: "ITANI",
    decimals: 18
  },
  features: [{ name: "EIP155" }],
  infoURL: "https://github.com/itanidreams-dev/iTani-Network-Chain",
  shortName: "itani",
  chainId: 1229800785,
  networkId: 1229800785,
  explorers: [
    {
      name: "iTani Explorer",
      url: "https://node.itaninetworkchain.com",
      standard: "EIP3091"
    },
    {
      name: "iTani Explorer (Relay)",
      url: "https://relay.itaninetworkchain.com",
      standard: "EIP3091"
    }
  ]
};
