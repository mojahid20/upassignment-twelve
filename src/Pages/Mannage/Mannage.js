import React from "react";
import Usestorage from "../../Hookc/Usesotrage";

const Mannage = () => {
  const [parts, setParts] = Usestorage();
  const handalDelet = (id) => {
    const prosed = window.confirm("are y ready to delete?");
    if (prosed);
    const url = `https://secure-anchorage-02731.herokuapp.com/service/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remening = parts.filter((part) => part._id !== id);
        setParts(remening);
      });
  };
  return (
    <div className="flex justify-center items-center mt-10  ">
      <div class="card w-96 bg-base-600 shadow-xl p-11 text-center ">
        <h2 className="text-center text-3xl text-purple-800 mb-4">
          manage ur site
        </h2>
        {parts.map((part) => (
          <div key={part._id}>
            <h5>
              {part.name}{" "}
              <button onClick={() => handalDelet(part._id)}>X</button>{" "}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mannage;
