import axios from "axios";

const instance = axios.create({
    baseURL: 'https://testnets-api.opensea.io/v2',
    timeout: 10 * 1000,
});

export const getFetcher = (url: string) => {
    return instance.get(url).then(res => res.data)
}