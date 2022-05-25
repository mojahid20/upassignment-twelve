import { useEffect, useState } from "react";

const UseserviceDailes= partsId=>{
    const [service, setService]=useState({});

  useEffect(()=>{
    const url=`http://localhost:5000/service/${partsId}`
    fetch(url)
    .then(res=> res.json())
    .then(data=> setService(data))
  },[partsId])
  return [service]
}
export default UseserviceDailes;