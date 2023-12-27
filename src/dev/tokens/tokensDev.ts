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
        name: "Tether USD",
        symbol: TokenSymbol.USDT,
        icon: baseURL + 'usdt.png',
        chains: [
            ChainId.BSCTestnet, 
        ],
        contracts: {
            [ChainId.BSCTestnet]: {
                address: '0x6AECfe44225A50895e9EC7ca46377B9397D1Bb5b',
                decimal: 6,
            },
        }
    },
    {
        name: 'AMMX',
        symbol: TokenSymbol.AMMX,
        chains: [ChainId.BSCTestnet],
        icon: baseURL + 'ammx.png',
        contracts: {
            [ChainId.BSCTestnet]: {
                address: '0x2103C8487208B7D4ead5b7b4910bb78B565A4529',
                decimal: 18,
            },
        },
    },
    {
        name: 'BNB',
        symbol: TokenSymbol.BNB,
        chains: [ChainId.BSCTestnet],
        icon: baseURL + 'bnb.png',
        contracts: {
            [ChainId.BSCTestnet]: {
                address: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd', //Wrapped BNB
                decimal: 18,
            },
        },
    },
    {
        name: 'Wrapped BNB',
        symbol: TokenSymbol.WBNB,
        chains: [ChainId.BSCTestnet],
        icon: baseURL + 'bnb.png',
        contracts: {
            [ChainId.BSCTestnet]: {
                address: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd', //Wrapped BNB
                decimal: 18,
            },
        },
    },
    {
        name: 'iZUMi Token',
        symbol: TokenSymbol.IZI,
        icon: baseURL + 'izumi.svg',
        chains: [
            ChainId.BSCTestnet, 
        ],
        contracts: {
            [ChainId.BSCTestnet]: {
                address: '0x551197e6350936976DfFB66B2c3bb15DDB723250',
                decimal: 18,
            },
        }
    },
]