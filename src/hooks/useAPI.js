import { useEffect, useState } from "react";

const useAPI = () => {

const [details, setDetails] = useState({});
const [number, setNumber] = useState(null);

    useEffect(() => {
        fetch(`https://phonevalidation.abstractapi.com/v1/?api_key=5eb96aa0fd6f4a4aa853e39a90b1cbd4&phone=${number}`)
        .then(res => res.json())
        .then(data => {
            setDetails(data)
            console.log(data);
        })
        return details;
    }, [number])

    // const getNumberDetails = (number) => {
    //     console.log(number);
    //     // async function fetchData(){
    //     //     try{
    //     //         const response = await fetch(`https://phonevalidation.abstractapi.com/v1/?api_key=${API_KEY}&phone=${number}`);
    //     //         const data = await response.json();
    //     //         setDetails(data);
    //     //     } catch (e) {
    //     //         console.log(e.message);
    //     //     }
    //     // } 
    //     // fetchData();
        
    // }

    // return {
        
    // }

    return {
        number, 
        setNumber, 
        details
    }
}

export default useAPI;