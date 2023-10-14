import Left from "../evp-icon/left";
import EvpButton from "../evp-button";

import React, { useEffect, useReducer, useRef } from "react";
import Right from "../evp-icon/right";
import { initialState, type State } from "./state.store";
import actions, { Action } from "./state.action";
import classNames from "classnames";

export type EvpSlidesProps = {
  items?: React.ReactNode;
  children?: React.ReactNode;
  onClickLeft?: (e: Event) => void;
  onClickRight?: (e: Event) => void;
  onClickItem?: (index: number) => void;
  showBtns?: boolean;
  showScroll?: boolean;
  showTabSpots?: boolean;
  adjacentTabScaled?: boolean;
  tabSpotColor?: {
    default?: string;
    hover?: string;
    click?: string;
    active?: string;
  };
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const purifyProps = (props: EvpSlidesProps) => {
  const {
    className,
    style,
    items,
    children,
    showBtns,
    onClickLeft,
    onClickRight,
    onClickItem,
    showScroll,
    adjacentTabScaled,
    ...rest
  } = props;
  return rest;
};

// I want to make a component like a carousel
const EvpSlides: React.FC<EvpSlidesProps> = (props) => {
  const items = React.Children.toArray(props.children ?? props.items ?? []);
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
        "--showScroll": props.showScroll !== true ? "none" : "block",
        ...props.style,
      }}
      {...purifyProps(props)}
    >
      {items.map((item) => (
        <div className="evp-slides-item">{item}</div>
      ))}
      {props.showBtns !== false ? (
        <>
          <EvpButton $click={scrollToLastItem} shape="circle" theme="white" class="evp-slides__left">
            <Left />
          </EvpButton>
          <EvpButton $click={scrollToNextItem} shape="circle" theme="white" class="evp-slides__right">
            <Right />
          </EvpButton>
        </>
      ) : (
        void 0
      )}

      {props.showTabSpots !== false ? (
        <div
          className="evp-slides__tab-spots"
          style={{
            // @ts-ignore
            "--tabSpotColor": props.tabSpotColor?.default,
            // @ts-ignore
            "--tabSpotColorHover": props.tabSpotColor?.hover,
            // @ts-ignore
            "--tabSpotColorClick": props.tabSpotColor?.click,
            // @ts-ignore
            "--tabSpotColorActive": props.tabSpotColor?.active,
          }}
        >
          {items.map((_, index) => (
            <div
              className={classNames("evp-slides__tab-spot-box", {
                "evp-slides__tab-spot-box--active": index === state.current,
                "evp-slides__tab-spot--active-box-next": props.adjacentTabScaled
                  ? index === state.current + 1 || index === state.current - 1
                  : false,
              })}
              onClick={() => {
                dispatch({
                  type: "SET_CURRENT",
                  payload: index,
                });
                props.onClickItem?.(index);
              }}
            >
              <div
                className={classNames("evp-slides__tab-spot", {
                  "evp-slides__tab-spot--active": index === state.current,
                  "evp-slides__tab-spot--active-next": props.adjacentTabScaled
                    ? index === state.current + 1 || index === state.current - 1
                    : false,
                })}
              />
            </div>
          ))}
        </div>
      ) : (
        void 0
      )}
    </div>
  );
};

export default EvpSlides;
