import { useEffect, useState } from "react";
import { getContract } from "../constant/contract";
import { readOnlyProvider } from "../constant/provider";


const useGetDetails = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const contract = getContract(readOnlyProvider)
        contract.getDetails()
            .then((res) => {
                console.log(res);
                setData(Array(res));
                
            })
            .catch((err) => {
                console.error(err);
            }
    )}, []);

    return data;
};

export default useGetDetails;