import * as React from "react";
import { useSelector } from "react-redux";
import { IStore } from "../configureStore";
import { IDataA } from "./reducerA";
import { Button }  from "@material-ui/core";

const ComponentA = () => {
  const data = useSelector<IStore, IDataA>((store) => store.a);

  return (
    <div>
      <h1>{data.title}</h1>
      <Button>Test</Button>
    </div>
  );
};

export default ComponentA;
