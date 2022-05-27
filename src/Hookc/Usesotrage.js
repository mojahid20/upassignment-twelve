import { useEffect, useState } from "react";

const Usestorage = () => {
  const [storages, setStorages] = useState([]);
  useEffect(() => {
    fetch("https://secure-anchorage-02731.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setStorages(data));
  }, []);
  return [storages, setStorages];
};
export default Usestorage;
