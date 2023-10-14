import classNames from "classnames";
import React from "react";

export interface ThProps
  extends React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement> {}

const Th: React.FC<ThProps> = ({ className, ...props }) => {
  return <th className={classNames(`evp-table-th`, className)} {...props} />;
};

export default Th;
