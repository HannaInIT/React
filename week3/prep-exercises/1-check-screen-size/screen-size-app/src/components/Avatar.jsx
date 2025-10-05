import React from "react";

export default function Avatar({ name, color }) {
  return (
    <div
      style={{
        width: 150,
        height: 150,
        backgroundColor: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
        borderRadius: "50%",
        margin: "0 auto",
        transition: "background-color 0.3s",
      }}
    >
      {name}
    </div>
  );
}
