import classNames from "classnames";
import EvpBaseProps from "../props";
import AllParser from "../utils/props.parser";
import { linkTo } from "../utils/route";

export interface EvpBreadCrumbProps extends EvpBaseProps {
  routes?: { title: string; path?: string | { path?: string; hash?: boolean }; hash?: boolean; meta?: any }[];
  itemClick?: <T extends Record<string, unknown>>(
    e?: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    route?: { title: string; path?: string | { path?: string; hash?: boolean }; hash?: boolean; meta?: T }
  ) => void;
  fontSize?: string;
  class?: string;
  style?: React.CSSProperties;
}

function purifyProps(props: EvpBreadCrumbProps) {
  const { routes, onClick, fontSize, class: className, ...rest } = props;
  return AllParser(rest);
}

const EvpBreadCrumb: React.FC<EvpBreadCrumbProps> = (props) => {
  const last = (idx: number) => (idx !== (props.routes?.length ?? 0) - 1 ? "" : "last");
  const $props = purifyProps(props);
  return (
    <div
      className={classNames("evp-breadcrumb", props.class)}
      id={props.id}
      style={{
        fontSize: `${props.fontSize ?? 14}px`,
        ...$props.style,
      }}
      {...$props.event}
    >
      {props.routes?.map((route, idx) => {
        return (
          <>
            <span
              className={classNames("evp-breadcrumb-title", route.path ? "linked" : "", last(idx))}
              onClick={(e) => {
                if (props.itemClick) {
                  props.itemClick(e, route);
                } else {
                  if (route.path) {
                    linkTo(route.path, route.hash);
                  }
                }
              }}
              style={{
                color: idx !== (props.routes?.length ?? 0) - 1 ? "lightgray" : "#000",
              }}
            >
              {route.title}
            </span>

            {idx !== (props.routes?.length ?? 0) - 1 ? (
              <span style={{ padding: "0 8px", color: "lightgray" }}>/</span>
            ) : (
              void 0
            )}
          </>
        );
      })}
    </div>
  );
};

export default EvpBreadCrumb;
