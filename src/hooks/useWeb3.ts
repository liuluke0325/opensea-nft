import { useContext } from "react";
import { Web3Context, Web3ContextProps } from "../components/Web3Provider"

export const useWeb3 = () => {
    return useContext<Web3ContextProps>(Web3Context);
};