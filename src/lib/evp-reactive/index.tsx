import React from "react";
import { Reactive, listen } from "./hooks";
import EvpButton from "../evp-button";
import Toast from "../evp-toast";

export type EvpReactiveProps = {};

const EvpReactive: React.FC<EvpReactiveProps> = (props) => {
  const store = Reactive<{
    count: number;
  }>({
    count: 1,
  });

  const [state, setState] = React.useState({
    count: 1,
  });

  listen(store).then(
    ($state) => {
      Toast($state.count);
    },
    ($state) => {
      setState({
        count: $state.count,
      });
    }
  );

  return (
    <div>
      <h1>{store.state.count}</h1>
      <h1>{state.count}</h1>
      <EvpButton
        $click={() => {
          store.state = {
            count: store.state.count + 1,
          };
        }}
      >
        Add
      </EvpButton>
    </div>
  );
};

export default EvpReactive;
