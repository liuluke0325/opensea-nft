import axios from "axios";


export type NftModel = {
    image_url: string
    name: string
    identifier: string
    collection: string,
    description: string
    contract: string;


}

export const listAPI = {

    getNFTList: (chain: string, walletAddress: string) => {
        return axios.get<{ nfts: [NftModel] }>(`https://testnets-api.opensea.io/v2/chain/${chain}/account/${walletAddress}/nfts`, {
            params: {
                limit: 5,
                // offset  
            }
        })
    },
    getNFT: (chain: string, contractAddress: string, identifier: string) => {
        return axios.get(`https://testnets-api.opensea.io/v2/chain/${chain}/contract/${contractAddress}/nfts/${identifier}`)
    }

}