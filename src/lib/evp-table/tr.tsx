import classNames from "classnames";

export interface TableHeaderRowprops
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {}

const Header: React.FC<TableHeaderRowprops> = ({ className, ...props }) => {
  return <tr className={classNames("evp-table-column-headers-row", className)} {...props} />;
};

export interface TableRecordRowprops
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {}

const Record: React.FC<TableRecordRowprops> = ({ className, ...props }) => {
  return <tr className={classNames("evp-table-column-record-row", className)} {...props} />;
};

const Tr = {
  Header,
  Record,
};

export default Tr;
