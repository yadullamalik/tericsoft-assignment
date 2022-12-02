import React from "react";
import { useSelector } from "react-redux";

export const Card = ({ e }) => {
  const name = useSelector((store) => store.name);
  return (
    <div className="card" style={{ backgroundImage: `url(${e.img})` }}>
      <div>
        <div>
          <p>
            {e.title}
            {name}
          </p>
          <p>{e.time}</p>
        </div>
        {e.tags.map((el) => {
          return <button key={el}>{el}</button>;
        })}
      </div>
    </div>
  );
};
