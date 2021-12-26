import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import AppExtensions from "./AppExtensions";
import { Options } from "../Options/Options";

const carArray = [
  {
    name: "cayenne",
    type: "sedan",
    id: 1,
  },
  {
    name: "jeep",
    type: "vers",
    id: 2,
  },
];
export function App({ title }) {
  return (
    <div className="App">
      <h1>Hi</h1>
      {title && <AppExtensions titleProp={title} />}
      {carArray.length > 0 ? (
        <Options options={carArray} />
      ) : (
        <AppExtensions titleProp={"default"} />
      )}
    </div>
  );
}

App.propTypes = {
  title: PropTypes.string.isRequired,
};
