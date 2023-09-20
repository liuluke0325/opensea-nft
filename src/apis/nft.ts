
export type NftModel = {
    image_url: string
    name: string
    identifier: string
    collection: string,
    description: string
    contract: string;
}



export const nftAPI = {

    getNFTList: (chain: string, walletAddress: string) => {
        return `/chain/${chain}/account/${walletAddress}/nfts`
    },
    getNFT: (chain: string, contractAddress: string, identifier: string) => {
        return `/chain/${chain}/contract/${contractAddress}/nfts/${identifier}`
    }

}