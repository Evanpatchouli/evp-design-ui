import classNames from "classnames";
import React from "react";

type Children =
  | string
  | number
  | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  | Iterable<React.ReactNode>
  | React.ReactPortal;

export type EvpWaterfallsProps = {
  children?: React.ReactNode;
  columns?: number;
  gap?: number | string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const EvpWaterfalls: React.FC<EvpWaterfallsProps> = ({ className, style, children, ...props }) => {
  const columns = props.columns || 4;
  const nodes = React.Children.toArray(children);
  // split nodes into every column
  const columnsNodes: Children[][] = new Array(columns).fill(0).map(() => []);
  nodes.forEach((node, index) => {
    columnsNodes[index % columns].push(node);
  });

  console.log(columnsNodes[0])

  return (
    <div
      className={classNames("evp", "evp-waterfalls", className)}
      style={{
        // @ts-ignore
        "--evp-waterfalls-columns": columns,
        "--gap": props.gap ? (typeof props.gap === "number" ? `${props.gap}px` : props.gap) : "8px",
      }}
      {...props}
    >
      {columnsNodes.map((nodes, index) => (
        <div key={index} className="evp-waterfalls-column">
          {nodes}
        </div>
      ))}
    </div>
  );
};

export default EvpWaterfalls;
