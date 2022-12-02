import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getName } from "../redux/action";
import { Card } from "./Card";

export const Home = () => {
  const data = useSelector((store) => store.data);
  const loading = useSelector((store) => store.loading);
  const error = useSelector((store) => store.error);
  const [name, setName] = useState("BMX");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getName(name));
  }, [name]);

  return (
    <div>
      <div className="mini-nav">
        <p
          style={
            name == "BMX"
              ? {
                  color: "rgb(228, 228, 228)",
                  fontWeight: "bolder",
                  fontSize: "20px",
                  marginTop: "15px",
                }
              : { color: "rgb(255, 255, 255)" }
          }
          onClick={() => setName("BMX")}
        >
          BMX
        </p>
        <p
          style={
            name == "Mountain"
              ? {
                  color: "rgb(228, 228, 228)",
                  fontWeight: "bolder",
                  fontSize: "20px",
                  marginTop: "15px",
                }
              : { color: "rgb(255, 255, 255)" }
          }
          onClick={() => setName("Mountain")}
        >
          Mountain
        </p>
        <p
          style={
            name == "Road"
              ? {
                  color: "rgb(228, 228, 228)",
                  fontWeight: "bolder",
                  fontSize: "20px",
                  marginTop: "15px",
                }
              : { color: "rgb(255, 255, 255)" }
          }
          onClick={() => setName("Road")}
        >
          Road
        </p>
        <p
          style={
            name == "Track"
              ? {
                  color: "rgb(228, 228, 228)",
                  fontWeight: "bolder",
                  fontSize: "20px",
                  marginTop: "15px",
                }
              : { color: "rgb(255, 255, 255)" }
          }
          onClick={() => setName("Track")}
        >
          Track
        </p>
      </div>
      <div className="line"></div>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error</h1>
      ) : (
        <div className="main">
          <h1>Highlights</h1>
          <div className="card-div">
            {data.map((e) => {
              return <Card e={e} key={e.id} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};
