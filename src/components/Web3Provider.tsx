import React, { ReactNode, createContext, useEffect, useState } from 'react';
import Web3 from 'web3';


export type Web3ContextProps = {
    web3: Web3 | undefined,
    address: string | undefined
}
export const Web3Context = createContext<Web3ContextProps>({
    web3: undefined,
    address: undefined
});



type Web3ProviderProps = {
    children: ReactNode;
}
export const Web3Provider = ({ children }: Web3ProviderProps) => {
    const [web3, setWeb3] = useState<Web3>();
    const [address, setAddress] = useState<string>();

    useEffect(() => {
        if (window.ethereum) { // check if metamask available
            const provider = new Web3(Web3.givenProvider || "ws://localhost:8545");
            setWeb3(provider);
        }
    }, []);

    useEffect(() => {
        const loadAccount = async () => {
            if (web3) {
                const accounts = await web3.eth.getAccounts();
                setAddress(accounts[0]);
            }
        };
        loadAccount();
    }, [web3]);

    return (
        <Web3Context.Provider value={{
            web3,
            address
        }}>
            {children}
        </Web3Context.Provider>
    );
};