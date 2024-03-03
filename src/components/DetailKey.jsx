import React from "react";

function DetailKey({ label, value }) {
  return (
    <p className=" border-t py-2 border-gray-600 first:border-none">{`${label} : ${value}`}</p>
  );
}

export default DetailKey;
