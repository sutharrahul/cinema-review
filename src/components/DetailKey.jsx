import React from "react";

function DetailKey({ label, value }) {
  return <p className="border-t py-2">{`${label} : ${value}`}</p>;
}

export default DetailKey;
