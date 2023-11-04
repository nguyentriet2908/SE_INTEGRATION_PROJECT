import React from "react";

function ScrolledCard({ data, ...props }) {
  return (
    <div className={`scrolledCard ${data.color} text-slate-50 flex flex-col`}>
      <h1 className="pb-3 font-semibold">{data.title}</h1>
      <div className="text-medium">Ngày: {data.date}</div>
      <div className="text-medium">Kích cỡ: {data.size} KB</div>
    </div>
  );
}

export default ScrolledCard