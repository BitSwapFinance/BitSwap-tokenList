import { TokenSymbol } from "../symbols/tokenSymbol";
import { ChainId } from "../chainId";

export interface TokenInfo {
    chains: number[];
    name: string;
    symbol: TokenSymbol,
    icon: string;
    contracts: Partial<Record<ChainId, { address: string; decimal: number }>>;
}

const baseURL = 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/'

export const tokens: TokenInfo[] = [
    {
        name: 'USD Coin',
        symbol: TokenSymbol.USDC,
        icon: baseURL + 'usdc.png',
        chains: [
            ChainId.EthereumMainnet,
        ],
        contracts: {
            [ChainId.EthereumMainnet]: {
                address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
                decimal: 6,
            },
        },
    },
    {
        name: "Tether USD",
        symbol: TokenSymbol.USDT,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/usdt.png',
        chains: [
            ChainId.EthereumMainnet, 
        ],
        contracts: {
            [ChainId.EthereumMainnet]: {
                address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
                decimal: 6,
            },
        },
    },
    {
        name: "Wrapped BTC",
        symbol: TokenSymbol.WBTC,
        icon: baseURL + 'WBTC.png',
        chains: [ChainId.EthereumMainnet],
        contracts: {
            [ChainId.EthereumMainnet]: {
                address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
                decimal: 8,
            },
        },
    },
    {
        name: "Ether",
        symbol: TokenSymbol.ETH,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/eth.png',
        chains: [ChainId.EthereumMainnet],
        contracts: {
            [ChainId.EthereumMainnet]: {
                address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',  //weth
                decimal: 18,
            },
        },
    },
    {
        name: "Dai Stablecoin",
        symbol: TokenSymbol.DAI,
        icon: baseURL + 'dai.png',
        chains: [ChainId.EthereumMainnet],
        contracts: {
            [ChainId.EthereumMainnet]: {
                address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped Ether",
        symbol: TokenSymbol.WETH,
        icon: baseURL + 'WETH.png',
        chains: [ChainId.EthereumMainnet],
        contracts: {
            [ChainId.EthereumMainnet]: {
                address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped liquid staked Ether 2.0",
        symbol: TokenSymbol.wstETH,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/wsteth.png',
        chains: [ChainId.Linea,ChainId.Scroll],
        contracts: {
            [ChainId.Linea]: {
                address: '0xb5bedd42000b71fdde22d3ee8a79bd49a568fc8f',
                decimal: 18,
            },
            [ChainId.Scroll]: {
                address: '0x2Bbbdf97295F73175b12CC087cF446765931e1C3',
                decimal: 18,
            },
        },
    },
]
