import { TokenSymbol } from "../symbols/tokenSymbol";
import { ChainId } from "../chainId";

export interface TokenInfo {
    chains: number[];
    name: string;
    symbol: TokenSymbol,
    icon: string;
    contracts: Partial<Record<ChainId, { address: string; decimal: number }>>;
}

const baseURL = 'https://bitswap-finance.oss-ap-southeast-1.aliyuncs.com/tokens/'

export const tokens: TokenInfo[] = [
    {
        name: 'USD Coin',
        symbol: TokenSymbol.USDC,
        icon: baseURL + 'usdc.svg',
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
        icon: baseURL + 'usdt.png',
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
        name: "Bounce Token",
        symbol: TokenSymbol.AUCTION,
        icon: baseURL + 'auction.png',
        chains: [ChainId.EthereumMainnet],
        contracts: {
            [ChainId.EthereumMainnet]: {
                address: '0xA9B1Eb5908CfC3cdf91F9B8B3a74108598009096',
                decimal: 18,
            },
        },
    },
    {
        name: "BitStable Finance Token",
        symbol: TokenSymbol.BSSB,
        icon: baseURL + 'bssb.png',
        chains: [ChainId.EthereumMainnet],
        contracts: {
            [ChainId.EthereumMainnet]: {
                address: '0xda31D0d1Bc934fC34F7189E38A413ca0A5e8b44F',
                decimal: 18,
            },
        },
    },
    {
        name: "Multibit Token",
        symbol: TokenSymbol.MUBI,
        icon: baseURL + 'mubi.png',
        chains: [ChainId.EthereumMainnet],
        contracts: {
            [ChainId.EthereumMainnet]: {
                address: '0x38e382F74dfb84608F3C1F10187f6bEf5951DE93',
                decimal: 18,
            },
        },
    },
    {
        name: "DAII Token",
        symbol: TokenSymbol.DAII,
        icon: baseURL + 'daii.svg',
        chains: [ChainId.EthereumMainnet],
        contracts: {
            [ChainId.EthereumMainnet]: {
                address: '0x1981E32C2154936741aB6541a737b87C68F13cE1',
                decimal: 18,
            },
        },
    },
    {
        name: "ORDI Multibit Bridge Token",
        symbol: TokenSymbol.ORDI,
        icon: baseURL + 'ordi.png',
        chains: [ChainId.EthereumMainnet],
        contracts: {
            [ChainId.EthereumMainnet]: {
                address: '0xe2aE1a99bBd2eFab0a5C38f2146B7aCE61aBC5cE',
                decimal: 18,
            },
        },
    },
]
