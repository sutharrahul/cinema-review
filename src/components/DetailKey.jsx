import React from "react";

function DetailKey({ label, value }) {
  return (
    <p className="first:border-none border-t py-2 border-gray-600 font-bold text-lg">
      {`${label} : `}{" "}
      <span className="font-semibold text-base text-cyan-600">{`${value}`}</span>
    </p>
  );
}

export default DetailKey;
