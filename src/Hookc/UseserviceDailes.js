import { useEffect, useState } from "react";

const UseserviceDailes = (partsId) => {
  const [service, setService] = useState({});

  useEffect(() => {
    const url = `https://secure-anchorage-02731.herokuapp.com/service/${partsId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [partsId]);
  return [service];
};
export default UseserviceDailes;
