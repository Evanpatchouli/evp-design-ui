import classNames from "classnames";
import React from "react";

export interface TdProps
  extends React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement> {}

const Td: React.FC<TdProps> = ({ className, ...props }) => {
  return <td className={classNames(`evp-table-td`, className)} {...props} />;
};

export default Td;
