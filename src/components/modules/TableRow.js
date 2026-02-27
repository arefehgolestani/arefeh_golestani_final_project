import { formatPersianDateTime } from "@/services/convertDate";

function TableRow({ data }) {
  return (
    <tr key={data.id}>
      <td>{formatPersianDateTime(data.createdAt)}</td>
      <td>{data.amount.toLocaleString("fa-IR")} </td>
      <td>{data.type === "Purchase" && "ثبت نام در تور گردشگری"}</td>
      <td className="vazirFont"> {data.id.split("-", 1)}</td>
    </tr>
  );
}

export default TableRow;
