import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faPersonSkiing,
  faPersonSwimming,
  faPersonBiking,
  faHorse,
  faPersonFalling,
  faGolfBall,
  faPersonWalking,
  faWater,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../redux/action";

export const Navbar = () => {
  const [prop, setProp] = useState("featured");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData(prop));
  }, [prop]);

  return (
    <div className="nav">
      <div
        className="icon-div"
        style={
          prop == "featured"
            ? { backgroundColor: "rgb(134, 134, 134)" }
            : { backgroundColor: "rgb(70, 70, 70)" }
        }
        onClick={() => setProp("featured")}
      >
        <FontAwesomeIcon className="icon" icon={faStar} size="3x" />
        <p className="p">Featured</p>
      </div>
      <div
        className="icon-div"
        style={
          prop == "armory"
            ? { backgroundColor: "rgb(134, 134, 134)" }
            : { backgroundColor: "rgb(70, 70, 70)" }
        }
        onClick={() => setProp("armory")}
      >
        <FontAwesomeIcon className="icon" icon={faPersonSkiing} size="3x" />
        <p className="p">Armoury</p>
      </div>
      <div
        className="icon-div"
        style={
          prop == "aquatics"
            ? { backgroundColor: "rgb(134, 134, 134)" }
            : { backgroundColor: "rgb(70, 70, 70)" }
        }
        onClick={() => setProp("aquatics")}
      >
        <FontAwesomeIcon className="icon" icon={faPersonSwimming} size="3x" />
        <p className="p">Aquatics</p>
      </div>
      <div
        className="icon-div"
        style={
          prop == "cycling"
            ? { backgroundColor: "rgb(134, 134, 134)" }
            : { backgroundColor: "rgb(70, 70, 70)" }
        }
        onClick={() => setProp("cycling")}
      >
        <FontAwesomeIcon className="icon" icon={faPersonBiking} size="3x" />
        <p className="p">Cycling</p>
      </div>
      <div
        className="icon-div"
        style={
          prop == "equestrain"
            ? { backgroundColor: "rgb(134, 134, 134)" }
            : { backgroundColor: "rgb(70, 70, 70)" }
        }
        onClick={() => setProp("equestrain")}
      >
        <FontAwesomeIcon className="icon" icon={faHorse} size="3x" />
        <p className="p">Equestrian</p>
      </div>
      <div
        className="icon-div"
        style={
          prop == "extreme"
            ? { backgroundColor: "rgb(134, 134, 134)" }
            : { backgroundColor: "rgb(70, 70, 70)" }
        }
        onClick={() => setProp("extreme")}
      >
        <FontAwesomeIcon className="icon" icon={faPersonFalling} size="3x" />
        <p className="p">Extreme</p>
      </div>
      <div
        className="icon-div"
        style={
          prop == "golf"
            ? { backgroundColor: "rgb(134, 134, 134)" }
            : { backgroundColor: "rgb(70, 70, 70)" }
        }
        onClick={() => setProp("golf")}
      >
        <FontAwesomeIcon className="icon" icon={faGolfBall} size="3x" />
        <p className="p">Golf</p>
      </div>
      <div
        className="icon-div"
        style={
          prop == "gymnastics"
            ? { backgroundColor: "rgb(134, 134, 134)" }
            : { backgroundColor: "rgb(70, 70, 70)" }
        }
        onClick={() => setProp("gymnastics")}
      >
        <FontAwesomeIcon className="icon" icon={faPersonWalking} size="3x" />
        <p className="p">Gymnastics</p>
      </div>
      <div
        className="icon-div"
        style={
          prop == "lake"
            ? { backgroundColor: "rgb(134, 134, 134)" }
            : { backgroundColor: "rgb(70, 70, 70)" }
        }
        onClick={() => setProp("lake")}
      >
        <FontAwesomeIcon className="icon" icon={faWater} size="3x" />
        <p className="p">Lake & Sea</p>
      </div>
    </div>
  );
};
