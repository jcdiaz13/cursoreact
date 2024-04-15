import { useState, useEffect } from "react";
import { getNinjaCats } from "../app/api/api.js";

const MyCatComponent = () => {
  const [ninjaCats, setNinjaCats] = useState([]);
  useEffect(() => {
    getNinjaCats().then((ninjacats) => {
      setNinjaCats(ninjacats);
    });
  }, []);

  return(
    {
      ninjaCats.map}
      </div>;

  )
};

export default MyCatComponent;
