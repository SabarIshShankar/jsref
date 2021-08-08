import "./styles.css";
import JSONDATA from "./MOCK_DATA.json";
import { useState } from "react";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <input
        type="text"
        placeholder="Search"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      {JSONDATA.filter((val) => {
        if (searchTerm == "") {
          return val;
        } else if (
          val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div>
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}
