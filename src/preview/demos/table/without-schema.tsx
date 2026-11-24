import { Table } from "evp-design-ui";

const people = [
  { name: "John", gender: "Male", age: 22, address: "Hangzhou", phone: "123456789" },
  { name: "Jane", gender: "Female", age: 22, address: "Hangzhou", phone: "123456789" },
  { name: "Jasmine", gender: "Female", age: 22, address: "Burnaby", phone: "123456789" },
];

export default function WithoutSchema() {
  return <Table data={people} />;
}
