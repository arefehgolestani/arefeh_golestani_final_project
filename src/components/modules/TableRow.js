function TableRow({data}) {
  return (
    <tr key={data.id}>
      <td>{data.createdAt}</td>
      <td>{data.amount}</td>
      <td>{data.type}</td>
      <td>سفارش : {data.id}</td>
    </tr>
  );
}

export default TableRow;
