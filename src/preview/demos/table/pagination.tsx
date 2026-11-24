import { useState } from "react";
import { Button, SvgIcon, Table } from "evp-design-ui";

const people = Array.from({ length: 103 }, (_, index) => {
  const number = index + 1;
  return {
    name: `Person ${number}`,
    gender: number % 2 === 0 ? "Male" : "Female",
    age: number,
    address: "Hangzhou",
    phone: "123456789",
  };
});

const columns = [
  { label: "Name", prop: "name" },
  {
    label: "Gender",
    prop: "gender",
    render(value: string) {
      return value === "Male" ? <SvgIcon.Male /> : <SvgIcon.Female />;
    },
  },
  { label: "Age", prop: "age" },
  { label: "Address", prop: "address" },
  { label: "Phone", prop: "phone" },
  {
    label: "Actions",
    render() {
      return (
        <div>
          <Button size="mini" plain text="edit" />
          <Button size="mini" plain mgl_8 text="delete" />
        </div>
      );
    },
  },
];

export default function Pagination() {
  const [page, setPage] = useState(1);
  return (
    <Table
      zebra
      schema={columns}
      data={people}
      paginator
      pagination={{ currentPage: page, setCurrentPage: setPage, pageSize: 10 }}
    />
  );
}
