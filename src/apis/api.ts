
export const PAGINATION_LIMIT = 20;
export const WALLET_ADDRESS = "0x85fD692D2a075908079261F5E351e7fE0267dB02"



export const api = {
    getNFTList: (chain: string, walletAddress: string) => {
        return `/chain/${chain}/account/${walletAddress}/nfts`
    },
    getNFT: (chain: string, contractAddress: string, identifier: string) => {
        return `/chain/${chain}/contract/${contractAddress}/nfts/${identifier}`
    }
}