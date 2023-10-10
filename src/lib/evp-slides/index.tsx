import Left from "../evp-icon/left";
import EvpButton from "../evp-button";

import React, { useEffect, useReducer, useRef } from "react";
import Right from "../evp-icon/right";
import { initialState, type State } from "./state.store";
import actions, { Action } from "./state.action";
import classNames from "classnames";

export type EvpSlidesProps = {
  children?: React.ReactNode;
  onClickLeft?: () => void;
  onClickRight?: () => void;
  onClickItem?: (index: number) => void;
  showScroll?: boolean;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const purifyProps = (props: EvpSlidesProps) => {
  const { className, style, children, onClickLeft, onClickRight, onClickItem, showScroll, ...rest } = props;
  return rest;
};

// I want to make a component like a carousel
const EvpSlides: React.FC<EvpSlidesProps> = (props) => {
  const items = React.Children.toArray(props.children);
  const evpSlidesRef = useRef<any>(null);
  const [state, dispatch] = useReducer((state: State, action: Action) => {
    const newState = actions.find((a) => a.type === action.type)?.handler(state, action as any);
    return newState ?? state;
  }, initialState);

  useEffect(() => {
    dispatch({
      type: "READ_EFFECT",
      payload: (state: State) => {
        const slides = (evpSlidesRef.current?.children ?? []) as HTMLCollection;
        const nextItemPosition = (slides?.[state.current] as HTMLDivElement)?.offsetLeft;
        evpSlidesRef.current.scrollLeft = nextItemPosition;
      },
    });
  }, [state]);

  const scrollToNextItem = () => {
    dispatch({
      type: "CURRENT_PLUS",
      payload: {
        max: (items.length ?? 0) - 1,
      },
    });
  };

  const scrollToLastItem = () => {
    dispatch({
      type: "CURRENT_MINUS",
    });
  };

  return (
    <div
      ref={evpSlidesRef}
      className={classNames("evp-slides", props.className)}
      style={{
        // @ts-ignore
        "--showScroll": props.showScroll === false ? "none" : "block",
        ...props.style,
      }}
      {...purifyProps(props)}
    >
      {items.map((item) => (
        <div className="evp-slides-item">{item}</div>
      ))}
      <EvpButton $click={scrollToLastItem} shape="circle" theme="white" class="evp-slides__left">
        <Left />
      </EvpButton>
      <EvpButton $click={scrollToNextItem} shape="circle" theme="white" class="evp-slides__right">
        <Right />
      </EvpButton>
    </div>
  );
};

export default EvpSlides;
