/// <reference types="react" />
export interface TableHeaderRowprops extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
}
export interface TableRecordRowprops extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
}
declare const Tr: {
    Header: import("react").FC<TableHeaderRowprops>;
    Record: import("react").FC<TableRecordRowprops>;
};
export default Tr;
