import TableRow from "./TableRow";
import { serverFetch } from "@/lib/serverApi";

import styles from "./TransactionsInfo.module.css";

async function Transactions() {
  const transactions = await serverFetch("/user/transactions");

  return (
    <div className={styles.transactions}>
      <table>
        <thead>
          <tr>
            <th>تاریخ و ساعت</th>
            <th>مبلغ (تومان)</th>
            <th>نوع تراکنش</th>
            <th>شماره سفارش</th>
          </tr>
        </thead>
        <tbody>

          {transactions.length > 0 ? (
            transactions.map((item) => <TableRow key={item.id} data={item} />)
          ) : (
            <tr>
              <td colSpan={4}>موردی یافت نشد</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
