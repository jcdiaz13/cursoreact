import { useState, useEffect } from "react";
import { getNinjaCats } from "../app/api/api.js";

const MyCatComponent = () => {
  const [ninjaCats, setNinjaCats] = useState([]);
  useEffect(() => {
    getNinjaCats().then((ninjacats) => {
      setNinjaCats(ninjacats);
    });
  }, []);

  return (
    <div>
      {ninjaCats.map((cat, index) => (
        <div key={index}>
          <h2>Cats Things</h2>
          <p>{cat.fact}</p>
        </div>
      ))}
    </div>
  );
};

export default MyCatComponent;
