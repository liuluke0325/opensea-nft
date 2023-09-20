import axios from "axios";


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
        return `https://testnets-api.opensea.io/v2/chain/${chain}/account/${walletAddress}/nfts`
    }

}