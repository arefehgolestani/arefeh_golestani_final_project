import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import Sidebar from "@/modules/Sidebar";
import UserTours from "@/modules/UserTours";

function UserToursPage() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  console.log(accessToken);

  if (!accessToken) {
    redirect("/");
  }
  return (
    <div className="container">
      <Sidebar />

      <UserTours />
    </div>
  );
}

export default UserToursPage;
