import { Table } from "evp-design-ui";

const people = [
  { name: "John", gender: "Male", age: 22, address: "Hangzhou", phone: "123456789" },
  { name: "Jane", gender: "Female", age: 22, address: "Hangzhou", phone: "123456789" },
  { name: "Jasmine", gender: "Female", age: 22, address: "Burnaby", phone: "123456789" },
];

const columns = [
  { label: "Name", prop: "name" },
  { label: "Gender", prop: "gender" },
  { label: "Age", prop: "age" },
  { label: "Address", prop: "address" },
  { label: "Phone", prop: "phone" },
];

export default function Example() {
  return <Table schema={columns} data={people} />;
}
