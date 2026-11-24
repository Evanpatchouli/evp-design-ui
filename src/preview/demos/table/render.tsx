import { Button, SvgIcon, Table } from "evp-design-ui";

const people = [
  { name: "John", gender: "Male", age: 22, address: "Hangzhou", phone: "123456789" },
  { name: "Jane", gender: "Female", age: 22, address: "Hangzhou", phone: "123456789" },
  { name: "Jasmine", gender: "Female", age: 22, address: "Burnaby", phone: "123456789" },
];

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

export default function Render() {
  return <Table schema={columns} data={people} />;
}
