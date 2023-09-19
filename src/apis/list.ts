import axios from "axios";


export type NftModel = {
    image_url: string
    name: string
    identifier: string
}

export const listAPI = {

    getList: (chain: string, address: string) => {
        return axios.get<{ nfts: [NftModel] }>(`https://testnets-api.opensea.io/v2/chain/${chain}/account/${address}/nfts?limit=20`)
    }

}