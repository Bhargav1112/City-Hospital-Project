import React from "react";
import List from "../../component/List";

function Medicines(props) {
  const orgData = [
    {
      id: 402,
      name: "abcd",
      price: 20,
      expiry: 2023,
      quantity: 10,
    },
    {
      id: 708,
      name: "w",
      price: 3,
      expiry: 5,
      quantity: 6,
    },
    {
      id: 7,
      name: "hello",
      price: 500,
      expiry: 2026,
      quantity: 2,
    },
    {
      id: 991,
      name: "dolo",
      price: 5,
      expiry: 2025,
      quantity: 20,
    },
  ];

  const getIdHandler = (id) => {
    console.log(id);
  };

  return (
    <div>
      <input type={"text"} id="search" name="search" />
      <List onButton={getIdHandler} data={orgData} />
      <h1>{props.data}</h1>
    </div>
  );
}

export default Medicines;
