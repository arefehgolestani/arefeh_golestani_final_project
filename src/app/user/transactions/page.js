import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import Sidebar from "@/modules/Sidebar";
import TransactionsInfo from "@/modules/TransactionsInfo";

async function Transactions() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  console.log(accessToken);

  if (!accessToken) {
    redirect("/");
  }

  return (
    <div className="container">
      <Sidebar />
      <TransactionsInfo />
    </div>
  );
}

export default Transactions;
