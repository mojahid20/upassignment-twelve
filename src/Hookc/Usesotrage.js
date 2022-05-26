import { useEffect, useState } from "react";

const Usestorage=()=>{
    const [storages,setStorages]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=> res.json())
        .then(data=> setStorages(data));
    },[]);
    return [storages,setStorages];
};
export default Usestorage;