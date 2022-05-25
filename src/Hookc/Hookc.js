import { useEffect, useState } from "react";

const Usestorage=()=>{
    const [parts, setParts]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=> res.json())
        .then(data=> setParts(data));
    },[]);
    return [parts,setParts]
};
export default Usestorage;