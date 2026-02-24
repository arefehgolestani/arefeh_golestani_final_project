import Sidebar from "@/modules/Sidebar";
import TransactionsInfo from "@/modules/TransactionsInfo";


async function Transactions() {
  
  return (
    <div className="container">
      <Sidebar />
      <TransactionsInfo />
    </div>
  );
}

export default Transactions;
