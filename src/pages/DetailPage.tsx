import { useParams } from "react-router-dom";
import { listAPI } from "../apis/list";
import { useEffect, useState } from "react";

const DetailPage = () => {
    const { contract, id } = useParams();
    const [info, setInfo] = useState();

    useEffect(() => {
        if (id && contract) {
            (async () => {
                const resp = await listAPI.getNFT('goerli', contract, id)
                setInfo(resp.data.nfts);
            })();
        }
    }, [id])
    return <>TBD{info}</>
}

export default DetailPage;