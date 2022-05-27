import React from "react";
import { useForm } from "react-hook-form";

const Addservie = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://secure-anchorage-02731.herokuapp.com/service`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "applicatin/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="w-48 mx-auto">
      <h2 className="text-center text-4xl text-primary my-4">Add Items </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="border"
          placeholder="name"
          {...register("Name", { required: true, maxLength: 20 })}
        />
        <input
          className="border my-4"
          placeholder="description"
          {...register("description")}
        />
        <input
          className="border mb-4"
          placeholder="price"
          type="number"
          {...register("price")}
        />
        <input
          className="border mb-4"
          placeholder="quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="border mb-2"
          placeholder="phot URL"
          type="text"
          {...register("photo")}
        />
        <input type="submit" value="Add service" className="bg-primary" />
      </form>
    </div>
  );
};

export default Addservie;
